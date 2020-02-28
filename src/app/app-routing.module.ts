import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  
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
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
