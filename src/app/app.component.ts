import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public userPages = [
    { title: 'Events', url: '/events', icon: 'mail'},
    { title: 'First Aid', url: '/firstaid', icon: 'mail'},
    { title: 'wild Life', url: '/wildlife', icon: 'mail'},
    { title: 'Hospitals', url: '/hospital', icon: 'mail'},
    { title: 'History', url: '/transactionlist', icon: 'mail'},
    { title: 'Snake Info', url: '/snakeinfo', icon: 'mail'},
    { title: 'Ranking', url: '/ranking', icon: 'mail'},
  ];
  constructor() {}
}
