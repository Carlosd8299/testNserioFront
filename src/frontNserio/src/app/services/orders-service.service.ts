import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPredictedOrders } from '../interfaces/I-get-predicted-orders';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceService {

  constructor(private http: HttpClient) { }

  cargarSalesPredicition() {
    const url = `${base_url}/Customers/PredictedOrderForCustomers`;
    return this.http.get<any>(url)
      .pipe(
        map((resp: IPredictedOrders[]) => resp)
      );
  }

}




