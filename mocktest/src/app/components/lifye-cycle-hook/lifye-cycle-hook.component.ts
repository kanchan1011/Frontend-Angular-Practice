import { Component } from '@angular/core';

@Component({
  selector: 'app-lifye-cycle-hook',
  imports: [],
  templateUrl: './lifye-cycle-hook.component.html',
  styleUrl: './lifye-cycle-hook.component.css'
})
export class LifyeCycleHookComponent {

  constructor(){
    console.log("constructor called..")
  }
  ngOnInit(){
    console.log("ng OnInit called..")
  }
   ngDoCheck(){
    console.log("ng Docheck called..")
  }
   ngOnDestroy(){
    console.log("ng ondestroy called..")
  }

   ngAfterViewInit(){
    console.log("ng after view init called..")
  }
}
