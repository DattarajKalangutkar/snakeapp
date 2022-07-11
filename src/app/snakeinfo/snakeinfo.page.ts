import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
//  import { exit } from 'process';

@Component({
  selector: 'app-snakeinfo',
  templateUrl: './snakeinfo.page.html',
  styleUrls: ['./snakeinfo.page.scss'],
})
export class SnakeinfoPage implements OnInit {
  btnToggle:boolean = false;
  snakes:any = [];
  items:any = [];
  originalsnakes:any = [];
  loggin:any;
  allsnakedata:any = [];
  constructor(private snakeService:SnakeService,private router: Router,private storage: Storage) {
    this.getallsnakes();
  }

   async init() {
    const storage = await this.storage.create();
  
  }

   
  ngOnInit() {
  }

  async ionViewDidEnter()
  {
    this.init();
    this.loggin = await this.storage.get("loggedin");
  }

  getallsnakes()
  {
    this.snakeService.getallsnakes().subscribe((data:any)=>{
      this.originalsnakes = this.snakes = data.rows;
    });
  }
  opendetail(id)
  {
    this.router.navigate(['/snakedetail/'+id])
  }

  ToggleBtn()
  {
    if(this.btnToggle)
      this.btnToggle = false;
    else
      this.btnToggle = true;
  }

  showFilter(identifier:string)
  {
    
    this.snakes = this.originalsnakes;
    if(identifier == 'all')
      this.snakes = this.originalsnakes;
    else if(identifier == '1')
      this.snakes = this.snakes.filter((res:any)=>(res.snakeType.vName == 'Venomous'));
    else if(identifier == '2')
      this.snakes = this.snakes.filter((res:any)=>(res.snakeType.vName == 'Non Venomous'));
    else
      this.snakes = this.snakes.filter((res:any)=>(res.snakeType.vName == 'Mildly Venomous'));
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
