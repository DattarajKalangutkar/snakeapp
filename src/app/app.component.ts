import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userTab:boolean = false;
  rescuerTab:boolean = false;
  public userPages = [
    { title: 'Events', url: '/events', icon: 'globe'},
    { title: 'First Aid', url: '/firstaid', icon: 'medkit'},
    { title: 'wild Life', url: '/wildlife', icon: 'bug'},
    { title: 'Hospitals', url: '/hospital', icon: 'add-circle'},
    { title: 'History', url: '/transactionlist', icon: 'speedometer'},
    { title: 'Snake Info', url: '/snakeinfo', icon: 'planet'},
    { title: 'Ranking', url: '/ranking', icon: 'ribbon'},
  ];
  public rescuerPages = [
    { title: 'Events', url: '/events', icon: 'globe'},
    { title: 'First Aid', url: '/firstaid', icon: 'medkit'},
    { title: 'wild Life', url: '/wildlife', icon: 'bug'},
    { title: 'Hospitals', url: '/hospital', icon: 'add-circle'},
    { title: 'History', url: '/rescusertranlist', icon: 'speedometer'},
    { title: 'Snake Info', url: '/snakeinfo', icon: 'planet'},
    { title: 'Ranking', url: '/ranking', icon: 'ribbon'},
  ];
  client_arr:any = [];
  private _storage: Storage | null = null;
  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async ngOnInit() {
    let logged = await this.storage.get("loggedin");
    if(logged == "Rescuser")
    {
      this.rescuerTab = true;
    }
    else
    {
      this.userTab = true;
    }
  }

  ionViewDidEnter()
  {
    console.log("Everything in app");
  }
}
