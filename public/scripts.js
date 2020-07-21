const cards = document.querySelectorAll('.card');
const content = document.querySelectorAll('.recipe-wrapper .content');
const buttons = document.querySelectorAll('.button');

for (let card of cards) {
    card.addEventListener("click", function(){
    let recipeIndex = card.getAttribute("id")
    console.log(recipeIndex);
    window.location.href = `/recipes/${recipeIndex}`

    })
}

for (let [i,button] of buttons.entries()) {
    button.addEventListener("click", () => {
        if(content[i].classList.contains("show")){
            content[i].classList.remove('show')
            content[i].classList.add('hide')
            button.innerHTML= "Mostrar"
            
        } else {
            content[i].classList.add('show')
            content[i].classList.remove('hide')
            button.innerHTML= "Esconder"
        }
    })  
}
