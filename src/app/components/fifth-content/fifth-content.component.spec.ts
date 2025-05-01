import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthContentComponent } from './fifth-content.component';

describe('FifthContentComponent', () => {
  let component: FifthContentComponent;
  let fixture: ComponentFixture<FifthContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifthContentComponent]
    });
    fixture = TestBed.createComponent(FifthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
