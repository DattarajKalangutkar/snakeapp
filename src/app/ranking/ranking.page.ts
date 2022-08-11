import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
  loggin:any;
  constructor(private router: Router,public activeRoute: ActivatedRoute,private storage: Storage,private snakeService:SnakeService) { 
    this.init();
    this.gettoprescuers();
  }

  async ionViewDidEnter()
  {
    this.init();
    this.loggin = await this.storage.get("loggedin");
  }

  async init() {
    const storage = await this.storage.create();
  }

  alltoprescuers:any = [];

  ngOnInit() {
  }

  vieworder()
  {
    this.router.navigate(['/achivement']);
  }

  gettoprescuers()
  {
    this.snakeService.gettoprescuers().subscribe((data:any)=>{
      this.alltoprescuers = data.rows;
      console.log(this.alltoprescuers);
    });
  }

  opendetail(id)
  {
    this.router.navigate(['/achivement/'+id])
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
