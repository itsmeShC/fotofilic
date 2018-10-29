import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  modalshow(){
    var show = document.getElementById('modal-img');
    show.style.display = 'block';
  }
  
  modalhide(){
    var hide = document.getElementById('modal-img');
    hide.style.display = 'none';
  }
}
