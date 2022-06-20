import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-completetrans',
  templateUrl: './completetrans.page.html',
  styleUrls: ['./completetrans.page.scss'],
})
export class CompletetransPage implements OnInit {
  clientRole:any = '1';
  step:number;
  progresscount: number = 1;
  id:string = '';
  transdata:any = {};
  clientdata:any = {
    transRate:'',
    transComment:'',
    transStatus:"3",
  };

  rates:any = [1,2,3,4,5];
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

  updatetranscation()
  {
    this.snakeService.completeTranscation(this.id,this.clientdata).subscribe((data:any)=>{
      if(data.flag)
      {
        this.router.navigate(['/transactionlist/']);
      }
    });
  }
}
