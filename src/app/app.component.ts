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
    { title: 'Events', url: '/events', icon: 'mail'},
    { title: 'First Aid', url: '/firstaid', icon: 'mail'},
    { title: 'wild Life', url: '/wildlife', icon: 'mail'},
    { title: 'Hospitals', url: '/hospital', icon: 'mail'},
    { title: 'History', url: '/transactionlist', icon: 'mail'},
    { title: 'Snake Info', url: '/snakeinfo', icon: 'mail'},
    { title: 'Ranking', url: '/ranking', icon: 'mail'},
    { title: 'Attributes', url: '/attributes', icon: 'mail'},
    { title: 'Identification', url: '/identification', icon: 'mail'},
  ];
  public rescuerPages = [
    { title: 'Events', url: '/events', icon: 'mail'},
    { title: 'First Aid', url: '/firstaid', icon: 'mail'},
    { title: 'wild Life', url: '/wildlife', icon: 'mail'},
    { title: 'Hospitals', url: '/hospital', icon: 'mail'},
    { title: 'History', url: '/transactionlist', icon: 'mail'},
    { title: 'Snake Info', url: '/snakeinfo', icon: 'mail'},
  ];
  client_arr:any = [];
  private _storage: Storage | null = null;
  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
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
}
