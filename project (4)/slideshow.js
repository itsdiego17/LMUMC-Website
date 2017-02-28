var myImage= document.getElementById ("slide")

var imgArray=["pics/lambuth_memorial.jpg", "pics/jesus2.jpg", "pics/garden2.jpg"];

var imageIndex=0;

function changeImage () {
  slide.setAttribute("src", imgArray [imageIndex]);
  imageIndex++;
  if (imageIndex>=imgArray.length) {
    imageIndex=0;
  }
}

var intervalHandle = setInterval(changeImage,10000);

slide.onclick=function () {
  clearInterval(intervalHandle);
}