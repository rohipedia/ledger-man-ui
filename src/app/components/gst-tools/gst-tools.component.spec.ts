import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstToolsComponent } from './gst-tools.component';

describe('GstToolsComponent', () => {
  let component: GstToolsComponent;
  let fixture: ComponentFixture<GstToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
