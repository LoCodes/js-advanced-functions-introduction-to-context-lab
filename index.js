// Your code here

// The payroll system
// populates a record from an Array
//   ✓ has a function called createEmployeeRecord
//   createEmployeeRecord
//     ✓ populates a firstName field from the 0th element
//     ✓ populates a familyName field from the 1th element
//     ✓ populates a title field from the 2th element
//     ✓ populates a payPerHour field from the 3th element
//     ✓ initializes a field, timeInEvents, to hold an empty Array
//     ✓ initializes a field, timeOutEvents, to hold an empty Array

function createEmployeeRecord(testEmployee) {  // provided by test, IF NOT
                                              // create const array here 
    return {                                  
        firstName: testEmployee[0],
        familyName: testEmployee[1],
        title: testEmployee[2],
        payPerHour: testEmployee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    
}

// process an Array of Arrays into an Array of employee records
// ✓ has a function called createEmployeeRecords
// createEmployeeRecords
//   ✓ creates two records
//   ✓ correctly assigns the first names
//   ✓ creates more than 2 records

function createEmployeeRecords(employeeRecords){   //provided array
    return employeeRecords.map(employee => createEmployeeRecord(employee))

}



// it adds a timeIn event Object to an employee's record of timeInEvents when 
// provided an employee record and Date/Time String and returns the updated record
//       1) has a function called createTimeInEvent
//       createTimeInEvent
//         2) creates the correct type
//         3) extracts the correct date
//         4) extracts the correct hour

function createTimeInEvent(employeeRecord, dateStamp){
    const objTime = {
        type : 'TimeIn',
        date : str.split(' ')[0],
        hour : parseInt(str.split(' ')[1])
      
    }
    employeeRecord.timeInEvents.push(objTime)
    return employeeRecord

}

function findEmployeeByFirstName (empRecords, nameStr) {
    return empRecords.find(e => e.firstName === nameStr)
  }
  