import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateContentComponent } from './components/certificate-content/certificate-content.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ProjectContentComponent } from './components/project-content/project-content.component';
import { ExperienceContentComponent } from './components/experience-content/experience-content.component';
const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'project', component: ProjectContentComponent },
  { path: 'certificates', component: CertificateContentComponent },
   { path: 'experience', component: ExperienceContentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
