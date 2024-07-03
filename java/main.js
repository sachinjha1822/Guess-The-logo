var submit_btn = document.querySelector(".submit-btn"),
  answer_input = document.querySelector(".answer"),
  hinl_place = document.querySelector(".hinl-place"),
  qustion = document.querySelector(".qustion"),
  alert_box = document.querySelector(".alert-box"),
  skip = document.querySelector(".skip"),
  reveal = document.querySelector(".reveal"),
  qustion_number = "",
  title_data = "";

window.addEventListener("load", () => {
  getQuestion();
});

skip.addEventListener("click", () => {
  getQuestion();
});

reveal.addEventListener("click", () => {
  show_alert("Better Luck Next Time", "red");
  qustion.style = "color: #39ff14;";
  qustion.innerHTML = "The answer is : " + title_data;
});

submit_btn.addEventListener("click", () => {
  var set_answer = answer_input.value;
  var final_answer = set_answer.toLowerCase();
  if (final_answer == title_data) {
    show_alert("Wow! You guessed it", "#39ff14");
    qustion.innerHTML = "Loading new question ...";
    qustion.style = "color: blue;";
    setTimeout(getQuestion, 2500);
  } else {
    show_alert("Ops! Wrong Guess", "red");
  }
});

function getQuestion() {
  (qustion_number = Math.floor(Math.random() * qustion_data_base.length)),
    (title_data = qustion_data_base[qustion_number].title);
  hinl_place.innerHTML = `<i class="fa-brands fa-${title_data}"></i>`;
  qustion.innerHTML = qustion_data_base[qustion_number].hint_qustion;
  qustion.style = "color: black;";
  alert_box.style = "display: none;";
  answer_input.value = "";
}
function show_alert(alert_title, bg_color) {
  alert_box.style = "display: block; background:" + bg_color;
  alert_box.innerHTML = alert_title;
}
