package com.example.webviewbridge

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import org.json.JSONObject

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        
        // 1. Configure WebView and expose JavaScript environment
        webView.settings.javaScriptEnabled = true
        webView.webViewClient = WebViewClient() // Ensure links open within the WebView instead of external browser
        
        // 2. Add JavaScript Interface
        // The first argument is the Kotlin Object handling the callbacks.
        // The second argument "AndroidBridge" is the global object that will be exposed in Web JS: window.AndroidBridge
        webView.addJavascriptInterface(WebAppInterface(), "AndroidBridge")

        // 3. Load the Angular Web App
        // For local development on emulator, use 10.0.2.2 instead of localhost
        webView.loadUrl("http://10.0.2.2:4200") 

        // 4. Sample Android UI Button logic to push a message TO Web JS
        val btnSend = findViewById<Button>(R.id.btnSendToWeb)
        btnSend.setOnClickListener {
            // We send a JSON string describing the action
            val messageJson = JSONObject().apply {
                put("action", "NATIVE_NOTIFICATION")
                put("payload", JSONObject().apply {
                    put("message", "Hello from Android Kotlin button!")
                    put("timestamp", System.currentTimeMillis())
                })
            }
            sendMessageToWeb(messageJson.toString())
        }
    }

    /**
     * The Interface bridging Web JS calls into Android Kotlin
     * We defined this under the name "AndroidBridge" in onCreate.
     */
    inner class WebAppInterface {

        @JavascriptInterface
        fun postMessage(jsonString: String) {
            // Caution: This runs on a separate background thread!
            // If you need to update the Android UI, you must switch to the Main Thread:
            runOnUiThread {
                try {
                    val json = JSONObject(jsonString)
                    val action = json.optString("action")
                    val payload = json.optJSONObject("payload")

                    when (action) {
                        "GREETING" -> {
                            val text = payload?.optString("text") ?: "No text"
                            Toast.makeText(this@MainActivity, "Received from Web: $text", Toast.LENGTH_SHORT).show()
                        }
                        "REQUEST_DATA" -> {
                            // The Web JS app requested data; we act on it and send data back!
                            val type = payload?.optString("type")
                            
                            val responseJson = JSONObject().apply {
                                put("action", "DATA_RESPONSE")
                                put("payload", JSONObject().apply {
                                    put("info", "User profile for Request Type: $type")
                                    put("status", "SUCCESS")
                                })
                            }

                            sendMessageToWeb(responseJson.toString())
                            Toast.makeText(this@MainActivity, "Data requested and sent!", Toast.LENGTH_SHORT).show()
                        }
                        else -> {
                            Toast.makeText(this@MainActivity, "Unknown action received: $action", Toast.LENGTH_SHORT).show()
                        }
                    }
                } catch (e: Exception) {
                    e.printStackTrace()
                }
            }
        }
    }

    /**
     * Helper to evaluate Javascript on the Web JS side
     * It calls `window.onMessageFromNative` in the Angular environment.
     */
    private fun sendMessageToWeb(jsonResponse: String) {
        // EvaluateJavascript must be called on the UI thread
        runOnUiThread {
            // Escape double quotes inside the JSON to safely place it inside a JS string
            val escapeQuotes = jsonResponse.replace("\"", "\\\"")
            val jsScript = "javascript:window.onMessageFromNative(\"$escapeQuotes\")"
            webView.evaluateJavascript(jsScript, null)
        }
    }
}
