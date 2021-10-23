export class D {
    protected employees: string[];
    static createEmployees(name: string) {
        return { name: name }
    }
    constructor(private name: string, private age: string) {
    }
    describ() {
        console.log(`Department: (${this.age}) ` + this.name)
    }
    addEmployee(employees: string) {
        this.employees.push(employees);
    }
    printEmployee() {
        console.log(this.addEmployee.length)
        console.log(this.addEmployee)
    }
}
class ItDepartment extends D {
    constructor(age: string, private admins: string[]) {
        super(age, 'IT');
        this.admins = admins
    }
}
class AcountingDepartment extends D {
    private lastReport: string;
    get RecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('noon')
    }
    set ReactReports(value: string) {
        if (!value) {
            throw new Error('null')
        }
        this.addReport(value)
    }
    constructor(age: string, private reports: string[]) {
        super(age, 'IT');
        this.lastReport = reports[0]
    }
    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }
    printReports() {
        console.log(this.reports)
    }
    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name)
    }
}


const employee1 = D.createEmployees("Max")
console.log(employee1)

const result = new ItDepartment("12",  ["mama"])
console.log(result)
result.describ()

const report = new AcountingDepartment("23" , [])
// report.RecentReports = 'rererere';
report.addReport('someting')
report.addReport('someting')
console.log(report.RecentReport)
report.printReports()

report.addEmployee("Max")
// report.addEmployee("Manu")
// report.printEmployee()

