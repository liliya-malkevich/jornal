import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProblemsModule } from './components/problems-emp/problems.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DevextremeModule } from './components/shared/devextreme/devextreme.module';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { ProblemsComponent } from './components/problems-emp/problems.component';
import {MatIconModule} from '@angular/material/icon';
import { ProblemsStudModule } from './components/problems-stud/problems-stud.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MatSidenavModule,
    DevextremeModule,
    MatIconModule,
    ProblemsModule,
    ProblemsStudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
