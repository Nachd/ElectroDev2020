import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { EventsComponent } from './events/events.component';
import { EventDetails2Component } from './event-details2/event-details2.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [

  {path : '' , 
  component : LoginComponent},
  {
    path : 'register',
    component : RegisterComponent,
    
  },
  {
    path : 'formation',
    component : LayoutComponent,
    children : [
      {
        path : 'todo',
        component : TodoComponent,
        
      },{
        path : 'events',
        component : EventsComponent
      },{
        path : 'add-event',
        component : EventDetails2Component
      },{
        path : 'edit-event/:id',
        component : EventDetails2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
