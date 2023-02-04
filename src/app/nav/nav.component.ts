import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('siteNavMobile') siteNavMobile: ElementRef;
  @ViewChild('mobileNavBtn') mobileNavButton: ElementRef;
  @ViewChild('siteNavDesktop') siteNavDesktop: ElementRef;
  innerWidth;
  mobileSize = 810;

  constructor(private renderer: Renderer2) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.renderNavBar();
  }

  renderNavBar() {
    let mobileNavButtonIcon = this.mobileNavButton.nativeElement.children[0];

    // mobile
    if (this.innerWidth <= this.mobileSize) {
      this.mobileNavButton.nativeElement.style.display = 'inline-block';
      this.siteNavDesktop.nativeElement.style.display = 'none';
      this.menuIconOnClick();

      // desktop
    } else {
      this.mobileNavButton.nativeElement.style.display = 'none';
      this.siteNavDesktop.nativeElement.style.display = 'flex';
      this.siteNavMobile.nativeElement.style.display = 'none';
      this.renderer.removeClass(mobileNavButtonIcon, "fa-times");
      this.renderer.addClass(mobileNavButtonIcon, "fa-solid");
      this.renderer.addClass(mobileNavButtonIcon, "fa-bars");

    }
  }

  menuIconOnClick() {
    let mobileNavButtonIcon = this.mobileNavButton.nativeElement.children[0];

    this.mobileNavButton.nativeElement.onclick = () => {
      let siteNavMobileBtn = this.siteNavMobile.nativeElement.style.display;
      if (siteNavMobileBtn !== 'flex') {

        // change icon css class
        this.renderer.removeClass(mobileNavButtonIcon, "fa-solid");
        this.renderer.removeClass(mobileNavButtonIcon, "fa-bars");
        this.renderer.addClass(mobileNavButtonIcon, "fa-times");

        // menu css
        this.siteNavMobile.nativeElement.style.display = 'flex';
        this.siteNavMobile.nativeElement.style.animation = 'fadein 0.5s';
        this.siteNavMobile.nativeElement.style.justifyContent = 'center';
      } else {
        this.siteNavMobile.nativeElement.style.display = 'none';

        // change icon class
        this.renderer.removeClass(mobileNavButtonIcon, "fa-times");
        this.renderer.addClass(mobileNavButtonIcon, "fa-solid");
        this.renderer.addClass(mobileNavButtonIcon, "fa-bars");
      }
    }
  }

}
