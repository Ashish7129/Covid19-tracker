import { Component, OnInit, NgZone, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IAdmin } from '../model/data';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  admin: IAdmin[] = [];
  loginForm: FormGroup;
  errorMessage: any;
  currentUser = false;
  isSaving = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private ngZone: NgZone
  ) {}

  authenticated() {
    return this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    if (this.authenticated()) {
      this.currentUser = true;
      this.router.navigate(['/']);
    }
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }
  login(): void {
    if (this.loginForm.valid) {
      if (this.loginForm.dirty) {
        const adminData = { ...this.admin, ...this.loginForm.value };
        console.log(adminData);
        this.isSaving = true;
        this.userService.getAdmins().subscribe({
          next: (currentUsers) => {
            const authUser = currentUsers.find(
              (x) =>
                x.email === adminData.email && x.password === adminData.password
            );
            console.log('user : ' + authUser);
            this.currentUser = !authUser ? false : true;
            if (this.currentUser) {
              console.log('Valid user');
              localStorage.setItem('email', authUser.email);
            } else {
              console.log('InValid user');
            }
            this.isSaving = false;
            if (this.authenticated()) {
              console.log('Redirecting to the dashboard');
              this.ngZone.run(() => this.router.navigate(['/dashboard']));
            }
          },
          error: (err) => (this.errorMessage = err),
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
    this.newMethod();
  }

  private newMethod() {
    if (this.authenticated()) {
      console.log('Redirecting to the dashboard');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Please enter the valid credentials';
      this.router.navigate(['/login']);
    }
  }
}
