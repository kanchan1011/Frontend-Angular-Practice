import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ParkingLotComponent } from './components/parking-lot/parking-lot.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'parking-lot',
    component: ParkingLotComponent,
    title: 'Parking Lot Page',
  },
];
