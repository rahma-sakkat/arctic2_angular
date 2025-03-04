import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/core/Models/Residence';
import { ResidenceService } from 'src/core/Services/residence.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-residencedetails',
  templateUrl: './residencedetails.component.html',
  styleUrls: ['./residencedetails.component.css']
})
export class ResidencedetailsComponent {
  id!: number;
  res: Residence | undefined;
  constructor(private act: ActivatedRoute, private rs: ResidenceService) {}

  ngOnInit() {
    // this.id = this.act.snapshot.params['id'];
    this.act.paramMap.subscribe((param) => {
      this.id = Number(param.get('id'));
    });
    this.rs
      .getResidenceById(this.id)
      .subscribe((residence) => (this.res = residence));
    console.log(this.res);
  }
}