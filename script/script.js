const cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("click", function () {
        console.log(card.classList);

        if (card.classList.contains("active")) {
            card.classList.remove("active");
            card.classList.add("excluir")
        } else if (card.classList.contains("excluir")) {
            card.classList.remove("excluir")
        } else {
            card.classList.add("active");
        }
    })
})
