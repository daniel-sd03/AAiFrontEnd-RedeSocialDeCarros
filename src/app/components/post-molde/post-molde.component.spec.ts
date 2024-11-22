import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMoldeComponent } from './post-molde.component';

describe('PostMoldeComponent', () => {
  let component: PostMoldeComponent;
  let fixture: ComponentFixture<PostMoldeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostMoldeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostMoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
