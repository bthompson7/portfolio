import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() {
    AOS.init({ once: true });
  }

  ngOnInit(): void {
  }

}
