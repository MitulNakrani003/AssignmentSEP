import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirectivesComponentComponent } from './form-directives-component.component';

describe('FormDirectivesComponentComponent', () => {
  let component: FormDirectivesComponentComponent;
  let fixture: ComponentFixture<FormDirectivesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDirectivesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDirectivesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
