import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { Tienda, 
    AnimalsComponent, 
    ContactComponent, 
    HomeComponent, 
    KeepersComponent } from '../components/index.components';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'animals', component: AnimalsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'tienda', component: Tienda },
    { path: 'keepers', component: KeepersComponent },
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);