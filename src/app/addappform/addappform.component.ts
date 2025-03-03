import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addappform',
  templateUrl: './addappform.component.html',
  styleUrls: ['./addappform.component.css']
})
export class AddappformComponent {
  appForm!: FormGroup;
  
  ngOnInit(){
    this.appForm = new FormGroup({
      appnumber: new FormControl('',
        [Validators.required, Validators.pattern('^[0-9]*$')],
     ),
      floornumber: new FormControl('',Validators.required),
      surface: new FormControl('',Validators.required),
    //  img: new FormControl('',Validators.required),
    
    })

}
}
