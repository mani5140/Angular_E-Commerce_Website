import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onSearch(event: any): void {
    const query = event.target.value;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: query },
      queryParamsHandling: 'merge'
    });
  }
}
