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
    route.queryParamMap.subscribe(params => {this.name = params.get('name') ?? "Sophia"})
  }
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
