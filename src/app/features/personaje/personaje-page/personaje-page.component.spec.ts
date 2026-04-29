import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPageComponent } from './personaje-page.component';

describe('ItemPageComponent', () => {
  let component: ItemPageComponent;
  let fixture: ComponentFixture<ItemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPageComponent]
    });
    fixture = TestBed.createComponent(ItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
