import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  allPets:any;

  ngOnInit() {
    this.getAllPets()
  }

  getAllPets(){
    let obs = this._httpService.getAllService();
    obs.subscribe(data=> {
      console.log("Got all pets: ", data);
      this.allPets = data;
    })
  }

}
