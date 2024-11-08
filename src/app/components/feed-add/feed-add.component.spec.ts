import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedAddComponent } from './feed-add.component';

describe('FeedAddComponent', () => {
  let component: FeedAddComponent;
  let fixture: ComponentFixture<FeedAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
