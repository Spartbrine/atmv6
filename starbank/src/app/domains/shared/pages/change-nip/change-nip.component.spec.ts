import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNipComponent } from './change-nip.component';

describe('ChangeNipComponent', () => {
  let component: ChangeNipComponent;
  let fixture: ComponentFixture<ChangeNipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeNipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeNipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
