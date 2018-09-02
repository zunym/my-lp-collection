import { NgModule } from '@angular/core';

//standard material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';

//moment module for date-time
import { MatMomentDateModule	} from '@angular/material-moment-adapter';

//flex module for css alignment
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [
  //standard material modules
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatButtonModule,
  MatIconModule,
  MatSliderModule,
  //moment
  MatMomentDateModule,
  //flex
  FlexLayoutModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }