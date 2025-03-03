import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  link1:string='home';
  link2:string='residences';
  url:string='https://esprit.com';
  clickme() {
    alert("vous avez clique");
  }




}
