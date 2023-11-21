import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule, 
  MatSelectModule,
];




@NgModule({
  imports: [ modules],
  exports: [ modules ]
})
export class MaterialModule { }
