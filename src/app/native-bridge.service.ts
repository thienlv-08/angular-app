import { Injectable, NgZone } from '@angular/core';
import { Subject, Observable } from 'rxjs';

declare global {
  interface Window {
    AndroidBridge: {
      postMessage: (message: string) => void;
    };
    onMessageFromNative: (message: string) => void;
  }
}

@Injectable({
  providedIn: 'root',
})
export class NativeBridgeService {
  private messageSubject = new Subject<any>();

  constructor(private ngZone: NgZone) {
    // Expose a global function for Kotlin to call back into Web JS
    window.onMessageFromNative = (message: string) => {
      // Run in Angular zone to ensure UI updates happen immediately
      this.ngZone.run(() => {
        try {
          const parsed = JSON.parse(message);
          this.messageSubject.next(parsed);
        } catch (e) {
          this.messageSubject.next({ raw: message });
        }
      });
    };
  }

  // Observable for components to subscribe to
  get messages$(): Observable<any> {
    return this.messageSubject.asObservable();
  }

  // Send message from Web JS to Kotlin
  sendMessageToNative(action: string, payload: any = {}): void {
    const messageStr = JSON.stringify({ action, payload });
    console.log('window', window);
    console.log('window AndroidBridge', window?.AndroidBridge);
    if (window.AndroidBridge && typeof window.AndroidBridge.postMessage === 'function') {
      // Native App Bridge available
      window.AndroidBridge.postMessage(messageStr);
    } else {
      // Browser Environment (No native bridge)
      console.warn('AndroidBridge is not available. Native environment not detected.', messageStr);
    }
  }
}
