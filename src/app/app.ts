import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('native-web');
  messageFromNative = signal<string>('No messages yet');


  ngOnInit() {
 
  }
}
