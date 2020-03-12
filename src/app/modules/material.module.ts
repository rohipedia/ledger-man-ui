import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatMenuModule, MatIconModule, MatRadioModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';

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
        MatStepperModule,
        MatRadioModule
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
        MatStepperModule,
        MatRadioModule
    ]
})
export class MaterialModule {

}