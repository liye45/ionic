import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


/**
 * Generated class for the APage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})
export class APage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
 
   
  ionViewDidLoad() {
    console.log(this.slides.getActiveIndex());
    //get();
  }

}
