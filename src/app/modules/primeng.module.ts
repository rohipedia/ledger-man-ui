import { NgModule } from '@angular/core';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeModule } from 'primeng/tree';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
    declarations: [],
    imports: [
        OrganizationChartModule,
        TreeModule,
        InputTextareaModule,
        EditorModule,
        TableModule,
        MultiSelectModule
    ],
    exports: [
        OrganizationChartModule,
        TreeModule,
        InputTextareaModule,
        EditorModule,
        TableModule,
        MultiSelectModule
    ]
})
export class PrimengModule {}