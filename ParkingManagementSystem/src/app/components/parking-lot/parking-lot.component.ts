import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parking-lot',
  imports: [MatButtonModule,CommonModule],
  templateUrl: './parking-lot.component.html',
  styleUrl: './parking-lot.component.css',
})
export class ParkingLotComponent {
  parkingSpaces: boolean[] = new Array(10).fill(false);

  

  parkCar() {
    const emptySpaceIndex=this.parkingSpaces.indexOf(false);
    if(emptySpaceIndex!==-1){
      this.parkingSpaces[emptySpaceIndex]=true;
      alert(`Car parked in spot ${emptySpaceIndex+1}`)
      console.log(this.parkingSpaces)
    }else{
      alert('No parking space is available')
    }
  
  }
  removeCar(spotIndex:number) {
    console.log("removed")
    if(this.parkingSpaces[spotIndex]){
      this.parkingSpaces[spotIndex]=false;
      alert(`Car removed fom spot ${spotIndex+1}`);
    }else{
      alert(`Spot ${spotIndex+1} is alreay empty`)
    }
  }

  get parkingStatus():string[]{

    return this.parkingSpaces.map((occupied,index)=>{
      return occupied ? `Spot ${index+1} : Occupied`: `Spot ${index+1} : Empty`; 
    });
  }
}
