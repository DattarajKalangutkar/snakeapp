import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  constructor(private router: Router,public activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  vieworder()
  {
    this.router.navigate(['/achivement']);
  }

}
