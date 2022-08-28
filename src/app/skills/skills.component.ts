import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() {
    AOS.init({ once: true });
  }

  ngOnInit(): void {
  }

}
