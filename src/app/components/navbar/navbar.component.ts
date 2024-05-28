import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  onSearch(event: any): void {
    const query = event.target.value.trim();
    this.router.navigate(['/products'], { queryParams: { search: query } });
  }
}
