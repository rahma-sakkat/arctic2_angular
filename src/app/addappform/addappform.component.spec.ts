import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappformComponent } from './addappform.component';

describe('AddappformComponent', () => {
  let component: AddappformComponent;
  let fixture: ComponentFixture<AddappformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddappformComponent]
    });
    fixture = TestBed.createComponent(AddappformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
