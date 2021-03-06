import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  booking = new FormGroup({
    name: new FormControl(''),
    tickets: new FormControl(''),
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.booking);
  }
}
