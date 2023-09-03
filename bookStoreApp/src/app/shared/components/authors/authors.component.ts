import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {

  @Input() data: number;
  @Input() showAuthor: boolean;
  constructor() { }
}
