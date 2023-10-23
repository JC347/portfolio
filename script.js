function activateItem(item) {
  // Remove 'active' class from all items
  let items = document.querySelectorAll("li.navigation");
  items.forEach((item) => item.classList.remove("active"));

  // Add 'active' class to clicked item
  item.classList.add("active");
}
function resetLine(item) {
  item.classList.remove("active");
}

document.querySelectorAll('a[href=""]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function activateItems(scrollPosition) {
  let targetSections = [
    { id: "about", scrollStart: 0, scrollEnd: 300 }, // Define the scroll range for each section
    { id: "experience", scrollStart: 301, scrollEnd: 1200 },
    { id: "projects", scrollStart: 1400, scrollEnd: 3000 },
  ];
  targetSections.forEach((section) => {
    if (
      scrollPosition >= section.scrollStart &&
      scrollPosition <= section.scrollEnd
    ) {
      document.querySelectorAll("li").forEach((item) => {
        if (item.getAttribute("data-target") === section.id) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  });
}

// Event listener for scroll events
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  activateItems(scrollPosition);
});
