


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoDadosComponent } from './atualizaDado-dados.component';

describe('ConfiguracaoDadosComponent', () => {
  let component: ConfiguracaoDadosComponent;
  let fixture: ComponentFixture<ConfiguracaoDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracaoDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracaoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
