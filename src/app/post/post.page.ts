import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController,ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  loader:any;
  private _storage: Storage | null = null;
  rescuerid:any;
  loggin:any;
  onceUploaded:boolean = false;
  image:any;
  filedata:any;
  finalImagePath:string = '';
  constructor(public loadingCtrl: LoadingController, private storage: Storage,private snakeService:SnakeService,private router: Router,public activeRoute: ActivatedRoute) { 
    this.init();
  }


   async ionViewDidEnter()
  {
    this.init();
    this.loggin = await this.storage.get("loggedin");
  }
  ngOnInit() 
  {

  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.rescuerid = await this.storage.get('rescuerid');
  }

  selectedFile(event)
  {
    this.filedata = event.target.files[0];
    const formData = new FormData();
    formData.append("postImage",this.filedata);
    formData.append("modules","post");

    this.showLoading('Uploading.....');

    this.snakeService.uploadImage(formData).subscribe((data:any)=>
    {
      this.loader.dismiss();
      this.finalImagePath = data.filepath;
      this.onceUploaded = true;
    });
  }

  submitpost()
  {
    var data = {
      "postRescuer":this.rescuerid,
      "postImage":this.finalImagePath,
      "postStatus":"1",
      "postComments":"",
      "postLikes":0,
      "postViews":0
    };

    this.snakeService.postdata(data).subscribe((data)=>{
      this.router.navigate(['/home']);
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

  async showLoading(msg) {
    this.loader = await this.loadingCtrl.create({
      message: msg,
      spinner: 'circles',
    });
    this.loader.present();
  }
}
