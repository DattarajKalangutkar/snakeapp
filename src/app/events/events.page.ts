import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(private snakeService:SnakeService,private router: Router) {
    this.getallevents();
   }

   alleventsdata:any = [];

  ngOnInit() {
  }

  getallevents()
  {
    this.snakeService.getallevents().subscribe((data:any)=>{
      this.alleventsdata = data.rows;
    });
  }
 
  opendetail(id)
  {
    this.router.navigate(['/eventdetails/'+id])
  }

}
