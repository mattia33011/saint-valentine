import { Component } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private route: ActivatedRoute) {
    route.queryParamMap.subscribe(params => {
      this.name = params.get('name') ?? "Sophia"
      this.time = params.get('time') ?? "20:00"
      this.place = params.get('place') ?? "Ristorante Mamima"
      this.url = params.get('url') ?? "https://g.co/kgs/Rup357Q"

    })
  }
  time: string = ""
  place: string = ""
  url: string = ""
  name: string = ""
  title = 'saint-valentine';
  love = false
  increaseButton(button: HTMLButtonElement, noBtn: HTMLButtonElement) {
    button.style.width = `${button.clientWidth * 2}px`
    button.style.height = `${button.clientHeight * 2}px`
    noBtn.style.width = `${noBtn.clientWidth / 2}px`
    noBtn.style.height = `${noBtn.clientWidth / 2}px`
  }
}
