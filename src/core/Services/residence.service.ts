import { Injectable } from '@angular/core';
import { Residence } from '../Models/Residence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  url: string = 'http://localhost:3000/residence';

  constructor(private http: HttpClient) {}

  getResidenceList() {
    return this.http.get<Residence[]>(this.url);
  }

  getResidenceById(id: number) {
    return this.http.get<Residence>(this.url + '/' + id);
  }

  addResidence(r: Residence) {
    return this.http.post(this.url, r);
  }


  deleteResidence(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}