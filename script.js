const playersButtons = document.querySelectorAll(".player .btn");
const selected = document.querySelector(".selected");
const calculateTotalPlayerPriceBtn = document.querySelector(".calculate-total-player-price");
const caluclateTotalBtn = document.querySelector(".calculate-total");
let totalPlayerPrice;



function selectPlayer() {
    if (selected.children.length < 5) {
        const playerText = this.parentNode;
        const playerTitle = playerText.querySelector(".player__title").innerText;
        const listItem = document.createElement("li");
        listItem.classList.add("selected__item");
        listItem.textContent = playerTitle;
        selected.appendChild(listItem);

        // disable the button
        this.setAttribute("disabled", true);
    } else {
        alert("You got your penta!");
    }
}

calculateTotalPlayerPriceBtn.addEventListener("click", function () {
    const perPlayerPriceInput = document.querySelector(".per-player-price");
    const perPlayerPrice = parseInt(perPlayerPriceInput.value);
    const totalPlayerPriceContainer = document.querySelector(".total-player-price");
    if (!isNaN(perPlayerPrice)) {
        totalPlayerPrice = selected.children.length * perPlayerPrice;
        totalPlayerPriceContainer.textContent = totalPlayerPrice;
    } else {
        alert("Enter your price per player!");
    }
});

caluclateTotalBtn.addEventListener("click", function() {
    const coachExpenseInput = document.querySelector(".coach-expense");
    const managerExpenseInput = document.querySelector(".manager-expense");
    const coachExpense = parseInt(coachExpenseInput.value);
    const managerExpense = parseInt(managerExpenseInput.value);
    const totalContainer = document.querySelector(".total");
    if (!isNaN(coachExpense) && !isNaN(managerExpense)) {
        totalContainer.innerText = coachExpense + managerExpense + totalPlayerPrice;
    } else {
        alert("Provide the expenses!");
    }
})




for (let playerButton of playersButtons) {
    playerButton.onclick = selectPlayer;
}