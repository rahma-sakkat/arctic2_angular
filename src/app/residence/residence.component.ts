import { Component } from '@angular/core';
import { Residence } from 'src/core/Models/Residence';
import { ResidenceService } from 'src/core/Services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  constructor(private rs:ResidenceService) {
   // this.address:string ;
   //address: String= '';

  }

  address:string="";
  // Tableau des résidences favoris (les identifiants)
  favorites: number[] = [];

  // Requête de recherche pour l'adresse
  searchQuery: string = '';
  //showLocation?: boolean;
  
   
 addressVisibility: { [key: number]: boolean } = {};

  showLocation(residenceId: number,address: string): void {
    if (address === 'inconnu') {
      alert("L'adresse de cette résidence est inconnue");
    } else {
        
       console.log(this.addressVisibility[residenceId] = true) ;
      
    }
  }

  toggleLike(residenceId: number): void {
    const residence = this.listResidences.find(res => res.id === residenceId);
    if (residence) {
      residence.isLiked = !residence.isLiked;
      if (residence.isLiked) {
        this.favorites.push(residenceId);  // Ajouter aux favoris
      } else {
        const index = this.favorites.indexOf(residenceId);
        if (index > -1) {
          this.favorites.splice(index, 1);  // Retirer des favoris
        }
      }
    }
  }

  filteredResidences() {
    return this.listResidences.filter(res =>
      res.address.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


}
