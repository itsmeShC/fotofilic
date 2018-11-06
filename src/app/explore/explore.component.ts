import { Component, OnInit } from '@angular/core';
import { fetchFotosService } from '../services/fetchFotos.service'


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
//
 constructor(private fetchFotosService: fetchFotosService) { 
    this.fetchFotosService.getFotos().subscribe(data =>{ console.log(data)});
  }

  ngOnInit() {
  }

}
