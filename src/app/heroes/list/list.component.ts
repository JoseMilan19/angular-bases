import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Anna','Claudia','Alba','Lucía', 'Amanda','Emma'];
  public delatedHero?: string;

  removeFirstHero(): void{
    this.delatedHero=this.heroNames.shift();
  }
  removeLastHero(): void{
    this.delatedHero = this.heroNames.pop();
  }

}
