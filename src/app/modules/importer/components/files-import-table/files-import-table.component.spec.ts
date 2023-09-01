import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesImportTableComponent } from './files-import-table.component';

describe('FilesImportTableComponent', () => {
  let component: FilesImportTableComponent;
  let fixture: ComponentFixture<FilesImportTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesImportTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesImportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
