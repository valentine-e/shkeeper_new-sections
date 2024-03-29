
const accordionBtns = document.querySelectorAll(".accordion-button-js");
accordionBtns.forEach(btn => {
    btn.addEventListener("click", onAccordionButtonClick)
}
);

function onAccordionButtonClick(event) {
    if (event.currentTarget.classList.contains("accordion__btn--active")) {
        closeAccordionElement(event.currentTarget);
        return
    }
    // accordionBtns.forEach(el => closeAccordionElement(el));
    openAccordionElement(event.currentTarget)
}
function openAccordionElement(btn) {
    const contentElement = btn.nextElementSibling;
    contentElement.style.maxHeight = contentElement.scrollHeight + "px";
    const accordionArrowActive = btn.querySelector(".menu-arrow");
    accordionArrowActive.classList.add("menu-arrow--up");
    btn.classList.add("accordion__btn--active")
}
function closeAccordionElement(btn) {
    const contentElement = btn.nextElementSibling;
    contentElement.style.maxHeight = 0 + "px";
    const accordionArrowActive = btn.querySelector(".menu-arrow");
    accordionArrowActive.classList.remove("menu-arrow--up");
    btn.classList.remove("accordion__btn--active")
}

// Modal

const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    hideHeaderMenu: document.querySelector(".header"),
};

refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.hideHeaderMenu.classList.toggle("is-hidden");
}

refs.openModalBtn.forEach((el) => {
    el.addEventListener("click", () => {
        toggleModal();
    });
});


// FadeIn

let elementsArray = document.querySelectorAll(".fade-in");

window.addEventListener('scroll', fadeIn);
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 75;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();