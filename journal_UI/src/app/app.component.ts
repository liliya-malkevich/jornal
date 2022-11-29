import { Component,Input, OnChanges, OnDestroy, OnInit, Renderer2,ViewChild, enableProdMode, } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { locale, loadMessages } from "devextreme/localization";
import { Observable, Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { DxDrawerComponent } from 'devextreme-angular';

import ruMessages from "devextreme/localization/messages/ru.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

@Input() public title!: string;

 public headerTitle!: string;
 private prevTabId?: string;
 //public showSideBarBtn: boolean = true;
 public opened: boolean = true;
 // Navigate
 public disablePrevPage: boolean = false;
 public prevElement!: any;

 private _navbarDataSubscription!: Subscription;
 constructor(private router: Router,
             private activatedRoute: ActivatedRoute,

             private renderer: Renderer2) {
              loadMessages(ruMessages);
              locale(navigator.language);

              this._navbarDataSubscription = this.router.events.pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route: any) => {
                  while (route.firstChild) route = route.firstChild;
                  return route;
                }),
                filter((route) => route.outlet === 'primary'),
                mergeMap((route: any) => route.data)
              )
              .subscribe((event: any) => {
                if (event['title']) {
                  this.headerTitle = event['title'];

                 // this.configSideBar(this.headerTitle);
                } else {
                  this.headerTitle = '';
                }


              });


             }


            //  private configSideBar(headerTitle: string) {
            //   if (headerTitle !== 'Главная') {
            //     this.disablePrevPage = false;
            //     this.showSideBarBtn = true;
            //     this.opened = true;
            //   }

            //   else if (headerTitle === 'Главная') {
            //     this.showSideBarBtn = true;
            //     this.disablePrevPage = true;
            //     this.opened = true;
            //   }
            // }

            public ngOnDestroy(): void {
              this._navbarDataSubscription.unsubscribe();
            }
// toolbarContent = [{
//               widget: 'dxButton',
//               location: 'before',
//               options: {
//                 icon: 'menu',
//                 onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
//               },
//             }];
}
