import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';
import { Geolocation } from '@capacitor/geolocation';
import { MenuController,ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private _storage: Storage | null = null;
  rescuserId:any;
  posts:any=[];
  constructor(private toastCtrl: ToastController,private menu: MenuController,private snakeService:SnakeService,private storage: Storage,private router: Router,public activeRoute: ActivatedRoute) { 
    this.menu.enable(true);
    this.init();
    this.getpost();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.rescuserId = await this.storage.get('rescuerid');
  }

  async ionViewDidEnter()
  {
    this.init();
    this.menu.enable(true);
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
      if(data.flag)
      {
        this.presentToast(data.message);
      }
    });
  }

  async getpost()
  {
    this.rescuserId = await this.storage.get('rescuerid');
    this.snakeService.getallpost(1,this.rescuserId).subscribe((data:any)=>{
      console.log(data);
      this.posts=data.rows;
    });
  }

  async presentToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
  
    toast.present();
  }

  updatelike(data,index)
  {
    var likedata = {
      "type":"1",
      "client":this.rescuserId,
      "postid":data.id
    };
    
    this.snakeService.likepost(likedata).subscribe((data:any)=>{
      this.posts[index].postLikes = Number(this.posts[index].postLikes)+1;
      this.posts[index].clicked = true;
    });
  }
}
