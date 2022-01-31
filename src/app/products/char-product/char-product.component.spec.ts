import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharProductComponent } from './char-product.component';

describe('CharProductComponent', () => {
  let component: CharProductComponent;
  let fixture: ComponentFixture<CharProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
