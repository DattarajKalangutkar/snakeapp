import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-hospitaldetail',
  templateUrl: './hospitaldetail.page.html',
  styleUrls: ['./hospitaldetail.page.scss'],
})
export class HospitaldetailPage implements OnInit {
  id:any = '';
  data:any = {};
  constructor(private router: Router,public activeRoute: ActivatedRoute,private snakeService:SnakeService) { 
    this.id = (this.activeRoute.snapshot.paramMap.get('id') !=null) ? this.activeRoute.snapshot.paramMap.get('id'):'';
    this.getdetailhospital(this.id);
  }

  ngOnInit() {
  }

  getdetailhospital(id)
  {
    this.snakeService.gethospitaldetail(id).subscribe((data:any)=>{
      this.data = data.rows;
    });
  }

}
