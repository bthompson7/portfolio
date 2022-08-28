import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() {
    AOS.init({ once: true });
  }

  ngOnInit(): void {
  }

}
