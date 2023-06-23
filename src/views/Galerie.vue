<script setup>


import { onBeforeMount,onMounted, reactive, ref } from 'vue';
import { getStorage, ref as storageRef, listAll, getDownloadURL, deleteObject, uploadBytesResumable } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

//& VARIABLES
let listeImages = reactive([]);
const storage = getStorage();
let auth = getAuth();
let  isLoggedIn = ref(false);
let fichier;
const metadata = {
  contentType: 'image/png',
}; 
const colors = [
  { "border-color": "#00AEEF" },
  { "border-color": "#FFF101" },
  { "border-color": "#2E3092" },
  { "border-color": "#EE1D23" },
  { "border-color": "#00A54F" },
  { "border-color": "#363539" },
  { "border-color": "#231F20" },
  { "border-color": "#5A449C" }
]



onAuthStateChanged(auth, (webUser) => {
  if (webUser) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }

})


//& FONCTIONS
//* POST ajout d'une image sur le bucket Firebase
function addImage() {
  const storagerefFirestore = storageRef(storage, `/Images/${fichier.name}`)
  let uploadTask = uploadBytesResumable(storagerefFirestore, fichier, metadata)
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          break;
      }
     
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break
        // ... 
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    })
    getImages();
  }


//* GET récupération de toutes les images dans le dossier /Images du bucket firebase
function getImages() {
  listeImages.splice(0, listeImages.length)
  const storageImages = storageRef(storage, "/Images/")
  listAll(storageImages)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(storageRef(storage, itemRef)).then((downloadURL) => {
          listeImages.push(downloadURL)
        });

        // All the items under listRef.
      });
    }).catch((error) => {
      console.log(error)
      // Uh-oh, an error occurred!
    });
}

//* DELETE suppression d'une image de la galerie
function deleteImage(source){
  listeImages.pop(source)
  let refSuppression = storageRef(storage,source)
  deleteObject(refSuppression);
  getImages()
  alert("L'image a été supprimée avec succès")
}

function previewFiles(event) {
  fichier = event.target.files[0];
  addImage();
}

onBeforeMount(() => {
  getImages();
})

//& DEBUG FUNCTIONS

function afficherListeImages(){
  console.log(listeImages)
}

</script>

<template>
  <button @click="afficherListeImages">afficher liste images</button>
  <h1>Galerie</h1>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <hr>
  <form @submit.prevent="addImage" v-if="isLoggedIn">
   <h2> ajouter des images à la galerie</h2>
   <hr>
    <input type="file" name="" id="" accept="image/*" @change="previewFiles">

    <!-- <input type="submit" value=""> -->
  </form>
<div class="conteneur-images">
    
      <span v-for="(img, index) of listeImages">
        <button v-if="isLoggedIn" @click="deleteImage(img)"> <i class="fa fa-trash"></i></button> 
                                <!-- si l'utilisateur est connecté, on applique la classe noZoom aux images -->
        <img :src="img" alt="" class="image" :class="{noZoom: isLoggedIn}" style="height: 350px; width: 400px; object-fit:
        fill;" :style="colors[index % 5]">
    
      </span>
</div>
</template>

<style scoped>
button{
  position: absolute;
  background-color: #00A54F;
  color: white;
  border: none;
  margin: 10px;
  z-index: 10;
}

button:hover{
  background-color: #00d064;
  color: black;
}
[class="image"]:hover{
  -ms-transform: scale(2) translate(30px);
  /* IE 9 */
  -webkit-transform: scale(2) translate(30px);
  /* Safari 3-8 */
  transform: scale(1.5) translate(30px);
  overflow: hidden;
}

.conteneur-images{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

</style>