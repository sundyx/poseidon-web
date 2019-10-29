import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,MatMenuModule} from '@angular/material';

const modules = [
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule, 
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule
];

@NgModule({
imports: [...modules],
exports: [...modules]
,
})export class MaterialModule {};