import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormReactiveComponent } from './basic-form-reactive.component';

describe('BasicFormReactiveComponent', () => {
  let component: BasicFormReactiveComponent;
  let fixture: ComponentFixture<BasicFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicFormReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
