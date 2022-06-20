import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-updatetrans',
  templateUrl: './updatetrans.page.html',
  styleUrls: ['./updatetrans.page.scss'],
})
export class UpdatetransPage implements OnInit {

  clientRole:any = '1';
  step:number;
  progresscount: number = 1;
  id:string = '';
  transdata:any = {};
  snakes:any = [];
  clientdata:any = {
    transSnakeId:'',
    transSnakeLength:'',
    transSnakeWeight:'',
    transRescuerDate:'',
    transRescuerAddress:'',
    transStatus:"2",
    transImage:""
  };

  image:any;
  filedata:any;
  finalImagePath:string = '';
  constructor(private router: Router,public activeRoute: ActivatedRoute,private snakeService:SnakeService) {
    this.id = (this.activeRoute.snapshot.paramMap.get('id') !=null) ? this.activeRoute.snapshot.paramMap.get('id'):'';
    this.gettransdetail(this.id);
    this.getsnake();
  }

  getsnake()
  {
    this.snakeService.getallsnakes().subscribe((data:any)=>{
      this.snakes = data.rows;
    });
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
    this.clientdata.transRescuerDate = this.clientdata.transRescuerDate.toLocaleString().replace(/T/g, " ").split("+")[0];
    this.snakeService.updateTranscation(this.id,this.clientdata).subscribe((data:any)=>{
      if(data.flag)
      {
        this.router.navigate(['/rescusertranlist/']);
      }
    });
  }

  selectedFile(event)
  {
    this.filedata = event.target.files[0];
    const formData = new FormData();
    formData.append("transactionImage",this.filedata);
    formData.append("modules","transaction");
    this.snakeService.uploadImage(formData).subscribe((data:any)=>{
      this.finalImagePath = this.clientdata.transImage = data.filepath;
    });
  }
}
