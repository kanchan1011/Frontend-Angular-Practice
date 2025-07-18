import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CapitlizePipe } from './pipe/capitlize.pipe';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CapitlizePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'testApp';
  person = [
    {
      name: 'Rahul',
      city: 'Mumbai',
    },
    {
      name: 'Rohit',
      city: 'Pune',
    },
    {
      name: 'Raj',
      city: 'Mumbai',
    },
    {
      name: 'Arjun',
      city: 'Pune',
    },
    {
      name: 'Rajesh',
      city: 'Mumbai',
    },
  ];

  productList: any = [];
  constructor(private sampleService: SampleService) {}

  ngOnInit() {
    this.getProductsData();
  }
  getProductsData() {
    this.sampleService.getProducts().subscribe((res) => {
      this.productList = res;
      console.log(this.productList.products);
    });
  }
}
