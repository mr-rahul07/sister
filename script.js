const febHolidays = [
    "Dear Akka,",
    "First of all, Your are the unblood Sister❤️",
    "Happiness is having a best friend like you",
    "Sisters make the best of friends",
    "Sisterhood: a lifelong promise.",
    "Sisterhood is powerful",
    "A sister is a forever friend",
    "Sisters by heart, soulmates by soul",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive.",
    "a sweet person who always tries to help out others",
    "She is a very caring person. 🥰",
    "I'm so grateful I met you",
    "It was unexcepted meet",
    "promise haa neega en school senior theriyathu",
    " Starting la formalty ku pesitu irupom",
    "Aprm naan akka solli aramicha aprm neega thambi sonniga",
    "naan unga kitta first time pesunathu Twolip shop la ",
    "sometimes late replies kudupiga",
    "innum namma sanda podala",
    "but sometimes ungala irritate pannirukan",
    "suppose ungala hurt pannirutha",
    "I AM SORRY",
    "but next time lam ungala hurt panna matan",
    "naan romba feel pannum pothu neega heal pannirukiga",
    "Thank You So Much",
    "Namma nerla unga kitta Avalo va pesunathu illa",
    "But namma chat neraya time spend pannirukom",
    "ungaluku help na thambi first la irupan",
    "Life full ha itha relationship irukanum",
    "WILL YOU BE MY AKKA?"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  