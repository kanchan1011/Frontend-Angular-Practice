import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { SenderComponent } from "./components/sender/sender.component";
import { LifyeCycleHookComponent } from './components/lifye-cycle-hook/lifye-cycle-hook.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ReceiverComponent, SenderComponent,LifyeCycleHookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mocktest';
}
