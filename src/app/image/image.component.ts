import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  getphoto

  constructor() { }

  ngOnInit() {
    this.getphoto=JSON.parse(localStorage.getItem('photo'))
  }
}
