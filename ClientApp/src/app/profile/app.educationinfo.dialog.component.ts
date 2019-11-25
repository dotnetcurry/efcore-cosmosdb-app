import { Component, Inject } from '@angular/core';
import { Education } from '../models/app.models';
import { Degrees, Grades, Specializations, AdmissionYear, PassingYear } from '../models/app.constants';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface EducationDialogData {
  educationInfo: Education;
}

@Component({
  selector: 'app-educationinfo-dialog-component',
  templateUrl: 'app.educationinfo.dialog.view.html'
})
export class EducationInfoDialogComponent {
  degrees = Degrees;
  specializations = Specializations;
  yearOfAdmission = AdmissionYear;
  yearOfPassing = PassingYear;
  grades = Grades;
  constructor(
    public dialogRef: MatDialogRef<EducationInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public educationData: EducationDialogData
  ) { }

    cancel(): void {
        this.educationData.educationInfo = new Education('', '', '', 0, 0, '');
    this.dialogRef.close();
  }
}
