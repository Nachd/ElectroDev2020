import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../event';
import { Category } from '../category';
import { EventService } from '../event.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-details2',
  templateUrl: './event-details2.component.html',
  styleUrls: ['./event-details2.component.css']
})
export class EventDetails2Component implements OnInit {

  constructor(private activatedRoute : ActivatedRoute ,
    private router : Router,private datePipe : DatePipe,
    private eventapis : EventService ) { }

  id
  eventForm : FormGroup;
  event : Event;
  categories : any
  ngOnInit(): void {
   
    this.eventapis.getAllCategories()
    .subscribe((data)=>{
      this.categories = data
    })

    console.log(this.categories)
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if(this.id){
      this.eventapis.getEventById(this.id)
      .subscribe((data : Event)=>{
        this.event = data
       // this.event.startDate =
        this.event.endDate = this.datePipe.transform(this.event.endDate , 'yyyy-MM-dd');
        this.event.startDate = this.datePipe.transform(this.event.startDate , 'yyyy-MM-dd')
      //  this.eventForm.get('categoryId').setValue(this.event.categoryId)
      })
    }
    this.event = new Event();
   // this.event.startDate = new Date();
    this.eventForm = new FormGroup({
      'nameEn' : new FormControl(Validators.required),
      'nameFr' : new FormControl(Validators.required),
      'price' : new FormControl(Validators.required),
      'startDate' : new FormControl(),
      'endDate' : new FormControl(),
      'categoryId' : new FormControl()
    })
  }

save(){
  console.log(this.event)
  if(this.id){
    this.eventapis.updateEvent(this.event)
    .subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/formation/events'])
    })
  }else{
  this.eventapis.createEvent(this.event)
  .subscribe((data)=>{
    console.log(data)
    this.router.navigate(['/formation/events'])
  })
}
}
  
}
