import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap:    [AppComponent],
    declarations: [AppComponent],
    imports:      [BrowserModule, BrowserAnimationsModule, ProgressBarModule, LabelModule, DropDownListModule, FormsModule, ButtonsModule, InputsModule]
})
export class AppModule {}
