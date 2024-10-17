import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  envTest: string
  constructor() { }

  ngOnInit(): void {
    this.envTest = environment.test
  }

}
