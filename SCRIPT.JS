function displayImage() {
    var img = document.createElement("img");
    img.src = "path/to/image.jpg";
    document.body.appendChild(img);
  }

  var friendImages = ["path/to/friend1.jpg", "path/to/friend2.jpg", "path/to/friend3.jpg"];

function displayFriendImages() {
  for (var i = 0; i < friendImages.length; i++) {
    var img = document.createElement("img");
    img.src = friendImages[i];
    document.body.appendChild(img);
  }
}



// This script will add a border to the images in the gallery when they are clicked
const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.style.border = '2px solid black';
  });
});
