import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-wildlifedetail',
  templateUrl: './wildlifedetail.page.html',
  styleUrls: ['./wildlifedetail.page.scss'],
})
export class WildlifedetailPage implements OnInit {
  id:any = '';
  data:any = {};
  constructor(private router: Router,public activeRoute: ActivatedRoute,private snakeService:SnakeService) {
    this.id = (this.activeRoute.snapshot.paramMap.get('id') !=null) ? this.activeRoute.snapshot.paramMap.get('id'):'';
    this.getdetailwildlife(this.id);


   }

  ngOnInit() {
  }

  getdetailwildlife(id)
  {
    this.snakeService.getwildlifedetail(id).subscribe((data:any)=>{
      this.data = data.rows;
      console.log(this.data);
    });
  }

}
