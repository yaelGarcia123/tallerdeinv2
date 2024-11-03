import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCalandoComponent } from './agregar-calando.component';

describe('AgregarCalandoComponent', () => {
  let component: AgregarCalandoComponent;
  let fixture: ComponentFixture<AgregarCalandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarCalandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCalandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
