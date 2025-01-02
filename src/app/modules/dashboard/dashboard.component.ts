import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user: {
    name: string,
    email: string
  } = {
    name: "Sarada",
    email: "sarada12ru@gmail.com"
  }
}
