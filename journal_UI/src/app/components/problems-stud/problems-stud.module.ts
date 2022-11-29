import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { ProblemsStudComponent } from './problems-stud.component';

import { ProblemsStudService } from 'src/app/services/problems/problems-students.service';
import { DevextremeModule } from '../shared/devextreme/devextreme.module';
import { StatusService } from 'src/app/services/status.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DevextremeModule
  ],
  declarations: [
    ProblemsStudComponent
  ],
  exports: [ProblemsStudComponent],

  providers: [ProblemsStudService,StatusService]
})

export class ProblemsStudModule{

}
