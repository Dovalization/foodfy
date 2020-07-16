const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const recipeTitle = card.querySelector('h3').textContent;
        const recipeAuthor = card.querySelector('p').textContent;
        const recipeImg = card.querySelector('img').src;
        modalOverlay.querySelector('.recipe-title').textContent = recipeTitle;
        modalOverlay.querySelector('.recipe-author').textContent = recipeAuthor;
        modalOverlay.querySelector('img').src = recipeImg;
        modalOverlay.classList.add('active');

    })
}
