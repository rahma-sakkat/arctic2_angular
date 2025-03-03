import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidencedetailsComponent {
constructor(private  act:ActivatedRoute){


}

id:number =this.act.snapshot.params['id']
ngOnInit(){

 // this.id = this.act.snapshot.params['id'];
 this.act.paramMap.subscribe(
    param=>this.id=Number (param.get('id')))
}
}
