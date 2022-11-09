export class Employee {
    employeeId:number;
    employeeProfile:string;
    FirstName:string;
    LastName:string;
    PreferredName:string;
    Job:string;
    office:string;
    Email:string;
    Department:string;
    PhoneNumber:Number;
    SkypeId:string;

    constructor(employeeId:number,employeeProfile:string,FirstName:string,LastName:string,PreferredName:string,Job:string,office:string,Email:string,Department:string,PhoneNumber:Number,SkypeId:string){
        this.employeeId=employeeId,
        this.employeeProfile=employeeProfile
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.PreferredName=PreferredName;
        this.Job=Job;
        this.Email=Email
        this.office=office
        this.Department=Department;
        this.PhoneNumber=PhoneNumber;
        this.SkypeId=SkypeId
    }
}
