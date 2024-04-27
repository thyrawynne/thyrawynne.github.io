document.addEventListener('DOMContentLoaded', () => {
  const figures = document.querySelectorAll('figure');
  figures.forEach((figure) => {
    figure.addEventListener('mouseover', () => {
      figure.querySelector('figcaption').style.display = 'block';
  });

    figure.addEventListener('mouseout', () => {
      figure.querySelector('figcaption').style.display = 'none';
    });
  });
});

  const figureCaptions = document.querySelectorAll('figcaption');
    figureCaptions.forEach((caption) => {
  caption.style.display = 'block'; 
});