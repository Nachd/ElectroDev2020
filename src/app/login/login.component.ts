import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apis : AuthService , private router : Router) { }
  pass_access = "password"

  register_form : FormGroup;
  user : User = new User();
  ngOnInit() {
    this.register_form = new FormGroup({
      'form_email' : new FormControl([Validators.required , Validators.email]),
      'form_pass' : new FormControl([Validators.required,Validators.minLength(6)]),
    })
  }

  testpass(){
    if(this.user.password != this.user.password2){
     
     this.register_form.get('form_conf').setErrors({unavailable : true})
    }
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

    this.apis.loginEmailPass(this.user.email , this.user.password)
    .then((data)=> {console.log(data);
    localStorage.setItem('loggedIn' , 'true')
    this.router.navigate(['/formation'])
    })
    .catch(err=> console.log(err))
    
  }

  google(){
    
    this.apis.signInGoogle()
    .then((data)=> console.log(data))
    .catch(err=> console.log(err))
    
  }

  facebook(){
  
    this.apis.signInFacebook()
    .then((data)=> console.log(data))
    .catch(err=> console.log(err))
    
  }

}
