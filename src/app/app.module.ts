import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExportDocComponent } from './export-doc/export-doc.component';
import { DocxService } from './services/docx.service';
import { FileSaverModule } from 'ngx-filesaver';

@NgModule({
  declarations: [
    AppComponent,
    ExportDocComponent
  ],
  imports: [
    BrowserModule,     
    FileSaverModule
  ],
  providers: [DocxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
