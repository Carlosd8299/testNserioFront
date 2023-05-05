import { Component, OnInit } from '@angular/core';
import { IPredictedOrders } from 'src/app/interfaces/I-get-predicted-orders';
import { OrdersServiceService } from 'src/app/services/orders-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sales-date-prediction',
  templateUrl: './sales-date-prediction.component.html',
  styles: [
  ]
})
export class SalesDatePredictionComponent implements OnInit {
  public predictedOrders!: IPredictedOrders[];
  constructor(private _orderService: OrdersServiceService) { }

  ngOnInit(): void {
    this.cargarSalesPredicted();
  }

  cargarSalesPredicted() {
    this._orderService.cargarSalesPredicition().subscribe(sales => {
      this.predictedOrders = sales;
    })
  }

}
