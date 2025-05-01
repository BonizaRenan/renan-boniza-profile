import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdContentComponent } from './third-content.component';

describe('ThirdContentComponent', () => {
  let component: ThirdContentComponent;
  let fixture: ComponentFixture<ThirdContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdContentComponent]
    });
    fixture = TestBed.createComponent(ThirdContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
