import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.page.html',
  styleUrls: ['./eventdetails.page.scss'],
})
export class EventdetailsPage implements OnInit {
  id:any = '';
  data:any = {};

  constructor(private router: Router,public activeRoute: ActivatedRoute,private snakeService:SnakeService) {
    this.id = (this.activeRoute.snapshot.paramMap.get('id') !=null) ? this.activeRoute.snapshot.paramMap.get('id'):'';
    this.getdetailevent(this.id);
   }

  ngOnInit() {
  }

  getdetailevent(id)
  {
    this.snakeService.geteventdetail(id).subscribe((data:any)=>{
      this.data = data.rows;
      console.log(this.data);
    });
  }

}
