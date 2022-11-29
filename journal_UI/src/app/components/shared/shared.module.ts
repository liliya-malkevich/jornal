import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DevextremeModule } from './devextreme/devextreme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
   // BrowserAnimationsModule,
   // FormsModule,
   // MatNativeDateModule,
    //ReactiveFormsModule,
    DevextremeModule,
    MatIconModule,
   NoopAnimationsModule,
    AppRoutingModule
  ],
  exports: [NavBarComponent]
})
export class SharedModule { }
