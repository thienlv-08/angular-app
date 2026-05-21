import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NativeBridgeService } from './native-bridge.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('native-web');
  messageFromNative = signal<string>('No messages yet');
  
  private nativeBridge = inject(NativeBridgeService);

  ngOnInit() {
    this.nativeBridge.messages$.subscribe(msg => {
      // Pretty print JSON response from native
      this.messageFromNative.set(JSON.stringify(msg, null, 2));
    });
  }

  sendHelloToNative() {
    this.nativeBridge.sendMessageToNative('GREETING', { text: 'Hello from Web JS (Angular)!' });
  }

  requestDataFromNative() {
    this.nativeBridge.sendMessageToNative('REQUEST_DATA', { type: 'USER_INFO' });
  }
}
