import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { BPage } from '../b/b';
import {ZhucePage} from '../zhuce/zhuce';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // @ViewChild('ac')ac;
  items = [];
  isActive=0;
  isClick(i){
    this.isActive = i;
  }
  constructor(public navCtrl: NavController,public http:HttpClient) {
    for (var i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  goSub(){
    this.navCtrl.push(BPage,{id:1});
  }
  goZhu(){
    this.navCtrl.push(ZhucePage)
  }
  doInfinite(infiniteScroll) {
    this.http.get('/api/courses').subscribe(data=>{
      console.log(data);
      infiniteScroll.complete();
    })
  }



  
}
