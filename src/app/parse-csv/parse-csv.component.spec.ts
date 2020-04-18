import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseCSVComponent } from './parse-csv.component';

describe('ParseCSVComponent', () => {
  let component: ParseCSVComponent;
  let fixture: ComponentFixture<ParseCSVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseCSVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
