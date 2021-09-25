import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { PhonebookComponent } from './works/phonebook/phonebook.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'works',component:WorksComponent},
  {path:'works',component:WorksComponent,children:[
  {path:'cenzor',component:CenzorComponent},
  {path:'userslist',component:UserslistComponent},
  {path:'tasklist',component:TasklistComponent},
  {path:'phonebook',component:PhonebookComponent},  
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
