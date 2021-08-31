const renderErrorMessages = (errors) => {
    const errorDiv = document.getElementById('error-msg-div');
  
    const content = errors.map(error => `<li>${error}</li>`).join('');
    
  
    errorDiv.innerHTML = content;
  }
  
  const renderTableRows = (title, option1, option2, option3, option4, correct) => {
    const tableDiv = document.getElementById('table-body');
    
    const content = `<tr>
      <td>${title}</td>
      <td>${option1}</td>
      <td>${option2}</td>
      <td>${option3}</td>
      <td>${option4}</td>
      <td>${correct}</td>
      <td><button class="btn btn-primary btn-sm" type="button" onClick="removeRow(this)">Remove</button></td>
    </tr>`;
    
    tableDiv.innerHTML += content; 
  }
  const removeRow = (td)=>{
   // alert(names);
    //document.getElementById("table-body").deleteRow(names);
    row=td.parentElement.parentElement;
    document.getElementById("table1").deleteRow(row.rowIndex);
    
  }
    
  
  const submitForm = () => {
    const title = document.getElementById('title'),
          option1 = document.getElementById('option1'),
          option2 = document.getElementById('option2'),
          option3 = document.getElementById('option3');
          option4 = document.getElementById('option4');
          correct = document.getElementById('correct');
  
    let errorMessages = [];
    if (!title.value) {
      errorMessages.push('Please enter title');
    }
    if (!option1.value) {
      errorMessages.push('Please enter option1');
    }
    if (!option2.value) {
        errorMessages.push('Please enter option2');
      }
    if (!option3.value) {
        errorMessages.push('Please enter option3');
      }
    if (!option4.value) {
        errorMessages.push('Please enter option4');
      }
    if (!correct.value) {
        errorMessages.push('Please enter option4');
      }
  
    if (errorMessages.length > 0) {
      renderErrorMessages(errorMessages);
      return false;
    } else {
      document.getElementById('error-msg-div').innerHTML = "";
    }
  
    // Table rows rendering
    renderTableRows(title.value, option1.value, option2.value, option3.value, option4.value, correct.value);
  
    title.value = '';
    option1.value = '';
    option2.value = '';
     option3.value= ''; 
     option4.value = '';
     correct.value= '';
  }