import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeInformationComponent } from './theme-information.component';

describe('ThemeInformationComponent', () => {
  let component: ThemeInformationComponent;
  let fixture: ComponentFixture<ThemeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
