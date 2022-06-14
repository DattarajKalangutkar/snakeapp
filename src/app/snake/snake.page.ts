import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.page.html',
  styleUrls: ['./snake.page.scss'],
})
export class SnakePage implements OnInit {
  originalsnakes:any = [];
  snakes:any = [];
  btnToggle:boolean = false;
  image:any;
  filedata:any;
  constructor(private router: Router, private snakeService:SnakeService) { 
    this.getallsnakes();
  }

  ngOnInit() 
  {

  }

  getallsnakes()
  {
    this.snakeService.getallsnakes().subscribe((data:any)=>{
      console.log(data);
      this.originalsnakes = this.snakes = data.rows;
    });
  }

  editItem(i:any)
  {
    this.router.navigate(['/snakedetails/'+i.id]);
  }

  ToggleBtn()
  {
    if(this.btnToggle)
      this.btnToggle = false;
    else
      this.btnToggle = true;
  }

  showFilter(identifier:string)
  {
    this.snakes = this.originalsnakes;
    if(identifier == 'all')
      this.snakes = this.originalsnakes;
    else if(identifier == 'Venomous')
      this.snakes = this.snakes.filter((res:any)=>(res.snakeType == 'Venomous'));
    else if(identifier == 'Non Venomous')
      this.snakes = this.snakes.filter((res:any)=>(res.snakeType == 'Non Venomous'));
    else
      this.snakes = this.snakes.filter((res:any)=>(res.snakeType == 'Mildy Venomous'));
  }

  
}
