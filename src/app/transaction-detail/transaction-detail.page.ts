import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';
@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.page.html',
  styleUrls: ['./transaction-detail.page.scss'],
})
export class TransactionDetailPage implements OnInit {
  clientRole:any = '1';
  step:number;
  progresscount: number = 1;
  id:string = '';
  transdata:any = {};
  constructor(private router: Router,public activeRoute: ActivatedRoute,private snakeService:SnakeService) {
    this.id = (this.activeRoute.snapshot.paramMap.get('id') !=null) ? this.activeRoute.snapshot.paramMap.get('id'):'';
    this.gettransdetail(this.id);
  }

  ngOnInit() {
  }

  gettransdetail(id)
  {
    this.snakeService.gettranscation(id).subscribe((data:any)=>{
      this.transdata = data.rows;
      if(this.transdata.transStatus.iId == 1){
        this.progresscount = 0.3;
        this.step = 1;
      }
      else if(this.transdata.transStatus.iId == 2){
        this.progresscount = 0.6;
        this.step = 2;
      }
      else{
        this.progresscount = 1;
        this.step = 3; 
      }  
    });
  }
}
