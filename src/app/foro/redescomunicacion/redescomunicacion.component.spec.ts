import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedescomunicacionComponent } from './redescomunicacion.component';

describe('RedescomunicacionComponent', () => {
  let component: RedescomunicacionComponent;
  let fixture: ComponentFixture<RedescomunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedescomunicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedescomunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
