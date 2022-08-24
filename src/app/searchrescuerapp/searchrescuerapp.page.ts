import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-searchrescuerapp',
  templateUrl: './searchrescuerapp.page.html',
  styleUrls: ['./searchrescuerapp.page.scss'],
})
export class SearchrescuerappPage implements OnInit {
  private _storage: Storage | null = null;
  rescuserlist:any = [];
  detailview:boolean = false;

  // currentlat:any = '15.5990954';
  // currentlong:any = '73.7353178';
  currentlat:any = '';
  currentlong:any = '';
  rescuserName: string = '';
  rescuserDistance: string = '';
  rescuerCallNumber: string = '';
  rescuerImage: string = '';
  rescuserId:string = '';
  userId:any;

  constructor(private geolocation: Geolocation,private alertController:AlertController,private storage: Storage,private snakeService:SnakeService,private router: Router,public activeRoute: ActivatedRoute) {
    this.init();
    this.getactiveresucer();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.userId = await this.storage.get("userid");
  }

  async ngOnInit() 
  {
    
  }

  async getactiveresucer()
  {
    const coordinates = await this.geolocation.getCurrentPosition();
    var data = {
      "lat":coordinates.coords.latitude,
      "long":coordinates.coords.longitude
    };
    this.snakeService.getactiverescuer(data).subscribe((data:any)=>{
      if(data.count > 0)
      {
        this.rescuserlist = data.rows;
      }
    });
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Do You Want to Initiate with this Rescuer?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.rescuserId = id;
            this.initiateTrans();
          }
        }
      ]
    });

    await alert.present();
  }

  initiateTrans()
  {
    var data = {
      "transRescuerId":this.rescuserId,
      "transUserId":this.userId,
      "transStatus":"1",
      "vStatus":"1"
    };

    this.snakeService.initiateTrans(data).subscribe((data:any)=>{
      this.router.navigate(['/transactionlist/']);
    });
  }
  doRefresh(event) 
  {
    this.getactiveresucer();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
