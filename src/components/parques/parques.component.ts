import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html'
})

export class Parques implements OnChanges, OnInit, DoCheck, OnDestroy{
    @Input() nombre: string;
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor() {
        this.nombre = 'Parque Natural de Doñana';
        this.metros = 2000;
        this.vegetacion = 'Alta';
        this.abierto = true;
    };

    /* Se lanza cada vez que ocurra un cambio en las propiedades de un componente */
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    /* Se lanza cada vez que se cargue un componente */

    ngOnInit() {
        console.log('Método on init lanzado');
    }

    /* Se lanza cada vez que se produce cualquier tipo de evento
        o modificación de datos en un componente y en sus hijos.
        Si un componente padre tiene dos componentes hijos, 
        se ejecutará despues del init (aunque no es necesario que el init exista),
        una vez por cada evento. Como cada componente lanzará un init al cargarse,
        el docheck se lanzará dos veces (una para cada uno)

        Este evento se lanza siempre que suceda algo
    */
    ngDoCheck() {
        console.log('El docheck se ha lanzado');
    }

    /* Se ejecuta al destruir un componente */
    ngOnDestroy() {
        console.log('On Destroy lanzado!');
    }

    emitirEvento() {
        this.pasameLosDatos.emit({
            nombre: this.nombre,
            metros: this.metros,
            vegetacion: this.vegetacion,
            abierto: this.abierto
        });
    };
};