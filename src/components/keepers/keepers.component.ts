import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.css']
})
export class KeepersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Keepers cargado!');
  }

}
