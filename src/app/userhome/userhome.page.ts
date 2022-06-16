import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {
  private _storage: Storage | null = null;
  constructor(private menu: MenuController,private storage: Storage,private router: Router,public activeRoute: ActivatedRoute) { 
    this.menu.enable(true);
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  ngOnInit() {
  }

  logout()
  {
    this.storage.clear();
    this.router.navigate(['/login']);
  }

}
