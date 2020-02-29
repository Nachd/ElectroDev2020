import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(public translate : TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.use('fr')
  }


}
