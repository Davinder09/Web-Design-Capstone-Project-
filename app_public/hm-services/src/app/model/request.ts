import { Component, OnInit } from '@angular/core';

export class Request {

    _id: string;
    snow_removal: Boolean;
    grass_cutting: Boolean;
    indoor_cleaning: Boolean;
    service_date: Date;
    customer_info:  {
        first_name: string;
        last_name: String;
        email: String;
        phone: String;
        address: String;
    }
}