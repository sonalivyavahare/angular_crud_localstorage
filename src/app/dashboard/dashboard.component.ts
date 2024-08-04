import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AddEmploeeComponent } from '../add-emploee/add-emploee.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, AddEmploeeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{
   
    employees:any = [];
    ngOnInit(): void {
        const employeeDetails = localStorage.getItem("employees");
        if(employeeDetails != null){
           this.employees = JSON.parse(employeeDetails);
        }
    }

    delete(id:any){
        alert(id);
       this.employees = localStorage.getItem("employees");
       if(this.employees != null){
        this.employees = JSON.parse(this.employees)
        const isFound = this.employees.findIndex((emp: any)=>emp.id == id)
        if(isFound != undefined){
            this.employees.splice(isFound, 1)
            localStorage.setItem("employees", JSON.stringify( this.employees));
        }
       }
    }
}
