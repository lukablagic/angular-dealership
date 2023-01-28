import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductItemComponent } from './pruduct-item.component';

describe('PruductItemComponent', () => {
  let component: PruductItemComponent;
  let fixture: ComponentFixture<PruductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruductItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
