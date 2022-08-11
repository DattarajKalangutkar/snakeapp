import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-achivement',
  templateUrl: './achivement.page.html',
  styleUrls: ['./achivement.page.scss'],
})
export class AchivementPage implements OnInit {
  id:any = '';
  data:any = {};
  constructor(private router: Router,public activeRoute: ActivatedRoute,private snakeService:SnakeService) {
    this.id = (this.activeRoute.snapshot.paramMap.get('id') !=null) ? this.activeRoute.snapshot.paramMap.get('id'):'';
    this.getdetailtopranker(this.id);

   }

  ngOnInit() {
  }

  getdetailtopranker(id)
  {
    this.snakeService.gettoprescuerdetail(id).subscribe((data:any)=>{
      this.data = data.rows;
      console.log(this.data);
    });
  }
}
