# Android (Kotlin) WebView Integration

This sample demonstrates how to implement a fully working two-way bridge between an Angular App and an Android WebView.

## Architecture

1. **Angular -> Android (Web to Native)**
   - Android creates a `JavascriptInterface` Object named `AndroidBridge`.
   - Angular finds this object via `window.AndroidBridge` and calls its exposed method `postMessage(jsonString)`.
   - Android parses the action string.

2. **Android -> Angular (Native to Web)**
   - Angular exposes a global method attached to window: `window.onMessageFromNative(jsonString)`.
   - Angular's `NativeBridgeService` binds to this function and pushes the message to an RxJS Subject inside Angular's Zone.
   - Android calls `webView.evaluateJavascript("javascript:window.onMessageFromNative('...')", null)`.

## Prerequisites (Android Side)

1. Ensure INTERNET permission is placed inside your `AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.INTERNET" />
<!-- Required if testing locally on unsecure http instead of https -->
<application android:usesCleartextTraffic="true" ... >
```

2. Your `res/layout/activity_main.xml` needs a Button and the WebView:
```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <Button
        android:id="@+id/btnSendToWeb"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Send Message to Web App" />

    <WebView
        android:id="@+id/webView"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
</LinearLayout>
```

## How to test locally

1. Terminate the current `npm start` command in your terminal and restart it using host: `npm run start` (Wait, it's already running on 0.0.0.0 based on package.json!).
2. Ensure your Android Emulator is running. Emulators reach your local development host using the IP `10.0.2.2`.
3. Open the Android project inside Android Studio.
4. Run the app on the emulator.
5. Click the buttons on the Angular web interface to see Toast messages in Android!
6. Click the native Android button to see the JSON string appear inside the Angular interface!
