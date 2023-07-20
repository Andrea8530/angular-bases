import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHero?: string;

  public heroNames: string[] = ['Spiderman', 'Hulk', 'Superman', 'Thor'];

  removeLastName(): void{
    this.deletedHero= this.heroNames.pop();

  }

}
