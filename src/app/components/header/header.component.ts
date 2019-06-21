import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from 'src/app/services/rest.service';


import { Menu } from 'src/app/Models/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mMenus = new Array<Menu>();
  mMenuLev1 = new Array<Menu>();
  mMenuLev2 = new Array<Menu>();
  mMenuLev3 = new Array<Menu>();

  constructor(private rest:RestService) { }

  ngOnInit() {
    this.rest.getMenu().toPromise().then(res=>{     
    this.mMenus = res;

    this.mMenuLev1 = this.mMenus.filter((res)=>{      
      return res.XVMenuLevel === "1"
    })

    this.mMenuLev2 = this.mMenus.filter((res)=>{      
      return res.XVMenuLevel != "1"
    })

    console.log( this.mMenuLev1,this.mMenuLev2)

     //mMenu1 = $filter('filter')(res.subjects, {grade: 'C'})[0];

     //console.log(this.mMenuAll);
     //setMenu();
   })
  }

  // setMenu(){
  //   console.log();
  // }

}
