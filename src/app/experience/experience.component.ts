import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({ once: true });
  }

}
