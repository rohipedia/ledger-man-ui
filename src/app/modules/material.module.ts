import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [],
    imports: [
        MatFormFieldModule,
        MatProgressBarModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
    ],
    exports: [
        MatFormFieldModule,
        MatProgressBarModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
    ]
})
export class MaterialModule {

}