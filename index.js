let pictures =['/images/download (1).jpg',
'/images/download (2).jpg',
'/images/download (3).jpg',
'/images/download (4).jpg',
'/images/download.jpg',
'/images/images (1).jpg',
'/images/images (2).jpg',
'/images/images (3).jpg',
'/images/images (4).jpg',
'/images/images (5).jpg',
'/images/images (6).jpg',
'/images/images (8).jpg'];

function displayImages(imageSrc){
  let div = document.createElement('div');
  div.setAttribute('class','divImages');
  console.log(div);
  let image = document.createElement('img');
  // console.log(image);
  image.src = imageSrc;

  let button = document.createElement('button');
  // button.id = 'deleteButton';
  button.className = 'deleteButton';
  button.innerHTML ='Delete';
  // console.log(button)
  button.addEventListener('click' ,()=>{
    div.remove();
  });
  div.append(image);
  div.append(button);
  return div;
}
function render(){
  let picture = document.getElementById('picture')
  pictures.forEach((imageSrc)=>{
    let items = displayImages(imageSrc);
    picture.appendChild(items)
  });
}
render();
displayImages();