import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Router } from '@angular/router';
//  import { exit } from 'process';

@Component({
  selector: 'app-snakeinfo',
  templateUrl: './snakeinfo.page.html',
  styleUrls: ['./snakeinfo.page.scss'],
})
export class SnakeinfoPage implements OnInit {
  btnToggle:boolean = false;
  snakes:any = [];
  items:any = [];
  originalsnakes:any = [];
  allsnakedata:any = [];
  constructor(private snakeService:SnakeService,private router: Router) {

    this.getallsnakes();
   }

   
  ngOnInit() {
  }

  getallsnakes()
  {
    this.snakeService.getallsnakes().subscribe((data:any)=>{
      this.originalsnakes = this.snakes = data.rows;
    });
  }
  opendetail(id)
  {
    this.router.navigate(['/snakedetail/'+id])
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
    else if(identifier == '1')
      this.snakes = this.snakes.filter((res:any)=>(res.snakeType == 'Venomous'));
    else if(identifier == '2')
      this.snakes = this.snakes.filter((res:any)=>(res.snakeType == 'Non Venomous'));
    else
      this.snakes = this.snakes.filter((res:any)=>(res.snakeType == 'Mildly Venomous'));
  }

 

}
