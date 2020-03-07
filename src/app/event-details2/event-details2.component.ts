import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../event';

@Component({
  selector: 'app-event-details2',
  templateUrl: './event-details2.component.html',
  styleUrls: ['./event-details2.component.css']
})
export class EventDetails2Component implements OnInit {

  constructor(private activatedRoute : ActivatedRoute ) { }

  id
  eventForm : FormGroup;
  event : Event;
  ngOnInit(): void {
   
    this.id = this.activatedRoute.snapshot.params['id'];
    this.event = new Event();
    this.eventForm = new FormGroup({
      'nameEn' : new FormControl(Validators.required),
      'nameFr' : new FormControl(Validators.required),
      'price' : new FormControl(Validators.required),
      'startDate' : new FormControl(),
      'endDate' : new FormControl(),
      'categoryId' : new FormControl()
    })
  }


  
}
