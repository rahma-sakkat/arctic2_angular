import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-residenceform',
  templateUrl: './residenceform.component.html',
  styleUrls: ['./residenceform.component.css']
})
export class ResidenceformComponent {
residenceForm!: FormGroup;

ngOnInit(){
  this.residenceForm = new FormGroup({
    name: new FormControl('',
      [Validators.required, Validators.minLength(3),Validators.maxLength(15)],
   ),
    address: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    img: new FormControl('',Validators.required),
  
  })
 //console.log(this.getname())
  
}
get name() {
  return this.residenceForm.get('name');
}
//getname() {
  //console.log(this.residenceForm.get('name')?.value)
  //return this.residenceForm.get('name')?.value;
//}

}
