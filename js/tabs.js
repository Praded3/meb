let tabsItem = document.querySelectorAll(".tabs__item");
let tabsContent = document.querySelectorAll(".tabs__block");

for (let item of tabsItem) {
  item.addEventListener("click", function () {
    for (let element of tabsContent) {
      element.classList.add("hidden");
    }

    let content = document.querySelector("#" + item.dataset.tab);
    console.log(content);
    content.classList.remove("hidden");
  });
}

let tabsDiv = $(".tabs__item");

tabsDiv.on("click", function () {
  tabsDiv.removeClass("active");
  $(this).addClass("active");
});
