import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthService],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('No localstorage for the Auth Guard', inject([AuthService], (auth) => {
    expect(
      null == localStorage.getItem('email') ? auth.isAuthenticated() : false
    ).toBeFalsy();
  }));
});
