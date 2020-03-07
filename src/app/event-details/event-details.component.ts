import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor() { }

  @Output() exit : EventEmitter<any> = new EventEmitter()
  @Output() save : EventEmitter<any> = new EventEmitter()


  @Input() element;

  ngOnInit(): void {
    console.log(this.element)
  }

  cancel(){
    console.log("cancel from child")
    this.exit.emit();
  }
  saveObject(){
    this.save.emit();
    //this.element = {}
   // this.exit.emit()
  }
}
