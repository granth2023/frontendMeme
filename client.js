const memeContainer = document.querySelector('.meme-container');
const memesPerPage = 50;
let currentPage = 1;
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

previousBtn.addEventListener('click', goToPreviousPage);
nextBtn.addEventListener('click', goToNextPage);

// Function to fetch memes for a specific page
const fetchMemes = async (page) => {
  try {
    const response = await fetch(`/api/memes?page=${page}&limit=${memesPerPage}`);
    if (!response.ok) {
      throw new Error('Failed to fetch memes');
    }
    const memes = await response.json();
    return memes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Function to render memes on the page
const renderMemes = (memes) => {
  memeContainer.innerHTML = '';

  memes.forEach((meme) => {
    const memeImage = document.createElement('img');
    memeImage.src = meme.imageUrl;
    memeImage.alt = 'Meme';
    memeImage.classList.add('meme-image');

    memeImage.addEventListener('click', () => {
      window.location.href = `/create?memeId=${meme._id}`;
    });

    memeContainer.appendChild(memeImage);
  });
};


const navigateToPage = async (page) => {
    currentPage = page;
    const memes = await fetchMemes(page);
    renderMemes(memes);
  };
  
  // Function to go to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      navigateToPage(currentPage - 1);
    }
  };
  
  // Function to go to the next page
  const goToNextPage = () => {
    currentPage++;
    navigateToPage(currentPage);
  };
  
  // Initial page load
  navigateToPage(currentPage);