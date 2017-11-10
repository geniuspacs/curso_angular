import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailContacto: string;

  constructor() { }

  ngOnInit() {
    console.log('Contact cargado!');
  }

  guardarEmail() {
    localStorage.setItem('email', this.emailContacto);
  };

}
