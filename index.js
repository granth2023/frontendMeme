document.addEventListener('DOMContentLoaded', function() {
  const memesPerPage = 25;
  let currentPage = 0;
  let memes = [];

  //hold the memes
  const memeContainer = document.getElementById('meme-container');
  const previousButton = document.getElementById('previous-btn');
  const nextButton = document.getElementById('next-btn');
  const memeImg = document.getElementById('meme-details-img');

  function displayMemes() {

    //where to start in my array? --> what page are you on, how many per page? 
    const startIndex = currentPage * memesPerPage;
    //where to end? --> how many per page and where did you start? 
    const endIndex = startIndex + memesPerPage;
    //what do the cut of each batch? --> all the memes sliced between start and end
    const currentMemes = memes.slice(startIndex, endIndex);

    //everytime you move page you have to clear what you currently have
    memeContainer.innerHTML = ''; // Clear existing memes

    //take the necessary amount of indexes called current memes and run for each: 
    currentMemes.forEach(meme => {
      //hold the possibilty of creaitng an image 
      const memeImg = document.createElement('img');
      //store the url for the meme at the memeImg at src
      memeImg.src = meme.url;
      //store the name of the meme at memeImg.alt
      memeImg.alt = meme.name;

      //create an element in the document and hold it at meme link
      const memeLink = document.createElement('a');
      //link to a new html page, taking the id of the meme and href it 
      memeLink.href = `meme.html?id=${meme._id}`; // New: Pass meme ID as a query parameter

    
      memeLink.appendChild(memeImg);
      memeContainer.appendChild(memeLink);
    });

    updatePagination();
  }

  function updatePagination() {
    previousButton.disabled = currentPage === 0;
    nextButton.disabled = (currentPage + 1) * memesPerPage >= memes.length;
  }
//get the memes from the backend 
  fetch('https://memebackend-copy-git-vercel-granth2023.vercel.app/api/memes')
  //turn the memes to json
    .then(response => response.json())
    //promise the data to a function that makes the memes assigned to data an
    .then(data => {
      memes = data;
      //the promise function will call the display memes
      displayMemes();
    })
    //catch error
    .catch(error => {
      console.error('Error fetching memes:', error);
    });

  previousButton.addEventListener('click', () => {
    currentPage--;
    displayMemes();
  });

  nextButton.addEventListener('click', () => {
    currentPage++;
    displayMemes();
  });
})

