import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }


    pet: any;
    id: any;
    clicked: boolean;

  ngOnInit() {
    this.pet = {name: "", type: "", description: ""};

    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params.id;
      console.log("ngoninit id: " + this.id)
    });
    this.clicked = false;
    this.getOnePet();
  }

  getOnePet(){
    let obs = this._httpService.getOnePetService(this.id);
    obs.subscribe(data=>{
      this.pet = data;
    })
  }

  deletePet(id){
    console.log("in delete", id);
    let obs = this._httpService.deletePetService(id);
    obs.subscribe(data=> {
      console.log("Deleted pet: ", data);
    })

    this.goHome();

  }

  likePet(id){
    let obs=this._httpService.likePetService(id);
    obs.subscribe(data=> {
      console.log("Likes", data);
      this.clicked = true;
      this.getOnePet();
      
    })
    // this.getOnePet();
    
  }

  goHome() {
    this._router.navigate(['']);
  }

}
