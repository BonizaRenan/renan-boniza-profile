import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthContentComponent } from './fourth-content.component';

describe('FourthContentComponent', () => {
  let component: FourthContentComponent;
  let fixture: ComponentFixture<FourthContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthContentComponent]
    });
    fixture = TestBed.createComponent(FourthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
