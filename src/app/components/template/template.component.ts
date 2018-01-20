import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`

  .ng-invalid.ng-touched:not(form){
    border: solid 1px red;
  }

  `]
})
export class TemplateComponent implements OnInit {

  user: Object = {
    name: null,
    lastName: null,
    email: null,
    gender: 'male',
    agrees: false
  };

  countries: [ {
    code: 'USA',
    name: 'United States'
  },
  { code: 'CA',
    name: 'Canada'
  },
  { code: 'MX',
    name: 'Mexico'
  } ];

  genders = ['Male', 'Female']



  constructor() { }

  ngOnInit() {
  }

  save( form: NgForm ) {
    console.log( );
    console.log(form.controls);
    console.log(form);

  }

}
