import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  
    //this.router.navigate(['/formation/events'])
  }
  title : any = 'project';
  id : number = 3;

  inc(){
    this.id = this.id + 1 ;
  }

  constructor(public translate : TranslateService , private router : Router){
    this.translate.setDefaultLang('en');
    this.translate.use('fr')
  }


}
