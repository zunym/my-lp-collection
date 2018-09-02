import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
//custom calidators
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class AddComponent implements OnInit {

  @Output()
  onAddItem = new EventEmitter<string[]>();

  addItem (form:NgForm) {
    if (form.value.image == "" || form.value.image == undefined ) {
      form.value.image = "https://vignette.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013"
    };
    if (form.value.rating == "" || form.value.image == undefined ) {
      form.value.rating = "Not Rated"
    };
    console.log ('form: ', form.value);
    this.onAddItem.next(form.value);
    form.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}