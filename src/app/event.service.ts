import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient) { }
 
  url = 'http://192.168.5.11:5000'

  getAllCategories(){
    return this.http.get(this.url+'/categories')
  }

  getAllEvents(){
    return this.http.get(this.url+'/all-events')
  }

  getEventById(id){
    return this.http.get(this.url+'/event/'+id)
  }

  createEvent(body : Event){
    return this.http.post(this.url+'/event' , body)
  }
  updateEvent(body : Event){
    return this.http.put(this.url+'/event' , body)
  }
  removeEvent(id){
    return this.http.delete(this.url+'/event/'+id )
  }

}
