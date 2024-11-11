import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosmecatronicaComponent } from './serviciosmecatronica.component';

describe('ServiciosmecatronicaComponent', () => {
  let component: ServiciosmecatronicaComponent;
  let fixture: ComponentFixture<ServiciosmecatronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosmecatronicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosmecatronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
