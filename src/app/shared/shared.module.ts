import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxGalleryModule } from 'ngx-gallery';
import { TabsModule } from "ngx-bootstrap/tabs";
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgxGalleryModule,
    TabsModule.forRoot(),
   
    
  ],
  exports: [
    // common and shared components/directives/pipes between more than one module and components will be listed here.
    CommonModule,
    FlexLayoutModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgxGalleryModule,
    TabsModule
    
    
  ]
})
export class SharedModule {
}