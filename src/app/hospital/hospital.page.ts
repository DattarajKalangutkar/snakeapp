import { Component, OnInit } from '@angular/core';
import { SnakeService } from '../snake.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {

  constructor(private snakeService:SnakeService,private router: Router) { 
    this.getallhospitals();
  }

  allhospitaldata:any = [];

  ngOnInit() {
  }

  getallhospitals()
  {
    this.snakeService.getallhospitals().subscribe((data:any)=>{
      this.allhospitaldata = data.rows;
    });
  }


  opendetail(id)
  {
    this.router.navigate(['/hospitaldetail/'+id])
  }

}
