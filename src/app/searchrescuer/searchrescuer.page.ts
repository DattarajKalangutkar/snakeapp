import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapType } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

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

  constructor(private storage: Storage,private snakeService:SnakeService,private router: Router,public activeRoute: ActivatedRoute) {
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
    const coordinates = await Geolocation.getCurrentPosition();
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
        zoom: 15,
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
}

