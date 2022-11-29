import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Components
import { ProblemsComponent } from './problems.component';

// Services
import { ProblemsEmpService } from '../../services/problems/problems-employee.service';
import { DevextremeModule } from '../shared/devextreme/devextreme.module';
import { StatusService } from 'src/app/services/status.service';
import { BrowserModule } from '@angular/platform-browser';
import TextArea from "devextreme/ui/text_area";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DevextremeModule
  ],
  declarations: [
    ProblemsComponent
  ],
  exports: [ProblemsComponent],

  providers: [ProblemsEmpService,StatusService]
})

export class ProblemsModule {
}
