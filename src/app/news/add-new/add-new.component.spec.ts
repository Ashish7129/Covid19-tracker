import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewComponent } from './add-new.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from 'src/app/services/news-service';

describe('AddNewComponent', () => {
  let component: AddNewComponent;
  let fixture: ComponentFixture<AddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
      ],
      declarations: [AddNewComponent],
      providers: [FormBuilder, NewsService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form should be not valid', () => {
    expect(component.newsForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.newsForm.controls.title.setValue('covid19');
    component.newsForm.controls.description.setValue(
      'jakfsjdfjasdjfjlsdjfljalksjdklfjlkajskdjfljalsjdfljlajsdlfjlasjdlfjlasjdfljshkfhakshdkhfkjhaskjdhjkfaksjhsdkhf'
    );
    component.newsForm.controls.summary.setValue(
      'jakfsjdfjasdjfjlsdjfljalksjdklfjlkajskdjfljalsjdfljlajsdlfjlasjdlfjlasjdfljshkfhakshdkhfkjhaskjdhjkfaksjhsdkhf'
    );
    expect(component.newsForm.valid).toBeTruthy();
  });
});
