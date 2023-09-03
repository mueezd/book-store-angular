import { publishFacade } from '@angular/compiler';
import { Component, Inject, inject } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public counterService: CounterService,
    @Inject('appTitle') public config: any
  ) { }


  public increase(): void {
    this.counterService.incCounter();
  }


  public decreas(): void {
    this.counterService.decCounter();
  }


}
