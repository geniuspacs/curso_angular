import { Component, OnInit } from '@angular/core';
import { Parques } from '../parques/parques.component';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html'
})

export class Tienda implements OnInit {
    titulo: string;
    nombreDelParque: string;
    public miParque: any;

    constructor() {
        this.titulo = 'Mi Tienda';
    };

    ngOnInit() {
        $('#textojq').hide();
        $('#botonjq').click(function() {
            console.log('click desde jQuery');
            $('#textojq').removeClass('hidden').slideToggle();
        });
        $('#caja').dotdotdot();
    }

    mostrar_valor() {
        console.log(this.nombreDelParque);
    }

    verDatosParque(event) {
        this.miParque = event;
    }

    texto_editor(contenido) {
        console.log(contenido);
    }
}