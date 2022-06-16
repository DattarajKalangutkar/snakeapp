import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wildlife',
  templateUrl: './wildlife.page.html',
  styleUrls: ['./wildlife.page.scss'],
})
export class WildlifePage implements OnInit {

  constructor(private snakeService:SnakeService,private router: Router) { 
    this.getallwildlife();
  }

  allwildlifedata:any = [];

  ngOnInit() {
  }

  getallwildlife()
  {
    this.snakeService.getallwildlife().subscribe((data:any)=>{
      this.allwildlifedata = data.rows;
    });
  }

  opendetail(id)
  {
    this.router.navigate(['/wildlifedetail/'+id])
  }

}
