const imageArr = [
  './pictures/part3.jpg',
  './pictures/part3-2.jpg'
];
let currentIndex = 0; // אינדקס התמונה שמוצגת

const AstronautsWords = document.getElementById('AstronautsWords');

// פונקציה שמעדכנת את התמונה לפי האינדקס
function updateImage() {
  AstronautsWords.src = imageArr[currentIndex];
}

// פונקציה לתמונה הבאה
function nextImage() {
  currentIndex = (currentIndex + 1) % imageArr.length;
  updateImage();
}

// פונקציה לתמונה הקודמת
function prevImage() {
  currentIndex = (currentIndex - 1 + imageArr.length) % imageArr.length;
  updateImage();
}

// מעבר אוטומטי כל 10 שניות
setInterval(nextImage, 10000);

// כפתורים
document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);
