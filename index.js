document.addEventListener('DOMContentLoaded', function() {
  const memesPerPage = 25;
  let currentPage = 0;
  let memes = [];

  const memeContainer = document.getElementById('meme-container');
  const previousButton = document.getElementById('previous-btn');
  const nextButton = document.getElementById('next-btn');
  const memeImg = document.getElementById('meme-details-img');

  function displayMemes() {
    const startIndex = currentPage * memesPerPage;
    const endIndex = startIndex + memesPerPage;
    const currentMemes = memes.slice(startIndex, endIndex);

    memeContainer.innerHTML = ''; // Clear existing memes

    currentMemes.forEach(meme => {
      const memeImg = document.createElement('img');
      memeImg.src = meme.url;
      memeImg.alt = meme.name;

      const memeLink = document.createElement('a');
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

  fetch('https://memebackend-copy-git-vercel-granth2023.vercel.app/api/memes')
    .then(response => response.json())
    .then(data => {
      memes = data;
      displayMemes();
    })
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

//   // Form submission
//   const form = document.getElementById('meme-form-button');
//   const topTextInput = document.getElementById('top-text');
//   const bottomTextInput = document.getElementById('bottom-text');

//   form.addEventListener('click', function(event) {
//     event.preventDefault();

//     const memeId = new URLSearchParams(window.location.search).get('id');
//     console.log('hi')
//     if (!memeId) {
//       console.error('Meme ID not found.');
//       return;
//     }

//     const topText = topTextInput.value;
//     const bottomText = bottomTextInput.value;

//     // Overlay text on the image
//     memeImg.classList.add('meme-with-text');
//     memeImg.setAttribute('data-top-text', topText);
//     memeImg.setAttribute('data-bottom-text', bottomText);

//     // Clear the input fields
//     topTextInput.value = '';
//     bottomTextInput.value = '';
//   });
// });