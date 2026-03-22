import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupComponentComponent } from './tab-group-component.component';

describe('TabGroupComponentComponent', () => {
  let component: TabGroupComponentComponent;
  let fixture: ComponentFixture<TabGroupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabGroupComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabGroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
