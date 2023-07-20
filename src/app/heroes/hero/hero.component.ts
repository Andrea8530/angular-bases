import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironmen';
  public  age: number = 45;

get capitalizedName (): string{
  return this.name.toUpperCase();
}

getHeroDescription (): string{
  return `${this.name} - ${this.age}`;
}

changeName():void{
  this.name = 'Spiderman'
}

changeEge():void{
  this.age = 30;
}

resetAll():void{
  this.name ='Ironmen';
  this.age = 45;
}

}
