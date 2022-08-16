import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private _storage: Storage | null = null;
  clientRole:any = '1';
  username:string = '';
  userpass:string = '';
  constructor(private menu: MenuController,private storage: Storage,private snakeService:SnakeService,private router: Router,public activeRoute: ActivatedRoute) {
    this.menu.enable(false);
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async ngOnInit() 
  {
    let role = await this.storage.get('loggedin');
    if(role != null && role == "Rescuser")
    {
      this.router.navigate(['/home']);
    }
    else if(role != null && role == "User")
    {
      this.router.navigate(['/userhome']);
    }
    else
    {

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

  signup()
  {
    this.router.navigate(['/register'],{state:{data:this.clientRole}});
  }
}
