using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace ProfileAppNet30.Models
{
    public class Education
    {
        [Required(ErrorMessage = "Degree is required")]
        public string Degree { get; set; }
        [Required(ErrorMessage = "Specialization is required")]
        public string Specialization { get; set; }
        [Required(ErrorMessage = "College Or School is required")]
        public string CollegeOrSchool { get; set; }
        [Required(ErrorMessage = "Year Of Admission is required")]
        public int YearOfAdmission { get; set; }
        [Required(ErrorMessage = "Year Of Passing is required")]
        public int YearOfPassing { get; set; }
        [Required(ErrorMessage = "Grade is required")]
        public string Grade { get; set; }
        
    }
    public class WorkExperience
    {
        public string CompanyName { get; set; }
        public string Designation { get; set; }
        public DateTime DateOfJoin { get; set; }
        public DateTime DateOfLeaving { get; set; }
        public int YearsOfExperience { get; set; }
    }

    public class ProfileMaster
    {
        public Guid Id { get; set; }
        [Required(ErrorMessage ="FirstName is required")]
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        [Required(ErrorMessage = "LastName is required")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Gender is required")]
        public char Gender { get; set; }
        [Required(ErrorMessage = "ContactNumber is required")]
        public int ContactNumber { get; set; }
        [Required(ErrorMessage = "MaritalStatus is required")]
        public string MaritalStatus { get; set; }
        [Required(ErrorMessage = "DateOfBirth is required")]
        public DateTime DateOfBirth { get; set; }
        public List<Education> Educations { get; set; }
        public List<WorkExperience> Experience { get; set; }
    }
}
