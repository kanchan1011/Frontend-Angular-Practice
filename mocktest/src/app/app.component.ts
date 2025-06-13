import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultistepParentComponent } from './components/multistep-parent/multistep-parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MultistepParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mocktest';
}
