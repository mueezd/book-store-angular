import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public name: string = '';
  public email: string = '';
  public id: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(quearyParam => {
      this.name = quearyParam['name'];
      this.email = quearyParam['email'];
      this.id = quearyParam['id'];

      console.log(quearyParam);
    })
  }

  goToSignUp(): void {
    this.router.navigate(['auth/signup']);
  }

  goToBookDetails(id: number, authorId: number): void {
    this.router.navigate(['/public/book-details/', id, 'author', authorId],{
      queryParams:{name: 'deepro', email: 'salple@deepro.com'}

    });
  }

}
