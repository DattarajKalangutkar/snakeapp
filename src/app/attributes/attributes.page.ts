import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
import { MenuController,ToastController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.page.html',
  styleUrls: ['./attributes.page.scss'],
})
export class AttributesPage implements OnInit {
  loader:any;
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
  constructor(public loadingCtrl: LoadingController,private router: Router,public activeRoute: ActivatedRoute,private snakeService:SnakeService,private storage: Storage,private toastCtrl: ToastController) {
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
    this.showLoading('Searching.....');
    this.snakeService.getsnakealgo(this.snakeData).subscribe((data:any)=>{
      console.log(data);
      if(data.flag)
      {
        this.loader.dismiss();
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

  doRefresh(event) 
  {
    this.getallmaster();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async presentToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
  
    toast.present();
  }

  async showLoading(msg) {
    this.loader = await this.loadingCtrl.create({
      message: msg,
      spinner: 'circles',
    });
    this.loader.present();
  }
}
