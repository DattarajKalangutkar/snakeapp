import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.page.html',
  styleUrls: ['./attributes.page.scss'],
})
export class AttributesPage implements OnInit {
  loggin:any;
  master_data:any = {
    "snaketype":[],
    "color":[],
    "headshape":[],
    "eyeshape":[],
    "pattern":[],
    "symptoms":[]
  };

  snakeData:any = {
    "snaketype":'',
    "color":'',
    "headshape":'',
    "eyeshape":'',
    "pattern":'',
    "symptoms":''
  };

  snakename:any = [];
  constructor(private router: Router,public activeRoute: ActivatedRoute,private snakeService:SnakeService,private storage: Storage) {
    this.getallmaster();
  }

  ngOnInit() {
  }

  async init() {
    const storage = await this.storage.create();
  }

  async ionViewDidEnter()
  {
    this.init();
    this.loggin = await this.storage.get("loggedin");
  }

  async getallmaster()
  {
    let objectKeys = Object.keys(this.master_data);
    for(let i = 0;i<objectKeys.length;i++)
    {
      await this.snakeService.getallmaster(objectKeys[i]).subscribe((data:any)=>{
        this.master_data[objectKeys[i]] = data.rows;
      }); 
    }

    console.log(this.master_data);
  }

  findSnake()
  {
    this.snakeService.getsnakealgo(this.snakeData).subscribe((data:any)=>{
      console.log(data);
      if(data.flag)
      {
        this.snakename = data.snakes;
      }
    });
  }

  navigatetohome()
  {
    if(this.loggin == "Rescuser")
    {
      this.router.navigate(['/home/']);
    }
    else
    {
      this.router.navigate(['/userhome/']);
    }
  }

  opendetail(id)
  {
    this.router.navigate(['/snakedetail/'+id])
  }
}
