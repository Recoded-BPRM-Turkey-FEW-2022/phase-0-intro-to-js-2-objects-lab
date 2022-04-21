const employee = {
    name: "MaX",
    streetAddress: "5 Main Street",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Alternate using ES6 Spread operators:
    // return { ...driver, ...{ [key]: value } }
    return Object.assign({}, employee, { [key]: value });
  }

  //console.log(updateEmployeeWithKeyAndValue(employee, 'name2', 'dooo'))

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }
  function deleteFromEmployeeByKey(driver, key) {
    // Alternate using ES6 Spread operators:
    // const newObj = { ...driver }
    const newObj = Object.assign({}, driver);
  
    delete newObj[key];
  
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(driver, key) {
    delete driver[key];
  
    return driver;
  }