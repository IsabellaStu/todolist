import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarModule } from '../../core/navbar/navbar.module';




@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    NavbarModule,
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
