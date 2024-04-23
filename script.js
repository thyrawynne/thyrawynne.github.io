// Get the profile picture element
const profilePic = document.getElementById('profile-pic');

// Initially set opacity to 0 (hidden)
profilePic.style.opacity = 0;

// Window load event listener (when the page finishes loading)
window.addEventListener('load', () => {
  // Animate the opacity to 1 (visible) over 0.5 seconds
  profilePic.style.transition = 'opacity 0.5s ease-in';
  profilePic.style.opacity = 1;
});

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const imgSrc = img.src;  // Get the image source of the clicked image

    // Create a lightbox element
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <img src="${imgSrc}" alt="Image">
      <button class="close-lightbox">Close</button>
    `;

    // Append the lightbox to the body
    document.body.appendChild(lightbox);

    // Close lightbox functionality (optional)
    const closeButton = lightbox.querySelector('.close-lightbox');
    closeButton.addEventListener('click', () => {
      lightbox.remove();  // Remove the lightbox element
    });
  });
});