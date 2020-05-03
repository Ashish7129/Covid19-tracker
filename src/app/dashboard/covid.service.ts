import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient) {}
  public getStateList(): Observable<any> {
    return this.http
      .get('https://api.covid19india.org/data.json')
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

  public getDistrictListByState(): Observable<any> {
    return this.http
      .get('https://api.covid19india.org/state_district_wise.json')
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }
}
