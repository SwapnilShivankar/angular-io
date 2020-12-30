import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favourite-color',
  templateUrl: './reactive-favourite-color.component.html',
})
export class ReactiveFavouriteColorComponent implements OnInit {

  favoriteColorControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
