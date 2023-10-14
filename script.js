const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const accessKey = "4pwQDEYs9jmjhQ9SoY-fr3hLSKO1eLSKkW3-wVjm29c";

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchInput.value;
  const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;


     const response = await fetch(url);
    const data = await response.json();
   
    console.log(data);
    if(page===1){
      searchResult.innerHTML="";
    }

    if (data.results && data.results.length > 0) {
      const results = data.results;
      console.log(results);
      console.log(url);

      results.forEach((result) => {
       
          const image = document.createElement("img");
          image.src = result.cover_photo.urls.small;
          console.log(image.src);
          const imageLink = document.createElement("a");
          imageLink.href = result.links.html;
          imageLink.target = "_blank";
          imageLink.appendChild(image);
          searchResult.appendChild(imageLink);
        } );
        
      }
    showMoreBtn.style.display="block";  
    }
     
    
 


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
showMoreBtn.addEventListener("click",()=>{
  page++;
  searchImages();
})
