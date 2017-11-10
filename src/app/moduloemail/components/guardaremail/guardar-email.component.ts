import { Component } from '@angular/core';

@Component({
    selector: 'guardar-email',
    template: `<input type="text" [(ngModel)]="emailContacto" />
    <button (click)="guardarEmail()">Guardar Email</button>`
})

export class GuardarEmailComponent {

    titulo: string = "Guardar Email";
    emailContacto: string;

    constructor() {

    };

    guardarEmail() {
        localStorage.setItem('email', this.emailContacto);
    }

    
}