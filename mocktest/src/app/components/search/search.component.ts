import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchInput = new FormControl<string|null>('');
  results: any;
  userList:any=[];
  private subscription!: Subscription;

  constructor(private searchService: SearchService) {}
  
  ngOnInit() {
    this.subscription=this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((value):value is string =>value!=null && value.length>2),
      switchMap(query=>this.searchService.search(query))
    ).subscribe({
      next:(data)=>{this.results=data;
      
    this.userList.push(this.results.users)
    console.log(typeof(this.results.users))
    console.log("this.userList: ",typeof(this.userList))
    },
      
      error:(err)=>console.log(err)
    })
  }
  
 ngOnDestroy(){
  this.subscription.unsubscribe();
 }
}
