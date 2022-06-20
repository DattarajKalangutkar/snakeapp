import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  private _storage: Storage | null = null;
  rescuerid:any;

  image:any;
  filedata:any;
  finalImagePath:string = '';
  constructor(private storage: Storage,private snakeService:SnakeService,private router: Router,public activeRoute: ActivatedRoute) { 
    this.init();
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
    this.snakeService.uploadImage(formData).subscribe((data:any)=>{
      console.log(data);
      this.finalImagePath = data.filepath;
      console.log(this.finalImagePath);
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

}
