import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService as AuthGuard } from 'src/app/services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportOperationDetailsComponent } from './components/import-operation-details/import-operation-details.component';
import { ImportOperationHomeComponent } from './components/import-operation-home/import-operation-home.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { UploadAreaComponent } from './components/upload-area/upload-area.component';
import { FilesImportTableComponent } from './components/files-import-table/files-import-table.component';
import { LocationsTableComponent } from './components/locations-table/locations-table.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], data: { role: ['admin'] },
    children: [
      { path: 'home', component: ImportOperationHomeComponent, canActivate: [AuthGuard], data: { role: ['admin'] } },
    ]
  },
  {
    path : 'details',component:ImportOperationDetailsComponent,canActivate:[AuthGuard],data:{role:['admin']}
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
    ImportOperationDetailsComponent,
    ImportOperationHomeComponent,
    TaskDetailsComponent,
    UploadAreaComponent,
    FilesImportTableComponent,
    LocationsTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ImporterModule { }
