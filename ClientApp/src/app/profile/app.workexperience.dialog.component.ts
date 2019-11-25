import { Component, Inject } from '@angular/core';
import { WorkExperience } from '../models/app.models';
import { Experiences } from '../models/app.constants';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface WorkExperienceDialogData {
    experienceInfo: WorkExperience;
}


@Component({
    selector: 'app-workexperience-dialog',
    templateUrl: 'app.workexperience.dialog.view.html'
})
export class WorkExperienceDialogComponent {
    experiences = Experiences;
    constructor(public dialogRef: MatDialogRef<WorkExperienceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public workexperienceData: WorkExperienceDialogData) {
        this.workexperienceData.experienceInfo = new WorkExperience('', '', new Date(), new Date(), 0);
    }
  
    cancel(): void {
        this.workexperienceData.experienceInfo = new WorkExperience('', '', new Date(), new Date(), 0);
        this.dialogRef.close();
    }

}

