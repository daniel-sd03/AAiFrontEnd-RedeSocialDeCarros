import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirContaDadosComponent } from './excluir-conta-dados.component';

describe('ExcluirContaDadosComponent', () => {
  let component: ExcluirContaDadosComponent;
  let fixture: ComponentFixture<ExcluirContaDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirContaDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirContaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
