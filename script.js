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