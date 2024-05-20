const buttonFavorite = document.querySelectorAll('.button-favorite');

buttonFavorite.forEach((button)=>{
  button.addEventListener('click', ()=>{
    button.classList.toggle('active')
  })
})