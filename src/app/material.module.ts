import { NgModule} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';


const MODULES = [
    MatFormFieldModule,MatInputModule,
    MatToolbarModule,MatIconModule,
    MatButtonModule,MatSliderModule,
    FlexModule,MatCardModule
]

@NgModule({
imports: MODULES,
exports: MODULES
})

export class MaterialModule{}