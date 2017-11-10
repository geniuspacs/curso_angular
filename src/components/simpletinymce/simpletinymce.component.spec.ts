import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpletinymceComponent } from './simpletinymce.component';

describe('SimpletinymceComponent', () => {
  let component: SimpletinymceComponent;
  let fixture: ComponentFixture<SimpletinymceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpletinymceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpletinymceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
