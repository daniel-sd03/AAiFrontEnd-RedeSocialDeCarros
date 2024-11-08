import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedUsuarioComponent } from './feed-usuario.component';

describe('FeedUsuarioComponent', () => {
  let component: FeedUsuarioComponent;
  let fixture: ComponentFixture<FeedUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
