import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
/** @title Responsive sidenav */

@Component({
  selector: 'journal-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: []
})
export class NavBarComponent implements OnInit{
  @Input() public titleHeader!: string;
  @Input() public disablePrevPageBtn!: boolean;
  @Input() public showSideBarBtn: boolean = true;
  @Output() public toggleBkgNavbar: EventEmitter<void> = new EventEmitter();
  showFiller = false;

  constructor(private _location: Location,
    private _router: Router) { }

    ngOnInit() {}

public toggleNavbar(){

  this.toggleBkgNavbar.emit();

}

public redirectToPreviousPage():void{
  this._location.back();
}

public home(): void {
  this._router.navigate(['']);
}
}
