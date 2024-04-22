export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesObj) => Object.keys(employeesObj).length,
  };
}
