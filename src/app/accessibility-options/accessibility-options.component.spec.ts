import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityOptionsComponent } from './accessibility-options.component';

describe('AccessibilityOptionsComponent', () => {
  let component: AccessibilityOptionsComponent;
  let fixture: ComponentFixture<AccessibilityOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessibilityOptionsComponent]
    });
    fixture = TestBed.createComponent(AccessibilityOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
