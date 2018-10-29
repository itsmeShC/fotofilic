import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  modalShow(){
        var show = document.getElementById('modal');
        show.style.display='block';
  
  }
  modalhide(){
        var hide = document.getElementById('modal');
        hide.style.display='none';
    }
}
