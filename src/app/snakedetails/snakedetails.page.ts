import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snakedetails',
  templateUrl: './snakedetails.page.html',
  styleUrls: ['./snakedetails.page.scss'],
})
export class SnakedetailsPage implements OnInit {
  snakeName:string = 'Cobra';
  constructor() { }

  ngOnInit() {
  }

}
