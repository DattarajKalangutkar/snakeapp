import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {
  loggin:any;
  constructor(private snakeService:SnakeService,private router: Router,private storage: Storage) { 
    this.getallhospitals();
  }

  allhospitaldata:any = [];

  ngOnInit() {
  }

  async init() {
    const storage = await this.storage.create();
  
  }

  async ionViewDidEnter()
  {
    this.init();
    this.loggin = await this.storage.get("loggedin");
  }

  getallhospitals()
  {
    this.snakeService.getallhospitals().subscribe((data:any)=>{
      this.allhospitaldata = data.rows;
    });
  }


  opendetail(id)
  {
    this.router.navigate(['/hospitaldetail/'+id])
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
