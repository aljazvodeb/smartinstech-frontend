import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-insure',
  templateUrl: './user-insure.component.html',
  styleUrls: ['./user-insure.component.css']
})
export class UserInsureComponent implements OnInit {

  isChecked = true;
  constructor(private router: Router) { }

  ngOnInit() {
    // set item on click of the button
    localStorage.setItem('selfPayout', 'true' );
  }

}
