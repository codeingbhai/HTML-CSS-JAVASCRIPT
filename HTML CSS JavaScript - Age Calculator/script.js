function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const result = document.getElementById("result");
  
    if (!birthdate) {
      result.textContent = "Please enter your birthdate.";
      return;
    }
  
    const birthDateObj = new Date(birthdate);
    console.log(birthDateObj);
    const today = new Date();
  
    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();
  
    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    result.textContent = `Your Age: ${years} Years, ${months} Months, and ${days} Days.`;
  }
  