import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacaoAddComponent } from './publicacao-add.component';

describe('PublicacaoAddComponent', () => {
  let component: PublicacaoAddComponent;
  let fixture: ComponentFixture<PublicacaoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacaoAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacaoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
