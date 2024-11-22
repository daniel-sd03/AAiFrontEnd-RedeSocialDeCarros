import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilItemComponent } from './perfil-item.component';

describe('PerfilItemComponent', () => {
  let component: PerfilItemComponent;
  let fixture: ComponentFixture<PerfilItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
