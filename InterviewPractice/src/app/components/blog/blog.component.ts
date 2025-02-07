import { Component } from '@angular/core';
import { ParentComponent } from "../../shared-components/parent/parent.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
