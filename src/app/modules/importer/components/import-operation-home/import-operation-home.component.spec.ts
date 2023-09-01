import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportOperationHomeComponent } from './import-operation-home.component';

describe('ImportOperationHomeComponent', () => {
  let component: ImportOperationHomeComponent;
  let fixture: ComponentFixture<ImportOperationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportOperationHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportOperationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
