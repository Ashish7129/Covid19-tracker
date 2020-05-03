import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUser: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  authenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
