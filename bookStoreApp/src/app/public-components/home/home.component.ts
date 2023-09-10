import { publishFacade } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { CounterService } from 'src/app/shared/services/counter.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  
  constructor(public testService: TestService) { }



  ngOnInit(): void {
    
  }

  public childData($event: any): void{
    console.log($event);
  }

}
