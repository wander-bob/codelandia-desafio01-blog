const buttonFavorite = document.querySelectorAll('.button-favorite');
const inputSearch = document.getElementById('search');
const posts = document.querySelectorAll('#blog-posts > article');
buttonFavorite.forEach((button)=>{
  button.addEventListener('click', ()=>{
    button.classList.toggle('active')
  });
});

inputSearch.addEventListener('input', filterPosts)
function filterPosts(){
  if(inputSearch.value != ''){
    for(let post of posts){
      let title = post.querySelector('h2');
      title = title.textContent.toLocaleLowerCase();
      let filterTitle = inputSearch.value.toLocaleLowerCase();
      if(!title.includes(filterTitle)){
        post.style.display = 'none';
      }else{
        post.style.display = 'block';
      }
    }
  }
}
