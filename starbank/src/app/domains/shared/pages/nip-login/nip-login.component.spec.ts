import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NipLoginComponent } from './nip-login.component';

describe('NipLoginComponent', () => {
  let component: NipLoginComponent;
  let fixture: ComponentFixture<NipLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NipLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NipLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
