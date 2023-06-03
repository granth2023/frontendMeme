// document.addEventListener('DOMContentLoaded', function() {
//     const memeId = new URLSearchParams(window.location.search).get('id'); // Retrieve the meme ID from the query parameter
  
//     fetch(`https://memebackend-copy-git-vercel-granth2023.vercel.app/api/memes/${memeId}`) // Fetch the individual meme by ID
//       .then(response => response.json())
//       .then(data => {
//         const memeImg = document.getElementById('meme-details-img');
//         const topTextOverlay = document.getElementById('top-text-overlay');
//         const bottomTextOverlay = document.getElementById('bottom-text-overlay');
  
//         memeImg.src = data.url; // Set the image source to the meme URL
//         memeImg.alt = data.name; // Set the image alt attribute to the meme name
  
//         const form = document.getElementById('meme-form');
//         const topTextInput = document.getElementById('top-text');
//         const bottomTextInput = document.getElementById('bottom-text');
  
//         form.addEventListener('click', function(event) {
//           event.preventDefault();
  
//           const topText = topTextInput.value;
//           const bottomText = bottomTextInput.value;
  
//           // Overlay text on the image
//           memeImg.classList.add('meme-with-text');
//           topTextOverlay.textContent = topText;
//           bottomTextOverlay.textContent = bottomText;
  
//           // Clear the input fields
//           topTextInput.value = '';
//           bottomTextInput.value = '';
//         });
//       })
//       .catch(error => {
//         console.error('Error fetching meme:', error);
//       });
//   });