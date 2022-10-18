import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle: boolean = true;

  cards: Card[] = [
    {title: 'Card One', text: 'This is card number One'},
    {title: 'This is card 2', text: 'This is card number two'},
    {title: 'Card 3', text: 'This is card number Three'}
  ]

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
