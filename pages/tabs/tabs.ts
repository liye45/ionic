import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import{APage}from '../a/a';
import{BPage}from '../b/b';
// import{ZhucePage}from '../zhuce/zhuce';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = APage;
  tab5Root = BPage;
  constructor() {

  }
}
