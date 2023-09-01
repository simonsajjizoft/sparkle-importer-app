import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportOperationDetailsComponent } from './import-operation-details.component';

describe('ImportOperationDetailsComponent', () => {
  let component: ImportOperationDetailsComponent;
  let fixture: ComponentFixture<ImportOperationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportOperationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportOperationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
