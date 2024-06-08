// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = group.querySelector("i");

    //Toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    /* Toggle visibility of body */
    groupBody.classList.toggle("open");

    /* Close other open faq bodies */
    const otherGroups = faqContainer.querySelector(".faq-group");

    otherGroups.forEach((otherGroups) => {
      if (otherGroups != group) {
        const otherGroupBody = otherGroups.querySelector("faq-group-body");
        const otherIcon = otherGroups.querySelector("faq-group-header");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.remove("fa-plus");
      }
    });
  });
});

//Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
