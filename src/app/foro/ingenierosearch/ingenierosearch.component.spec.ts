import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenierosearchComponent } from './ingenierosearch.component';

describe('IngenierosearchComponent', () => {
  let component: IngenierosearchComponent;
  let fixture: ComponentFixture<IngenierosearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngenierosearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngenierosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
