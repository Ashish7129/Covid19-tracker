import { Component, OnInit } from '@angular/core';
import { IState, IDistrict } from '../model/data';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title = 'angular-covid';
  items: IState[] = [];
  district: IDistrict[] = [];
  districtNames: any = [];
  currentState: string;
  constructor(private httpService: CovidService) {}
  ngOnInit(): void {
    this.httpService.getStateList().subscribe((res) => {
      console.log(res);
      // tslint:disable-next-line: forin
      for (const item in res[`statewise`]) {
        this.items.push(res[`statewise`][item]);
      }
    });
  }

  public getDistricts(state: string): void {
    this.httpService.getDistrictListByState().subscribe((res) => {
      this.districtNames = [];
      this.district = [];
      console.log(res[state]);
      this.currentState = state;
      if (res[state].hasOwnProperty('districtData')) {
        for (const itemName of Object.keys(res[state][`districtData`])) {
          this.districtNames.push(itemName);
          console.log(itemName);
        }
        // tslint:disable-next-line: forin
        for (const item in res[state][`districtData`]) {
          this.district.push(res[state][`districtData`][item]);
        }
      }
      console.log(this.district);
    });
  }
}
