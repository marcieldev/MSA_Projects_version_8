const cardsContainers = document.querySelectorAll(".cards");

cardsContainers.forEach((cards) => {

    let isDown = false;
    let startX;
    let scrollLeft;

    cards.addEventListener("mousedown", (event) => {

        isDown = true;

        cards.classList.add("is-dragging");

        startX = event.pageX - cards.offsetLeft;

        scrollLeft = cards.scrollLeft;

    });

    cards.addEventListener("mouseleave", () => {

        isDown = false;

        cards.classList.remove("is-dragging");

    });

    cards.addEventListener("mouseup", () => {

        isDown = false;

        cards.classList.remove("is-dragging");

    });

    cards.addEventListener("mousemove", (event) => {

        if (!isDown) return;

        event.preventDefault();

        const x = event.pageX - cards.offsetLeft;

        const distance = (x - startX) * 1.5;

        cards.scrollLeft = scrollLeft - distance;

    });

});