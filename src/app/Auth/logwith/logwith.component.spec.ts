import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogwithComponent } from './logwith.component';

describe('LogwithComponent', () => {
  let component: LogwithComponent;
  let fixture: ComponentFixture<LogwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogwithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
