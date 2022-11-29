import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { ProblemsComponent } from './components/problems-emp/problems.component';
import { ProblemsStudComponent } from './components/problems-stud/problems-stud.component';

const routes: Routes = [
  {path:'', component:HomeComponent,data:{title:'Главная'}},
  {path:'problemsemp', component:ProblemsComponent,data:{title:'Сотрудники'}},
  {path:'problemsstudent', component:ProblemsStudComponent,data:{title:'Студенты'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
