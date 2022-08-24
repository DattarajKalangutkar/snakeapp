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
  userId:any = '';
  constructor(private menu: MenuController,private snakeService:SnakeService,private storage: Storage,private router: Router,public activeRoute: ActivatedRoute) { 
    this.menu.enable(true);
    this.init();
    this.getpost();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.userId = await this.storage.get("userid");
  }

  async ionViewDidEnter()
  {
    this.init();
    this.menu.enable(true);
  }

  ngOnInit() 
  {

  }

  logout()
  {
    this.storage.clear();
    this.router.navigate(['/login']);
  }


  async getpost()
  {
    this.userId = await this.storage.get('userid');
    this.snakeService.getallpost(2,this.userId).subscribe((data:any)=>{
      console.log(data);
      this.posts=data.rows;
    });
  }

  updatelike(data,index)
  {
    var likedata = {
      "type":"2",
      "client":this.userId,
      "postid":data.id
    };
    this.posts[index].postLikes = Number(this.posts[index].postLikes)+1;
    this.posts[index].clicked = true;
    this.snakeService.likepost(likedata).subscribe((data:any)=>{
      this.posts[index].postLikes = Number(this.posts[index].postLikes)+1;
      this.posts[index].clicked = true;
    })
  }

  doRefresh(event) 
  {
    this.getpost();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
