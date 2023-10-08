import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Nav buttons
  @ViewChild('aboutBtn') aboutBtn: ElementRef;
  @ViewChild('expBtn') expBtn: ElementRef;
  @ViewChild('skillBtn') skillBtn: ElementRef;
  @ViewChild('projectsBtn') projectsBtn: ElementRef;

  // content panels
  @ViewChild('aboutPanel') aboutPanel: ElementRef;
  @ViewChild('expPanel') expPanel: ElementRef;
  @ViewChild('skillsPanel') skillsPanel: ElementRef;
  @ViewChild('projectsPanel') projectsPanel: ElementRef;
  @ViewChild('aboutMe') aboutMe: ElementRef;

  // panel "X" buttons
  @ViewChild('aboutBackBtn') aboutBackBtn: ElementRef;
  @ViewChild('expBackBtn') expBackBtn: ElementRef;
  @ViewChild('skillsBackBtn') skillsBackBtn: ElementRef;
  @ViewChild('projectsBackBtn') projectsBackBtn: ElementRef;

  constructor(private backendService: BackendService) {

  }

  ngOnInit(): void {
    if (environment.production) {
      this.backendService.logRequest().subscribe();
    }
  }

  ngAfterViewInit() {
    let displayBlock: string = "block";


    // hide content sections
    this.aboutPanel.nativeElement.style.display = 'none';
    this.expPanel.nativeElement.style.display = 'none';
    this.skillsPanel.nativeElement.style.display = 'none';
    this.projectsPanel.nativeElement.style.display = 'none';

    // onClick listeners

    this.aboutBtn.nativeElement.onclick = () => {
      this.aboutMe.nativeElement.style.display = 'none';
      this.aboutPanel.nativeElement.style.display = displayBlock;
    }


    this.expBtn.nativeElement.onclick = () => {
      this.aboutMe.nativeElement.style.display = 'none';
      this.expPanel.nativeElement.style.display = displayBlock;
    }

    this.skillBtn.nativeElement.onclick = () => {
      this.aboutMe.nativeElement.style.display = 'none';
      this.skillsPanel.nativeElement.style.display = displayBlock;
    }

    this.projectsBtn.nativeElement.onclick = () => {
      this.aboutMe.nativeElement.style.display = 'none';
      this.projectsPanel.nativeElement.style.display = displayBlock;
    }


    this.aboutBackBtn.nativeElement.onclick = () => {
      this.aboutPanel.nativeElement.style.display = 'none';
      this.aboutMe.nativeElement.style.display = 'flex';

    }

    this.expBackBtn.nativeElement.onclick = () => {
      this.expPanel.nativeElement.style.display = 'none';
      this.aboutMe.nativeElement.style.display = 'flex';

    }

    this.skillsBackBtn.nativeElement.onclick = () => {
      this.skillsPanel.nativeElement.style.display = 'none';
      this.aboutMe.nativeElement.style.display = 'flex';

    }

    this.projectsBackBtn.nativeElement.onclick = () => {
      this.projectsPanel.nativeElement.style.display = 'none';
      this.aboutMe.nativeElement.style.display = 'flex';

    }
    // end onClick

  }
}
