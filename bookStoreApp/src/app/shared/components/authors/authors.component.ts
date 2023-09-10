import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {

  public data: number;

  public setData(value: number): void {
    this.data = value;
  }

  constructor(private _testService: TestService) { }


  btnClick(): void {
    this._testService.myData = 'this text from child component,, cool ';
  }
}
