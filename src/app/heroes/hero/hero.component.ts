import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'

})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedFirstLetterName():string{
    return this.name[0].toUpperCase() + this.name.slice(1);
  }
  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  private textedAge(n: number){
    let ageText: string;
    // Array with words for numbers from 0 to 19
    let words = [
      "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
      "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
      "eighteen", "nineteen"
    ];

    // Array with words for tens
    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    // Check if n is a valid number
    if (isNaN(n)) {
      return "Invalid number";
    }



    if (n < 20) {
      return words[n];
    } else if (n < 100) {
      let ten = Math.floor(n / 10);
      let unit = n % 10;
      return tens[ten] + (unit !== 0 ? "-" + words[unit] : "");
    } else if (n === 100) {
      return "one hundred";
    } else {
      return "Number out of range";
    }

  }
  getAge(){
    return `${this.age} (${this.textedAge(this.age)})`;
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'spiderman';
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Cambio en nombre realizado</h1>';
    // })
  }
  changeAge(): void{
    this.age = 25;
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Cambio en edad realizado</h1>';
    // })
  }
  resetForm(): void{
    this.name = 'ironman';
    this.age=45;
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>El héroe ha sido reseteado</h1>';
    // })
  }
}
