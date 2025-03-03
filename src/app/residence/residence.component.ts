import { Component } from '@angular/core';
import { Residence } from 'src/core/Models/Residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  address:string="";
  // Tableau des résidences favoris (les identifiants)
  favorites: number[] = [];

  // Requête de recherche pour l'adresse
  searchQuery: string = '';
  //showLocation?: boolean;
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria","image":"../../assets/images/R1.jpg", status: "Disponible", isLiked: false },
    {id:2,"name": "El yasmine","address":"Ezzahra","image":"../../assets/images/R2.jpg", status:"Disponible", isLiked: false  },
    {id:3,"name": "El Arij","address":"Rades","image":"../../assets/images/R3.jpg", status:"Vendu", isLiked: false },
    {id:4,"name": "El Anber","address":"inconnu","image":"../../assets/images/R4.jpg", status: "En Construction", isLiked: false }
    ];
  
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
      res.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


}
