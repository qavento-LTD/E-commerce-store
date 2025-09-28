const search = document.querySelector('.search_txt');

const icon_search = document.querySelector('.icon_search');

search.style.top = '-800px';
icon_search.onclick = () => {
  if (search.style.top === '-800px') {
    search.style.top = '64px';
  } else {
    search.style.top = '-800px';
  }
}