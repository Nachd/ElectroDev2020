import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/all-events';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  events: any[] = Events;
  events_total = Events;
  total;
  ngOnInit(): void {
    console.log(this.events)
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
  remove(i){
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
      this.events_total.splice(i , 1);
      this.events = this.events_total;
       Swal.fire("Deleted" , "" , "success")
     }
   })

  }

}
