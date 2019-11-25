export class Education {
    constructor(
        public Degree: string,
        public Specialization: string,
        public CollegeOrSchool: string,
        public YearOfAdmission: number,
        public YearOfPassing: number,
        public Grade: string,
    ) { }
}

export class WorkExperience {
    constructor(
        public CompanyName: string,
        public Designation: string,
        public DateOfJoin: Date,
        public DateOfLeaving: Date,
        public YearsOfExperience: number
    ) { }
}

export class ProfileMaster {
    constructor(
        public Id: string,
        public FirstName: string,
        public MiddleName: string,
        public LastName: string,
        public Gender: string,
        public ContactNumber: number,
        public MaritalStatus: string,
        public DateOfBirth: Date,
        public Educations: Array<Education>,
        public Experience: Array<WorkExperience>
    ) { }
}
