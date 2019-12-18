import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylDetailComponent } from './vinyl-detail.component';

describe('VinylDetailComponent', () => {
  let component: VinylDetailComponent;
  let fixture: ComponentFixture<VinylDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
