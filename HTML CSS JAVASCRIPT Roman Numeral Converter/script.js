function convert(){
    const number = document.getElementById('number').value;
    const romanOutput = document.getElementById('roman-output');
    
    function toRoman(num) {
      if (num < 1 || num > 3999) return "Invalid Input";
      
      const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
      ];
  
      let result = "";
      for (const [roman, value] of romanNumerals) {
        while (num >= value) {
          result += roman;
          num -= value;
        }
      }
      return result;
    }
    romanOutput.textContent = toRoman(parseInt(number));
}