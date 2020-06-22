//document.body.innerHTML="This is some content";



const panoImage=document.querySelector('.pano-image');
const miamiPano='../img2.jpeg';
const panorama= new PANOLENS.ImagePanorama(miamiPano);
const viewer = new PANOLENS.Viewer({
	container:panoImage
});


viewer.add(panorama);