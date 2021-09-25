import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { PhonebookComponent } from './works/phonebook/phonebook.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { TasklistchildComponent } from './works/tasklist/tasklistchild/tasklistchild.component';
import { SearchPipe } from './works/phonebook/search.pipe';
SearchPipe


@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    CenzorComponent,
    UserslistComponent,
    TasklistComponent,
    PhonebookComponent,
    HomeComponent,
    HeaderComponent,
    TasklistchildComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
