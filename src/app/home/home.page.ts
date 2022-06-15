import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private _storage: Storage | null = null;
  rescuserId:any;
  constructor(private snakeService:SnakeService,private storage: Storage,private router: Router,public activeRoute: ActivatedRoute) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async ngOnInit() 
  {
    this.rescuserId = await this.storage.get('rescuerid');
  }

  logout()
  {
    this.storage.clear();
    this.router.navigate(['/login']);
  }

  async activeLatLong()
  {
    const coordinates = await Geolocation.getCurrentPosition();
    var data = {
      "lat":coordinates.coords.latitude,
      "long":coordinates.coords.longitude
    };

    this.snakeService.activeRescuerLatLong(this.rescuserId,data).subscribe((data:any)=>{
      console.log(data);
    });
  }
}
