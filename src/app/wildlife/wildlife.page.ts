import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-wildlife',
  templateUrl: './wildlife.page.html',
  styleUrls: ['./wildlife.page.scss'],
})
export class WildlifePage implements OnInit {
  loggin:any;
  constructor(private snakeService:SnakeService,private router: Router,private storage: Storage) { 
    this.init();
    this.getallwildlife();
    
  }

  async init() {
    const storage = await this.storage.create();
  
  }

  allwildlifedata:any = [];

  async ionViewDidEnter()
  {
    this.init();
    this.loggin = await this.storage.get("loggedin");
  }

  ngOnInit() {
  }

  getallwildlife()
  {
    this.snakeService.getallwildlife().subscribe((data:any)=>{
      this.allwildlifedata = data.rows;
    });
  }

  opendetail(id)
  {
    this.router.navigate(['/wildlifedetail/'+id])
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

}
