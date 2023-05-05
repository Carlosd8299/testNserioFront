import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { RouterModule, Routes } from '@angular/router';
import { SalesDatePredictionComponent } from './pages/sales-date-prediction/sales-date-prediction.component';

const routes: Routes = [] = [
  {path: 'home', component: SalesDatePredictionComponent},
  {path: '', component: SalesDatePredictionComponent},
  {path: '**', component: SalesDatePredictionComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
