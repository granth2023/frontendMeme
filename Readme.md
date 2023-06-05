## Meme Generator Front End

This front-end application allows users to generate memes and submit them to the backend. It provides a user interface for displaying memes, adding text overlays, and submitting them for storage and retrieval.

### Technologies Used
The following technologies are used in this front-end application:

* HTML
* CSS
* JavaScript 
* Fetch API

* Drag and Drop: The application supports drag and drop functionality to position text overlays on the memes.
* URLSearchParams: The URLSearchParams API is used to parse and extract query parameters from the URL.
* Responsive Design: The web pages are designed to be responsive and adapt to different screen sizes and devices.

### File Structure
The front-end application consists of the following files:

* index.html: The main HTML file that defines the structure of the meme generator page.
* meme.html: The HTML file that displays the details of a specific meme and allows users to add text overlays.
submissions.html: The HTML file that displays a list of submitted memes.
* style.css: The CSS file that defines the styles and layout of the web pages.
* index.js: The JavaScript file that implements the functionality of the meme generator.

```
fetch('https://memebackend-copy-git-vercel-granth2023.vercel.app/api/memes')
    .then(response => response.json())
    .then(data => {
      memes = data;
      displayMemes();
    })
    .catch(error => {
      console.error('Error fetching memes:', error);
    });

```

```
function deleteSubmission(submissionId) {
      // Send a DELETE request to the backend API to delete the submission
      fetch(`https://memebackend-copy-g4lvt3gic-granth2023.vercel.app/api/submissions/${submissionId}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            console.log('Submission deleted successfully.');
          } else {
            console.error('Error deleting submission.');
          }
        })
        .catch(error => {
          console.error('Error deleting submission:', error);
        });
    }

```

```
fetch('https://memebackend-copy-g4lvt3gic-granth2023.vercel.app/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
      })
        .then(response => response.json())
        .then(submission => {
          console.log('Submission created:', submission);
          // Handle success or navigate to a success page
        })
        .catch(error => {
          console.error('Error creating submission:', error);
          // Handle error or show an error message
        });
    ```

    ```
    fetch(`https://memebackend-copy-git-vercel-granth2023.vercel.app/api/submissions/${submissionId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(submissionData)
    
  })
    .then(response => response.json())
    .then(submission => {
      console.log('Submission updated:', submission);
      // Handle success or navigate to a success page
    })
    .catch(error => {
      console.error('Error updating submission:', error);
      // Handle error or show an error message
    });
```

### Getting Started

To run the front-end application, you can simply open the index.html file in a web browser. The application will load the memes from the backend API and display them on the page. Users can click on a meme to view its details and add text overlays. The generated memes can be submitted to the backend by clicking the "Submit" button.



### Next Steps

* save the position of the text 
* create user page and authentication
* CSS additions 

### NETLIFY

* https://dynamic-sunburst-b83a52.netlify.app

### References

* Chatgpt
* Fruits lecture
* https://imgflip.com/api