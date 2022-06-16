import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-snakedetail',
  templateUrl: './snakedetail.page.html',
  styleUrls: ['./snakedetail.page.scss'],
})
export class SnakedetailPage implements OnInit {
  id:any = '';
  data:any = {};
  constructor(private router: Router,public activeRoute: ActivatedRoute,private snakeService:SnakeService) {
    this.id = (this.activeRoute.snapshot.paramMap.get('id') !=null) ? this.activeRoute.snapshot.paramMap.get('id'):'';
    this.getdetailsnake(this.id);
  }

  ngOnInit() {
  }

  getdetailsnake(id)
  {
    this.snakeService.getsnakedetail(id).subscribe((data:any)=>{
      this.data = data.rows;
      console.log(this.data);
    });
  }
}
