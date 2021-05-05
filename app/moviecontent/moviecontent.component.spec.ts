import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecontentComponent } from './moviecontent.component';

describe('MoviecontentComponent', () => {
  let component: MoviecontentComponent;
  let fixture: ComponentFixture<MoviecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
