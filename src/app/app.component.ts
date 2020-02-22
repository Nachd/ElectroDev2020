import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : any = 'project';
  id : number = 3;

  inc(){
    this.id = this.id + 1 ;
  }



}
