import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private _storage: Storage | null = null;
  clientRole:any = '1';
  username:string = '9545366928';
  userpass:string = '321';
  constructor(private storage: Storage,private snakeService:SnakeService,private router: Router,public activeRoute: ActivatedRoute) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async ngOnInit() 
  {
    let role = await this.storage.get('loggedin');
    console.log(role);
    if(role != null && role == "Rescuser")
    {
      this.router.navigate(['/home']);
    }
    else
    {
      this.router.navigate(['/userhome']);
    }
  }

  login()
  {
    var data;
    if(this.clientRole == '1')
    {
      data = {
        "rescuerPhone":this.username,
        "rescuerPassword":this.userpass
      };

      this.snakeService.loginRescuser(data).subscribe((data:any)=>{
        if(data.flag)
        {
          this.storage.clear();
          this.storage.set('loggedin',"Rescuser");
          this.storage.set('rescuerid',data.userid);
          this.storage.set('token',data.token);
          this.router.navigate(['/home']);
        }
        else
        {
          alert(data.message);
        }
      });
    }
    else
    {
      data = {
        "userPhone":this.username,
        "userPassword":this.userpass
      };

      this.snakeService.loginUser(data).subscribe((data:any)=>{
        if(data.flag)
        {
          console.log(data);
          this.storage.clear();
          this.storage.set('loggedin',"User");
          this.storage.set('userid',data.userid);
          this.storage.set('token',data.token);
          this.router.navigate(['/userhome']);
        }
        else
        {
          alert(data.message);
        }
      });
    }
  }
}
