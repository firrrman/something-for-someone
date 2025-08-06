onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = "HAPPY BIRTHDAY TO YOU".split("");
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 200); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 500);
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const modal = document.querySelector(".modal");
    modal.classList.add("show");
  }, 15000); // 10000 ms = 10 detik
});
