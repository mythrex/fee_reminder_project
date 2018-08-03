var json = [
  {
    name: "Shivam",
    fee: 1045,
    date: "27/06/1996"
  },
  {
    name: "Bss",
    fee: 1045,
    date: "27/06/1396"
  }
];
function compileTemplate(name, fee, date) {
  return `<section class="fee-reminder">
      <h1>Maharaja Academy</h1>
      <h2>Fee Reminder</h2>
      <p>This is to remind you that fee of your ward <span id="name">${name}</span> is due.
        The amount to be submitted is Rs.<span id="fee">${fee}</span>
      </p>
      <p>Submit the fee before <span id="date">${date}</span>.</p>
      <blockquote>
        Late fee is liable for fine.
      </blockquote>

      <p>Regards,</p>
      <p><b>Maharaja Academy</b></p>
  </section>`;
}
var feeContainer = $("#fee-container");
feeContainer.empty();
for (var student of json) {
  var str = compileTemplate(student.name, student.fee, student.date);
  feeContainer.append(str);
}
