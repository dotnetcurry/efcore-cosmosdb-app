"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Education = /** @class */ (function () {
    function Education(Degree, Specialization, CollegeOrSchool, YearOfAdmission, YearOfPassing, Grade) {
        this.Degree = Degree;
        this.Specialization = Specialization;
        this.CollegeOrSchool = CollegeOrSchool;
        this.YearOfAdmission = YearOfAdmission;
        this.YearOfPassing = YearOfPassing;
        this.Grade = Grade;
    }
    return Education;
}());
exports.Education = Education;
var WorkExperience = /** @class */ (function () {
    function WorkExperience(CompanyName, Designation, DateOfJoin, DateOfLeaving, YearsOfExperience) {
        this.CompanyName = CompanyName;
        this.Designation = Designation;
        this.DateOfJoin = DateOfJoin;
        this.DateOfLeaving = DateOfLeaving;
        this.YearsOfExperience = YearsOfExperience;
    }
    return WorkExperience;
}());
exports.WorkExperience = WorkExperience;
var ProfileMaster = /** @class */ (function () {
    function ProfileMaster(Id, FirstName, MiddleName, LastName, Gender, ContactNumber, MaritalStatus, DateOfBirth, Educations, Experience) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.MiddleName = MiddleName;
        this.LastName = LastName;
        this.Gender = Gender;
        this.ContactNumber = ContactNumber;
        this.MaritalStatus = MaritalStatus;
        this.DateOfBirth = DateOfBirth;
        this.Educations = Educations;
        this.Experience = Experience;
    }
    return ProfileMaster;
}());
exports.ProfileMaster = ProfileMaster;
//# sourceMappingURL=app.models.js.map