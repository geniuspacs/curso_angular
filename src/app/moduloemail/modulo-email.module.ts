import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainEmailComponent } from './components/main-email/main-email.component';
import { GuardarEmailComponent } from './components/guardaremail/guardar-email.component';
import { MostrarEmailComponent } from './components/mostraremail/mostrar-email.component';

@NgModule({
    declarations: [
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent
    ],
    imports: [CommonModule,FormsModule],
    exports: [ MainEmailComponent ]
})

export class ModuloEmailModule {

}