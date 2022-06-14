import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.page.html',
  styleUrls: ['./transaction-detail.page.scss'],
})
export class TransactionDetailPage implements OnInit {
  clientRole:any = '1';
  step:number = 3;
  progresscount: number = 1;
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
  constructor() { }

  ngOnInit() {
  }

}
