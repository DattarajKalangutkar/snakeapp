import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rescusertranlist',
  templateUrl: './rescusertranlist.page.html',
  styleUrls: ['./rescusertranlist.page.scss'],
})
export class RescusertranlistPage implements OnInit {

  private _storage: Storage | null = null;
  clientRole:any = '1';
  rescuerid:any;
  btnToggle:boolean = false;
  trans:any = [];
  items:any = [];
  originaltrans:any = [];
  loggin:any;
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
    this.rescuerid = await this.storage.get('rescuerid');
    this.loggin = await this.storage.get("loggedin");
    this.gettranscationlist();
  }

  async ngOnInit() 
  {
    this.rescuerid = await this.storage.get('rescuerid');
    this.gettranscationlist();
  }

  gettranscationlist()
  {
    this.snakeService.getlistoftranscation(this.clientRole,this.rescuerid).subscribe((data:any)=>{
      if(data.count > 0)
      {
        this.originaltrans = this.trans = data.rows;
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
    this.router.navigate(['/updatetrans/'+data.id]);
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
