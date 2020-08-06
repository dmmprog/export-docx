import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDocComponent } from './export-doc.component';

describe('ExportDocComponent', () => {
  let component: ExportDocComponent;
  let fixture: ComponentFixture<ExportDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
