import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResidenceService } from 'src/core/Services/residence.service';

@Component({
  selector: 'app-residenceform',
  templateUrl: './residenceform.component.html',
  styleUrls: ['./residenceform.component.css']
})
export class ResidenceformComponent {
  residenceForm!: FormGroup;

  constructor(private nourAllah: ResidenceService, private route: Router) {
    //initialiser le formulaire ou dans ngOnInit()
  }
  ngOnInit() {
    this.residenceForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z][a-z]+$'),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(50),
      ]),
      status: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    return console.log(this.residenceForm.value);
  }

  get name() {
    return this.residenceForm.get('name');
  }

  test() {
    return console.log(this.residenceForm.get('name')?.value);
  }

  add() {
    this.nourAllah.addResidence(this.residenceForm.value).subscribe(() => {
      alert('added with success');
      this.route.navigate(['/residences']);
    });
  }
}