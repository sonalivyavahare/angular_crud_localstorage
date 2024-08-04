
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-emploee',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './add-emploee.component.html',
  styleUrl: './add-emploee.component.css'
})
export class AddEmploeeComponent implements OnInit {
    
    sucessMsg:string = "";
    constructor(private fb: FormBuilder){}
    // addEmployeeForm:FormGroup = new FormGroup({
    //     name:new FormControl(''),
    //     email:new FormControl(''),
    // });

    ngOnInit(){
        const employeeDetails = localStorage.getItem("employees");
        if(employeeDetails != null){
            const employees = JSON.parse(employeeDetails);
            console.log(employees);
        }
    }

    addEmployeeForm:FormGroup = this.fb.group({
        name:[''],
        email:[''],
        contact:[''],
        designation:[''],
        salary:['']
    });
    
    create(form:FormGroup){
        const employeeDetails = form.value;
        const emp = [];

        const employee = localStorage.getItem("employees");
        if(employee != undefined){
            const empArray = JSON.parse(employee);
            if(employeeDetails != ''){
                employeeDetails.id = empArray.length + 1;
                empArray.push(employeeDetails);
                localStorage.setItem("employees", JSON.stringify(empArray))
                this.sucessMsg = "Employee added sucessfully!";
            }

        }else{
            if(employeeDetails != ''){
                employeeDetails.id = 1;
                emp.push(employeeDetails);
                localStorage.setItem("employees", JSON.stringify(emp))
                this.sucessMsg = "Employee added sucessfully!";
            }
        }
    }
}

