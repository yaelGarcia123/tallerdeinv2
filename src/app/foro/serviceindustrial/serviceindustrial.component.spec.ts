import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceindustrialComponent } from './serviceindustrial.component';

describe('ServiceindustrialComponent', () => {
  let component: ServiceindustrialComponent;
  let fixture: ComponentFixture<ServiceindustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceindustrialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceindustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
