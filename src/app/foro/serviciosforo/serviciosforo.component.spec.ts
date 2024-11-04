import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosforoComponent } from './serviciosforo.component';

describe('ServiciosforoComponent', () => {
  let component: ServiciosforoComponent;
  let fixture: ComponentFixture<ServiciosforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosforoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
