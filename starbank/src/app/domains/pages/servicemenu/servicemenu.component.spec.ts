import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicemenuComponent } from './servicemenu.component';

describe('ServicemenuComponent', () => {
  let component: ServicemenuComponent;
  let fixture: ComponentFixture<ServicemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicemenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
