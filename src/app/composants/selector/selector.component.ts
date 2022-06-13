import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokedexService} from "../../services/pokedex.service";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {


  constructor(private svc: PokedexService) {
  }

  ngOnInit(): void {
  }

  origineForm(value: any) {
    this.svc.setLoopValues(value.origine, value.fin);
  }


}//eo Class
