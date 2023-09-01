import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDatePipe } from 'src/app/pipes/date-pipe.pipe';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MaterialModule } from '../material/material.module';
import { NgxBarcodeModule } from 'ngx-barcode';
import { RouterModule} from '@angular/router';
import { TextHighlighterPipe } from 'src/app/pipes/text-highlighter.pipe';
import { MentionModule } from 'angular-mentions';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { TreeModule } from '@circlon/angular-tree-component';
import { UniquePipe } from 'src/app/pipes/unique.pipe';
import { TimeDifferencePipe } from 'src/app/pipes/time-difference.pipe';
import { TimeDecreasePipe } from 'src/app/pipes/time-decrease.pipe';
import { NgxPrintModule } from 'ngx-print';
import { FilterSearchPipe } from 'src/app/pipes/filter-search.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NgxPrintElementModule } from 'ngx-print-element';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
    declarations: [
        HeaderComponent,
        CustomDatePipe,
        TextHighlighterPipe,
        UniquePipe,      
        TimeDifferencePipe,
        TimeDecreasePipe,
        FilterSearchPipe,
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgxSkeletonLoaderModule,
        NgxPaginationModule,
        NgMultiSelectDropDownModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NgxMatSelectSearchModule,
        FormsModule,
        NgxBarcodeModule,
        MentionModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        }),
        IvyCarouselModule,
        TreeModule,
        NgxPrintModule,
        NgxPrintElementModule,
        MatButtonModule, MatMenuModule,
        NgCircleProgressModule.forRoot({
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 300,
          })
    ],
    exports: [
        HeaderComponent,
        NgxSkeletonLoaderModule,
        NgxPaginationModule,
        NgMultiSelectDropDownModule,
        FormsModule,
        ReactiveFormsModule,
        CustomDatePipe,
        TextHighlighterPipe,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NgxMatSelectSearchModule,
        NgxBarcodeModule,
        MentionModule,
        TranslateModule,
        TreeModule,        
        TimeDifferencePipe,
        TimeDecreasePipe,
        NgxPrintModule,
        NgxPrintElementModule,
        UniquePipe,
        FilterSearchPipe,
        MatButtonModule, MatMenuModule,
        NgCircleProgressModule
    ]
})
export class SharedModule { }

export function httpTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http);
}
