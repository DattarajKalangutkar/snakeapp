import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { MenuController,ToastController } from '@ionic/angular';
// import { exit } from 'process';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  clientRole:any = '1';
  step:string = 'step1';
  progresscount: number = 0.3;
  clientdata:any = {
    name:'',
    username:'',
    phone:'',
    email:'',
    password:'',
    confirmpassword:''
  };
  image:any;
  filedata:any;
  finalImagePath:string = '';
  otp1:number;
  otp2:number;
  otp3:number;
  otp4:number;

  isUploaded:boolean = true;

  primary_key:string = '';


  constructor(private snakeService:SnakeService,private menu: MenuController,private toastCtrl: ToastController) {
    this.menu.enable(false);
    this.clientRole = history.state.data;
  }

  ngOnInit() {
  }

  gotoNextField(nextElement)
  {
    nextElement.setFocus();
  }

  ionViewWillEnter()
  {
    this.step = 'step1';
    this.progresscount = 0.3;
    this.clientdata = {
      name:'',
      username:'',
      phone:'',
      email:'',
      password:'',
      confirmpassword:''
    };
  }

  selectedFile(event)
  {
    this.filedata = event.target.files[0];
    const formData = new FormData();
    if(this.clientRole == '1')
    {
      formData.append("rescuerImage",this.filedata);
      formData.append("modules","rescuer");
    }
    else
    {
      formData.append("userImage",this.filedata);
      formData.append("modules","user");
    }


    this.snakeService.uploadImage(formData).subscribe((data:any)=>{
      if(data.status)
      {
        this.isUploaded = false;
        this.presentToast("Profile Pic Uploaded Successfully");
        this.finalImagePath = data.filepath;
      }
    });
  }

  steponeregister()
  {
    //validation
    if(this.clientdata.name =="")
    {
      this.presentToast("Please Enter a name");
      return false;
    }

    if(this.clientdata.username =="")
    {
      this.presentToast("Please Enter a username");
      return false;
    }

    if(this.clientdata.phone == "")
    {
      this.presentToast("Please Enter the Phone Number");
      return false;
    }
    else
    {
      if(this.clientdata.phone.length != 10)
      {
        this.presentToast("Invalid Phone Number");
        return false;
      }
    }

    if(this.clientdata.email == "")
    {
      this.presentToast("Please Enter the Email Address");
      return false;
    }
    else
    {
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.clientdata.email))
      {

      }
      else
      {
        this.presentToast("Enter valid Email");
        return false;
      }
    }

    if(this.clientdata.password != this.clientdata.confirmpassword)
    {
      this.presentToast("Password Doesnt Match to Confirm Password");
      return false;
    }

    var data = {};
    var path = '';
    if(this.clientRole == '1')
    {
      data = {
        "rescuerName":this.clientdata.name,
        "rescuerPhone":this.clientdata.phone,
        "rescuerUsername":this.clientdata.username,
        "rescuerPassword":this.clientdata.password,
        "rescuerRoleId":1,
        "rescuerEmail":this.clientdata.email,
        "rescuerImage":this.finalImagePath,
        "rescuerVerification":0,
        "rescuerStatus":"0"
      };
      path = "rescuerRegister.php";
    }
    else
    {
      data = {
        "userName":this.clientdata.name,
        "userPhone":this.clientdata.phone,
        "userUsername":this.clientdata.username,
        "userPassword":this.clientdata.password,
        "userRoleId":2,
        "userEmail":this.clientdata.email,
        "userImage":this.finalImagePath,
        "userStatus":"0"
      };
      path = "userRegister.php";
    }

    this.snakeService.registerClient(path,data).subscribe((data_verifed:any)=>{
      if(data_verifed.error)
      {
        this.presentToast(data_verifed.message);
      }
      else
      {
        this.primary_key  = data_verifed.id;
        this.snakeService.sendotp(this.clientdata.email).subscribe((data:any)=>{
          this.snakeService.sendmail(this.clientdata.email,data.otp).subscribe((send:any)=>{});
            if(data.flag)
            {
              this.step = 'step2';
              this.progresscount = 0.6;
              this.presentToast(data.message);
            }
            else
            {
              this.presentToast(data.message);
            }
        });    
      }
    });   
  }

  steptworegister()
  {
    var data = {};
    var path = '';
    if(this.clientRole == '1')
    {
      data = {
        "rescuerName":this.clientdata.name,
        "rescuerPhone":this.clientdata.phone,
        "rescuerUsername":this.clientdata.username,
        "rescuerPassword":this.clientdata.password,
        "rescuerRoleId":1,
        "rescuerEmail":this.clientdata.email,
        "rescuerImage":this.finalImagePath,
        "rescuerVerification":0,
        "rescuerStatus":"1"
      };
      path = "rescuerRegister.php";
    }
    else
    {
      data = {
        "userName":this.clientdata.name,
        "userPhone":this.clientdata.phone,
        "userUsername":this.clientdata.username,
        "userPassword":this.clientdata.password,
        "userRoleId":2,
        "userEmail":this.clientdata.email,
        "userImage":this.finalImagePath,
        "userStatus":"1"
      };
      path = "userRegister.php";
    }
    let finalotp = this.otp1+""+this.otp2+""+this.otp3+""+this.otp4;
    this.snakeService.verifyotp(this.clientdata.email,finalotp).subscribe((data_sendotp:any)=>{
      if(data_sendotp.flag)
      {
        this.snakeService.updaterClient(path,data,this.primary_key).subscribe((data_verifed:any)=>{
          if(data_verifed.flag)
          {
            this.step = 'step3';
            this.progresscount = 1;
            this.presentToast(data_verifed.message);
          }
          else
          {
            this.presentToast(data_verifed.message);
          }
        });
      }
    });
  }

  async presentToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
  
    toast.present();
  }
}
