import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapType } from '@capacitor/google-maps';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-searchrescuer',
  templateUrl: './searchrescuer.page.html',
  styleUrls: ['./searchrescuer.page.scss'],
})
export class SearchrescuerPage implements OnInit {
  @ViewChild('map')
  newMap: GoogleMap;
  currentlat:any;
  currentlong:any;
  private _storage: Storage | null = null;
  rescuserlist:any = [];
  detailview:boolean = false;

  rescuserName: string = '';
  rescuserDistance: string = '';
  rescuerCallNumber: string = '';
  rescuerImage: string = '';
  rescuserId:string = '';
  userId:any;

  constructor(private geolocation: Geolocation,private alertController:AlertController,private storage: Storage,private snakeService:SnakeService,private router: Router,public activeRoute: ActivatedRoute) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.userId = await this.storage.get("userid");
  }

  async ngOnInit() 
  {
    await this.getcurrentlocation();
    await this.getactiveresucer();
    await this.inititiseMap();
    await this.setupmarker();
  }

  getactiveresucer()
  {
    var data = {
      "lat":this.currentlat,
      "long":this.currentlong
    };
    this.snakeService.getactiverescuer(data).subscribe((data:any)=>{
      if(data.count > 0)
      {
        this.rescuserlist = data.rows;
      }
    });
  }



  async getcurrentlocation(){
    const coordinates = await this.geolocation.getCurrentPosition();
    this.currentlat = coordinates.coords.latitude;
    this.currentlong = coordinates.coords.longitude;
  }

  async inititiseMap()
  {
    this.newMap = await GoogleMap.create({
      id: 'map',
      element: document.getElementById('map'),
      apiKey: 'AIzaSyA48bFWf-zBgfiR5sp-wqxsNk5-wpbTgBM',
      config: {
        center: {
          lat: this.currentlat,
          lng: this.currentlong,
        },
        zoom: 8,
      },
    });

    await this.newMap.setOnMarkerClickListener((event) => {
      let data = event.title.split("_");
      let filterdata = this.rescuserlist.find((res:any)=>res.id == data[1]);
      this.rescuserName = filterdata.rescuerName;
      this.rescuerCallNumber = filterdata.rescuerPhone;
      this.rescuerImage = filterdata.rescuerImage;
      this.rescuserDistance = filterdata.distance;
      this.rescuserId = filterdata.id;
      this.detailview = true;
    });
  }

  async setupmarker()
  {
    for(let i=0;i<this.rescuserlist.length;i++)
    {
      await this.newMap.addMarker({
        coordinate: {
          lat: Number(this.rescuserlist[i].rescuerLatitude),
          lng: Number(this.rescuserlist[i].rescuerLongitude)
        },
        title:this.rescuserlist[i].rescuerName+"_"+this.rescuserlist[i].id,
      });
    }
  }

  async presentAlertConfirm() {
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
    
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}

