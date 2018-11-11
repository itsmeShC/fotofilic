import { Component, OnInit } from '@angular/core';
import { fetchFotosService } from '../services/fetchFotos.service'
import { fotosRequestResponse } from '../models/fotosRequestRespone.model';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
//
  fotos: fotosRequestResponse[];
 constructor(private fetchFotosService: fetchFotosService) { 
    this.fetchFotosService.getFotos().subscribe(data =>{ console.log(data.json())
         this.fotos = data.json();
    });
  }

  ngOnInit() {
  }

}
