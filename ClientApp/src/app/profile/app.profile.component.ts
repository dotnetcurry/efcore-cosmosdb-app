import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Education, WorkExperience, ProfileMaster } from '../models/app.models';
import { EducationInfoDialogComponent } from './app.educationinfo.dialog.component';

import {
  Genders,
  Experiences, MaritalStatusInfo
} from '../models/app.constants';
import { WorkExperienceDialogComponent } from './app.workexperience.dialog.component';
import { ProfileService } from '../services/app.profile.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: 'app.profile.component.view.html'
})
export class ProfileComponent implements OnInit {
  genders = Genders;
  maritalStatusInfo = MaritalStatusInfo;

  education: Education;
    educationDetails: Array<Education>;
  educationTableHeaders: Array<string>;

  workexperience: WorkExperience;
  workexperienceDetails: Array<WorkExperience>;
  workexperienceTableHeaders: Array<string>;


  profile: ProfileMaster;


  constructor(public dialog: MatDialog, private serv: ProfileService) {
    this.education = new Education('', '', '', 0, 0, '');
    this.educationDetails = new Array<Education>();
    this.educationTableHeaders = new Array<string>();
    this.workexperience = new WorkExperience('', '', new Date(), new Date(), 0);
    this.workexperienceDetails = new Array<WorkExperience>();
    this.workexperienceTableHeaders = new Array<string>();
    this.profile = new ProfileMaster('', '', '', '', '',0, '', new Date(), [], []);
  }
  openEducationDialog(): void {
    this.education = new Education('', '', '', 0, 0, '');
    const educationDialogRef = this.dialog.open(EducationInfoDialogComponent, {
      width: '600px',
      data: { educationInfo: this.education }
    });

    educationDialogRef.afterClosed().subscribe(res => {
      if (res !== undefined) {
        console.log(`In If ${JSON.stringify(res)}`);
          this.educationDetails.push(res);
          console.log(JSON.stringify(this.educationDetails));
        this.education = new Education('', '', '', 0, 0, '');
      } else {
        console.log('In Else');
        this.education = new Education('', '', '', 0, 0, '');
      }
    });
  }
  openWorkExperienceDialog(): void {
    this.workexperience = new WorkExperience('', '', new Date(), new Date(), 0);
    const workExperienceDialogRef = this.dialog.open(WorkExperienceDialogComponent, {
      width: '600px',
      data: { experienceInfo: this.workexperience }
    });

    workExperienceDialogRef.afterClosed().subscribe(res => {
      if (res !== undefined) {
        console.log(`In If ${JSON.stringify(res)}`);
        this.workexperienceDetails.push(res);
        console.log(JSON.stringify(this.workexperienceDetails));
        this.workexperience = new WorkExperience('', '', new Date(), new Date(), 0);
      } else {
        console.log('In Else');
          this.workexperience = new WorkExperience('', '', new Date(), new Date(), 0);
      }
    });
  }

  ngOnInit(): void {
    for (const h in this.education) {
      this.educationTableHeaders.push(h);
    }

    for (const h in this.workexperience) {
      this.workexperienceTableHeaders.push(h);
    }
  }

    saveProfile(): void {
        this.profile.Educations = this.educationDetails;
        this.profile.Experience = this.workexperienceDetails;
    this.serv.postProfile(this.profile).subscribe(response => {
        console.log(JSON.stringify(response));
    }, (error) => {
            console.log(`${error.status} and ${error.message} ${error.statusText}`);
    });
  }
}
