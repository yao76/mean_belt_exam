import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  editPet: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params.id;
      console.log("ngoninit id: " + this.id)
      
    });

    this.editPet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""}
    this.getOnePet(this.id);

  }
  getOnePet(id) {
    let obs = this._httpService.getOnePetService(id);
    obs.subscribe(data => {
      this.editPet = data;
      console.log("Got one pet! " + this.editPet);
    })
  }

  updatePet() {
    let obs = this._httpService.updatePetService(this.id, this.editPet)
    obs.subscribe(data => {
      console.log(data);
    })
  }

  goBackToEdit() {
    this._router.navigate(['pets/' + this.id + "/edit"]);
  }
}
