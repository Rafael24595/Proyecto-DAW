import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeListFormComponent } from './theme-list-form.component';

describe('ThemeListFormComponent', () => {
  let component: ThemeListFormComponent;
  let fixture: ComponentFixture<ThemeListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
