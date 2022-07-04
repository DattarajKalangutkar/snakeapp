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
  btnToggle:boolean = false;
  trans:any = [];
  items:any = [];
  originaltrans:any = [];
  constructor(private storage: Storage,private snakeService:SnakeService,private router: Router,public activeRoute: ActivatedRoute) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async ionViewDidEnter()
  {
    this.init();
    this.gettranscationlist();
  }

  async ngOnInit() 
  {
    this.userid = await this.storage.get('userid');
    this.gettranscationlist();
  }

  gettranscationlist()
  {
    this.snakeService.getlistoftranscation(this.clientRole,this.userid).subscribe((data:any)=>{
      if(data.count > 0)
      {
        this.originaltrans = this.trans = data.rows;
        console.log(this.trans);
      }
    });
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
    this.trans = this.originaltrans;
    if(identifier == 'all')
      this.trans = this.originaltrans;
    else if(identifier == '1')
      this.trans = this.trans.filter((res:any)=>(res.transStatus.iId == identifier));
    else if(identifier == '2')
      this.trans = this.trans.filter((res:any)=>(res.transStatus.iId == identifier));
    else
      this.trans = this.trans.filter((res:any)=>(res.transStatus.iId == identifier));
  }

  vieworder(data)
  {
    this.router.navigate(['/transaction-detail/'+data.id])
  }

  editorder(data)
  {
    this.router.navigate(['/completetrans/'+data.id])
  }
}
