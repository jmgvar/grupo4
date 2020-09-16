import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDisplayedComponent } from './resource-displayed.component';

describe('ResourceDisplayedComponent', () => {
  let component: ResourceDisplayedComponent;
  let fixture: ComponentFixture<ResourceDisplayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceDisplayedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceDisplayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
