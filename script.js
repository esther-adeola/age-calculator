
function calculateAge(date) {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const now = new Date();
  var birthDate = new Date(year, month - 1, day);
  
  const diff = Math.abs(now - birthDate);
 
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
 const currentMonth = now.getMonth() + 1
 console.log(currentMonth)

  const months = Math.abs(currentMonth - month);

const currentDay = now.getDay() + 1
  const days = Math.abs(currentDay - day);

  document.getElementById("days").innerHTML = days;
  document.getElementById("months").innerHTML = months;
  document.getElementById("years").innerHTML = years;
}

// var picker = new Pikaday({
//   field: document.getElementById('birth_date'),
//   yearRange: [1900, 2020],
//   onSelect: function (date) {
//     let age = calculateAge(date);
//     document.getElementById('age').innerHTML = "age: " + age;
//   }
// });