import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]  // Adicionando o AuthGuard como provider
    });

    authGuard = TestBed.inject(AuthGuard);  // Injetando o AuthGuard
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });
});
