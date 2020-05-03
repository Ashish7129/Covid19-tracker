import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CovidService } from '../services/covid.service';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientModule],
      providers: [CovidService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should contain data for state code TT', inject(
    [CovidService],
    (httpService) => {
      httpService.getStateList().subscribe((data: any) => {
        expect(data.statewise[0].statecode).toContain('TT');
      });
    }
  ));

  it('should contain text for Maharashtra', inject(
    [CovidService],
    (httpService) => {
      httpService.getDistrictListByState().subscribe((data: any) => {
        expect(data.Maharashtra.statecode).toContain('MH');
      });
    }
  ));
});
