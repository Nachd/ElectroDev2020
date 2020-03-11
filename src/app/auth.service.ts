import { Injectable } from '@angular/core';
import { AngularFireAuth}  from 'angularfire2/auth';
import * as firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth : AngularFireAuth) { }


  registerEmailPass(email , password){
    return new Promise<any>((resolve , reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email , password)
      .then(res=>{
        resolve(res)
      } , err=> reject(err))
    })
  }

  loginEmailPass(email , password){
    return new Promise<any>((resolve , reject)=>{
      firebase.auth().signInWithEmailAndPassword(email , password)
      .then(res=>{
        resolve(res)
      } , err=> reject(err))
    })
  }

  signInGoogle(){
    return new Promise<any>((resolve , reject)=>{
      let p = new firebase.auth.GoogleAuthProvider();
      p.addScope('profile')
      p.addScope('email')

      this.afAuth.auth.signInWithPopup(p)
      .then(res=>{
        resolve(res)
      } , err=> reject(err))
    })
  }

  signInFacebook(){
    return new Promise<any>((resolve , reject)=>{
      let p = new firebase.auth.FacebookAuthProvider();
     
      this.afAuth.auth.signInWithPopup(p)
      .then(res=>{
        resolve(res)
      } , err=> reject(err))
    })
  }
}
