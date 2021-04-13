'use strict';

// random integer function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
let totalSalary =0;
// Constructor Function
function Employees (name,email,department,salary){
  this.name= name;
  this.email=email;
  this.department=department;
  this.salary = salary;
  Employees.all.push(this);

}
Employees.all =[];

// // proto type function for render data in table
let tableEl= document.getElementById ('tableSection');
function tableHeader(){
  let headerRow = document.createElement('tr');
  tableEl.appendChild(headerRow);
  let th1 = document.createElement('th');
  headerRow.appendChild(th1);
  th1.textContent ='Name';
  let th2 = document.createElement('th');
  headerRow.appendChild(th2);
  th2.textContent ='Email';
  let th3 = document.createElement('th');
  headerRow.appendChild(th3);
  th3.textContent ='Department';
  let th4 = document.createElement('th');
  headerRow.appendChild(th4);
  th4.textContent ='Salary';

}
tableHeader();
Employees.prototype.render = function (){
  let employeeRow = document.createElement('tr');
  tableEl.appendChild(employeeRow);
  let dataEl1= document.createElement('td');
  employeeRow.appendChild(dataEl1);
  dataEl1.textContent = this.name;
  let dataEl2= document.createElement('td');
  employeeRow.appendChild(dataEl2);
  dataEl2.textContent = this.email;
  let dataEl3= document.createElement('td');
  employeeRow.appendChild(dataEl3);
  dataEl3.textContent = this.department;
  let dataEl4= document.createElement('td');
  employeeRow.appendChild(dataEl4);
  dataEl4.textContent = this.salary;
  let total= document.createElement('p');
  tableEl.appendChild(total);
  total.textContent = totalSalary;

};

// save to local storage function
function setToLocalStorage(){
  localStorage.setItem('employees',JSON.stringify (Employees.all));
}
// get from local storage
function getFromLocalStorage(){
  let data=localStorage.getItem('employees');
  if (data !== null){
    Employees.all = JSON.parse(data);
  }
}

// get the data from the form
let formData=document.getElementById('formSection');

formData.addEventListener('submit',saveData);
function saveData (event){
  event.preventDefault();
  let employeeName = event.target.name.value;
  let employeeEmail=event.target.email.value;
  let employeeDepartment = event.target.department.value;
  let employeeSalary = getRndInteger (100,500);
  totalSalary = totalSalary+employeeSalary;

  let newEmployee = new Employees (employeeName,employeeEmail,employeeDepartment,employeeSalary);
  newEmployee.render();
  formData.reset();
  setToLocalStorage();
}

getFromLocalStorage();
