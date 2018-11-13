import { NgModule } from '@angular/core';
import { CComponent } from './c/c';
import { BrowserModule } from '@angular/platform-browser';
import {IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [CComponent],
	imports:[
		BrowserModule,
		IonicModule.forRoot(ComponentsModule, {
			backButtonText: 'Go Back',
			tabsPlacement: 'bottom',
			
		  })
	],
	exports: [CComponent]
})
export class ComponentsModule {}
