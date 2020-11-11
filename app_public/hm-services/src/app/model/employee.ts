import { Component, OnInit } from '@angular/core';

export class Employee {

    constructor(
        public _id: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public phone: string,
        public address: string
      ) {  }
      
}