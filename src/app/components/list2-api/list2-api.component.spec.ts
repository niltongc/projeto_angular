import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List2ApiComponent } from './list2-api.component';

describe('List2ApiComponent', () => {
  let component: List2ApiComponent;
  let fixture: ComponentFixture<List2ApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List2ApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List2ApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
