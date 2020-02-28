import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  pass_access = "password"

  register_form : FormGroup;
  user : User = new User();
  ngOnInit() {
    this.register_form = new FormGroup({
      'form_email' : new FormControl([Validators.required , Validators.email]),
      'form_pass' : new FormControl([Validators.required,Validators.minLength(6)]),
      'form_conf' : new FormControl([Validators.required ,Validators.minLength(6)])
    })
  }

  show_hide_password(){
    if(this.pass_access == "password"){
      this.pass_access = "text"
    }else{
      this.pass_access = "password"
    }
  }

  register(){
    console.log(this.user)
  }

 
}
