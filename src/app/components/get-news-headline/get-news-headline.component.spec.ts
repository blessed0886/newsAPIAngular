import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNewsHeadlineComponent } from './get-news-headline.component';

describe('GetNewsHeadlineComponent', () => {
  let component: GetNewsHeadlineComponent;
  let fixture: ComponentFixture<GetNewsHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetNewsHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNewsHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
