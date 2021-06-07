import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAlumnoPageRoutingModule } from './editar-alumno-routing.module';

import { EditarAlumnoPage } from './editar-alumno.page';
import { HomePageRoutingModule } from '../home/home-routing.module';

@NgModule({

  imports: [

    CommonModule,

    FormsModule,

    IonicModule,

    HomePageRoutingModule,

    ReactiveFormsModule

  ],

  declarations: [EditarAlumnoPage]

})
export class EditarAlumnoPageModule {}
