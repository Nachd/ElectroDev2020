import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { EventService } from '../event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(public translate : TranslateService ,
    private apis : EventService
    ) { }

  showModal = false;
  events: any[];
  events_total;
  total;
  objet : any  = {}
  ngOnInit(): void {
    this.apis.getAllEvents()
    .subscribe(
      (data : any[])=>{
        // en cas de success
        this.events = data;
      }, error=> alert(error.statusText))



  }
  filterByCategory(value) {
    if (value == 'All') {
      this.events = this.events_total
    } else {
      this.events = this.events_total.filter((a) => a.category.categoryId == value)
    }

  }
  filterByPrice(value) {
    if (value == "asc") {
      this.events = this.events.sort((a, b) => a.price > b.price ? 0 : -1)
    } else {

      this.events = this.events.sort((a, b) => a.price < b.price ? 0 : -1)
    }
  }

  search(value) {
    this.events = this.events_total.filter((s) =>
      s.nameEn.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      s.price == value ||
      s.category.categoryNameEn.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      s.description.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }


  moveUp(i) {
    if (i > 0) {
      let element = this.events.splice(i, 1) // remove one element from events at position : i
      console.log(element)
      this.events.splice(i - 1, 0, element[0])
    }

  }
  moveDown(i) {
    if (i < this.events.length) {
      let element = this.events.splice(i, 1) // remove one element from events at position : i
      console.log(element)
      this.events.splice(i + 1, 0, element[0])
    }

  }

  //slice : ( from pos , to pos)
  //unshift : insert object on the top of the array
  calculate(){
    this.total = 0
    this.events.map((s)=>{ //map : sync  //foreach : async
      if(s.price >10){
        this.total = this.total + (s.price * 0.3)
      }
    })
    console.log("finish")
  }
  remove(id){
   Swal.fire({
     title : "Are you sure ?",
     text : "",
     icon : "warning",
     showCancelButton : true,
     showCloseButton : true,
     cancelButtonText : "Keep it",
     confirmButtonText : "Delete it"
   }).then((action)=>{
     if(action.value){
       //remove item
      this.apis.removeEvent(id)
      .subscribe((data)=>{
        this.ngOnInit()
        Swal.fire("Deleted" , "" , "success")
      },error=> console.log(error))


     /* this.events_total.splice(i , 1);
      this.events = this.events_total;
      */
     }
   })

  }


  show(){
    this.showModal = true;
  }
  closeModal(){
    console.log("Action in parent from child")
    this.showModal = false;
    console.log(this.objet)
    this.objet = {}
  }
  saveModal(){
   
    if(this.objet.id){
      //update 
    }else{
      this.objet.id = this.events[this.events.length -1].id + 1
      this.events.push(this.objet);
    }
    this.objet = {}
   // this.closeModal();
  }
  editEvent(evt){
    this.objet = evt;
    this.showModal = true;
  }
}





