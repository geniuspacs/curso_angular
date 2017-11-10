import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'mostrar-email',
    template: `<h4>{{title}}</h4>
                <span *ngIf="emailContacto">
                    {{emailContacto}}
                    <button (click)="borrarEmail()">Eliminar email de contacto</button>
                </span>`
})

export class MostrarEmailComponent implements DoCheck, OnInit {

    title: string = "Mostrar Email";
    emailContacto: string;

    constructor() {

    };

    ngOnInit() {
        this.emailContacto = localStorage.getItem('email');
    }

    ngDoCheck() {
    this.emailContacto = localStorage.getItem('email');
    }

    borrarEmail() {
    localStorage.removeItem('email');
    this.emailContacto = null;
    }
}