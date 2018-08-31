import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('lpForm')
 
  lpForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  processLP(myform: NgForm) {
    console.log('myform:', myform.value)
    console.log('Processing LP: ', this.lpForm.value);
    for (let k in this.lpForm.value) {
      console.log('k=', k, 'v=', this.lpForm.value[k]);
    }
  }

}
