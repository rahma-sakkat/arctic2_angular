import { Component } from '@angular/core';
import { Residence } from 'src/core/Models/Residence';
import { ResidenceService } from 'src/core/Services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  constructor(private rs:ResidenceService){}
  address: string = '';
  adress: string = '';
  date:Date= new Date();
  listFavorite: Residence[] = [];
  listFiltred: Residence[] = [];
  listResidence: Residence[] = [];
  showLocation(address: string) {
    if (address === 'inconnu') {
      return alert("l'adresse est inconnue");
    } else {
      return alert("l'adresse est  " + address);
    }
  }
// première méthode
  addToFavorite1(res: Residence) {
    if (this.listFavorite.indexOf(res)==-1) {
      this.listFavorite.push(res);
    }
  }

  // deuxième méthode
  addToFavorite2(res: Residence) {
    // if (this.listFavorite.includes(res)) {
    //   this.listFavorite.push(res);
    // }
  }

  filterByAdress(){
    // this.listFiltred=this.listResidences;
    this.rs.getResidenceList().subscribe(result=>this.listResidence=result)
    return this.listResidence.filter(res=>(res.address.toLowerCase().includes(this.adress.toLowerCase())))
  }


  delete(id:number){
    this.rs.deleteResidence(id).subscribe(()=>alert("residence deleted!!!"))
  }
}