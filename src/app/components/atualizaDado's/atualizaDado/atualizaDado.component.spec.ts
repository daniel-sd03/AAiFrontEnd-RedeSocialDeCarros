import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaDadoComponent } from './atualizaDado.component';

describe('AtualizaDadoComponent', () => {
  let component: AtualizaDadoComponent;
  let fixture: ComponentFixture<AtualizaDadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizaDadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaDadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
