function splitImage() {
  const x = parseInt(document.getElementById('x').value);
  const y = parseInt(document.getElementById('y').value);
  const sourceImage = document.getElementById('sourceImage');
  const splitContainer = document.getElementById('splitImagesContainer');

  if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
      alert("Please enter valid values for X and Y.");
      return;
  }

  splitContainer.innerHTML = '';

  const imageWidth = sourceImage.naturalWidth;
  const imageHeight = sourceImage.naturalHeight;
  const pieceWidth = imageWidth / x;
  const pieceHeight = imageHeight / y;

  splitContainer.style.width = `${imageWidth}px`;
  splitContainer.style.height = `${imageHeight}px`;
  splitContainer.style.position = 'relative';

  for (let row = 0; row < y; row++) {
      for (let col = 0; col < x; col++) {
          const piece = document.createElement('div');
          piece.classList.add('split-image');
          piece.style.width = `${pieceWidth}px`;
          piece.style.height = `${pieceHeight}px`;
          piece.style.backgroundImage = `url(${sourceImage.src})`;
          piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;
          piece.style.left = `${col * pieceWidth}px`;
          piece.style.top = `${row * pieceHeight}px`;

          piece.addEventListener('click', () => {
              piece.style.opacity = '0';
              piece.style.transform = 'scale(0.9)';
          });

          splitContainer.appendChild(piece);
      }
  }
}
