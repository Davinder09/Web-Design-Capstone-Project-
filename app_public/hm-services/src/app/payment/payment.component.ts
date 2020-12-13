import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


@ViewChild('paypalRef',{static: true}) private paypalRef: ElementRef;
  ngOnInit(): void {
    window.paypal.Buttons(
      {
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          lable: 'paypal'
          },
        createOrder: (data, actions) =>{
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '1000',
                  currency_code: 'USD'
                }
              }
            ]
          });
        },
        onApprove : (data, actions) =>{
          return actions.order.capture().then(details =>{
            alert('Transaction complete');
          });
        },
        onError : error =>{
          console.log(error);
        }
      })
      .render(this.paypalRef.nativeElement);

    }
  }


