import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstaid',
  templateUrl: './firstaid.page.html',
  styleUrls: ['./firstaid.page.scss'],
})
export class FirstaidPage implements OnInit {
  loggin:any;

  constructor(private storage: Storage,private router: Router) { }

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
