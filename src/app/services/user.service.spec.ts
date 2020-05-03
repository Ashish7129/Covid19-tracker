import { TestBed, getTestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('UserService', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpTestingController],
      providers: [UserService],
    });
    injector = getTestBed();
    // tslint:disable-next-line: deprecation
    service = injector.get(UserService);
    // tslint:disable-next-line: deprecation
    httpMock = injector.get(HttpTestingController);
  });

  xit('should contain the admins count greater 1', () => {
    const dummyAdmin = [
      { email: 'ashish@gmail.com', password: 'admin1234', id: 1 },
    ];
    service.getAdmins().subscribe((admins) => {
      expect(admins.length).toBe(1);
      expect(admins).toEqual(dummyAdmin);
    });
    const req = httpMock.expectOne(`${service.adminUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAdmin);
  });
});
