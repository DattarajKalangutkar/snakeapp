import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.page.html',
  styleUrls: ['./transactionlist.page.scss'],
})
export class TransactionlistPage implements OnInit {
  private _storage: Storage | null = null;
  clientRole:any = '2';
  userid:any;
  constructor(private storage: Storage,private snakeService:SnakeService,private router: Router,public activeRoute: ActivatedRoute) {
    this.init();
    
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async ngOnInit() 
  {
    this.userid = await this.storage.get('userid');
    this.gettranscationlist();
  }

  gettranscationlist()
  {
    console.log()
    this.snakeService.getlistoftranscation(this.clientRole,this.userid).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
