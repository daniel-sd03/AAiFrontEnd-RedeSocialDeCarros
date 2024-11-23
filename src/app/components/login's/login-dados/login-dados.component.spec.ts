import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDadosComponent } from './login-dados.component';

describe('LoginDadosComponent', () => {
  let component: LoginDadosComponent;
  let fixture: ComponentFixture<LoginDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
