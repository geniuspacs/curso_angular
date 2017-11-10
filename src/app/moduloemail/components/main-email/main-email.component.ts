import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-email',
    template: ` 
            <div class="panel panel-default">
                <h2>{{titulo}}</h2>
                <hr>
                <mostrar-email></mostrar-email>
                <guardar-email></guardar-email>
            </div>`
})

export class MainEmailComponent implements OnInit {

    titulo: string = "Módulo de emails";

    ngOnInit() {
        console.log("Main Email Module Cargado!");
    }
} 