import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  likePetService(id) {
    return this._http.put("/api/pet/like/" + id, id)
  }

  constructor(private _http: HttpClient) { }

  getAllService() {
    return this._http.get("/api/pet");
  }

  addPetService(newPet){
    return this._http.post("/api/pet", newPet);
  }

  deletePetService(id) {
    return this._http.delete("/api/pet/" +id);
  }

  getOnePetService(id){
    return this._http.get("/api/pet/" + id);
  }

  updatePetService(id, updatedFormInfo) {
    return this._http.put("/api/pet/" + id, updatedFormInfo);
  }

  
}
