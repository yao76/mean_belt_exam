import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  newPet: any;
  allPets: any;

  ngOnInit() {
    this.newPet = {name: "", type: "", description: "", skill1:"", skill2: "", skill3:""};
    this.getAllPets();
  }

  addPet() {
    let obs = this._httpService.addPetService(this.newPet);
    obs.subscribe(data=> {
      console.log("Data from form: ", data);
    })

    this.newPet = {name: "", type: "", description: "", skills:[]}

  }

  getAllPets(){
    let obs = this._httpService.getAllService();
    obs.subscribe(data=> {
      console.log("Got all pets: ", data);
      this.allPets = data;
    })
  }

}
