import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StillComponent } from './still.component';

describe('StillComponent', () => {
  let component: StillComponent;
  let fixture: ComponentFixture<StillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
