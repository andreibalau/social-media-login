import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDocComponent } from './angular-doc.component';

describe('AngularDocComponent', () => {
  let component: AngularDocComponent;
  let fixture: ComponentFixture<AngularDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
