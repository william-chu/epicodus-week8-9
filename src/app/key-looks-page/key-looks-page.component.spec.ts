import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyLooksPageComponent } from './key-looks-page.component';

describe('KeyLooksPageComponent', () => {
  let component: KeyLooksPageComponent;
  let fixture: ComponentFixture<KeyLooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyLooksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyLooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
