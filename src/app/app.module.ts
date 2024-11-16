import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BackendService } from './service/backend.service';
import { AboutComponent } from './about/about.component';

@NgModule({ declarations: [
        HomeComponent,
        SkillsComponent,
        ExperienceComponent,
        ProjectsComponent,
        AboutComponent
    ],
    bootstrap: [HomeComponent], imports: [BrowserModule], providers: [BackendService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
