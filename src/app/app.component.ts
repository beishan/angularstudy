
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of heroes';
  selectedHero : Hero;

  heros = HEROS;
  
  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }
}

const HEROS: Hero[] = [
  {id: 11, name: '小蜘蛛1'},
  {id: 12, name: '小蜘蛛2'},
  {id: 13, name: '小蜘蛛3'},
  {id: 14, name: '小蜘蛛4'},
  {id: 15, name: '小蜘蛛5'},
  {id: 16, name: '小蜘蛛6'},
  {id: 17, name: '小蜘蛛7'},
];

export class Hero {
  id : number;
  name : string;
}