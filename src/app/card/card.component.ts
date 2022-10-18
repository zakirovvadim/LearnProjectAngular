import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  interpolation: ['{{','}}']
})

export class CardComponent implements OnInit {

  @Input() card!: Card
  @Input() index!: number

  cardDate: Date = new Date()

  title: string = 'My Card Title'
  text: string = 'My sample text'
  textColor!: string

  ngOnInit() {}

  changeTitle() {
    this.card.title = "Поменяли тайтл"
  }

  getInfo(): string {
    return 'My method'
  }

  inputHandler(event: any) {
    const value = event.target.value;
    this.title = value;
  }


}
