import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {
  private _storage: Storage | null = null;
  rescuserId:any;
  posts:any=[];
  constructor(private menu: MenuController,private snakeService:SnakeService,private storage: Storage,private router: Router,public activeRoute: ActivatedRoute) { 
    this.menu.enable(true);
    this.init();
    this.getpost();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  ngOnInit() {
  }

  logout()
  {
    this.storage.clear();
    this.router.navigate(['/login']);
  }


  getpost()
  {
    this.snakeService.getallpost().subscribe((data:any)=>{
      console.log(data);
      this.posts=data.rows;
    });

  }
}
