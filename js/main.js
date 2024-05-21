const buttonFavorite = document.querySelectorAll('.button-favorite');
const inputSearch = document.getElementById('search');
const postsList = document.querySelectorAll('#blog-posts > article');
buttonFavorite.forEach((button)=>{
  button.addEventListener('click', ()=>{
    button.classList.toggle('active')
  });
});

inputSearch.addEventListener('input', (e)=>{
  
})
