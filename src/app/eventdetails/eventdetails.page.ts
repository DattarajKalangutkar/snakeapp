import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.page.html',
  styleUrls: ['./eventdetails.page.scss'],
})
export class EventdetailsPage implements OnInit {
  userhome:boolean = false;
  home:boolean = false;
  id:any = '';
  data:any = {};
  private _storage: Storage | null = null;
  constructor(private router: Router,public activeRoute: ActivatedRoute,private snakeService:SnakeService,private storage: Storage) {
    this.id = (this.activeRoute.snapshot.paramMap.get('id') !=null) ? this.activeRoute.snapshot.paramMap.get('id'):'';
    this.getdetailevent(this.id);
   }

   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async ngOnInit() {
    await this.find();
    
  }

  getdetailevent(id)
  {
    this.snakeService.geteventdetail(id).subscribe((data:any)=>{
      this.data = data.rows;
      console.log(this.data);
    });
  }

  async find(){
    let logged = await this.storage.get("loggedin");
    console.log(logged);
    if(logged == "Rescuser")
    {
      this.router.navigate(['/home/']);
    }
    else
    {
      this.router.navigate(['/userhome/']);
    }
    
  }
 

}
