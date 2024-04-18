import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditmenuComponent } from './creditmenu.component';

describe('CreditmenuComponent', () => {
  let component: CreditmenuComponent;
  let fixture: ComponentFixture<CreditmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
