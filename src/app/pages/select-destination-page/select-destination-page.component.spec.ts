import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDestinationPageComponent } from './select-destination-page.component';

describe('SelectDestinationPageComponent', () => {
  let component: SelectDestinationPageComponent;
  let fixture: ComponentFixture<SelectDestinationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDestinationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDestinationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
