import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  loggin:any;
  alleventsdata:any = [];
  constructor(private snakeService:SnakeService,private router: Router,private storage: Storage) {
    this.init();
    this.getallevents();
   }

   async init() {
    const storage = await this.storage.create();
  
  }

  async ionViewDidEnter()
  {
    this.init();
    this.loggin = await this.storage.get("loggedin");
  }

  ngOnInit() {
  }

  getallevents()
  {
    this.snakeService.getallevents().subscribe((data:any)=>{
      this.alleventsdata = data.rows;
    });
  }
 
  opendetail(id)
  {
    this.router.navigate(['/eventdetails/'+id])
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

  doRefresh(event) 
  {
    this.getallevents();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
