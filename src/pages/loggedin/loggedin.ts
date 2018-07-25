import { Component } from '@angular/core';
import { PrincipalPage }from '../principal/principal';
import { CifrarPage } from '..//cifrar/cifrar';
import { DescifrarPage } from '..//descifrar/descifrar';
import { AboutPage }from '../about/about';
import { InfoPage } from '../info/info';



@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

	email: string;
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor() {

      this.tab1 = InfoPage;
      this.tab2 = CifrarPage;
      this.tab3 = DescifrarPage;
      this.tab4 = AboutPage;

  }
}
