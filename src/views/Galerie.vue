<script setup>


import { onBeforeMount, reactive, ref } from 'vue';
import { getStorage, ref as storageRef, listAll, getDownloadURL, deleteObject } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ArticlesView from './ArticlesView.vue';
let listeImages = reactive([]);
const storage = getStorage();

let auth = getAuth();
let  isLoggedIn = ref(false);


onAuthStateChanged(auth, (webUser) => {
  if (webUser) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }

})



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


function deleteImage(source){
  listeImages.pop(source)
  let refSuppression = storageRef(storage,source)
  deleteObject(refSuppression);
  alert("L'image a été supprimée avec succès")
  getImages()
}








onBeforeMount(() => {
  getImages();
})
//& DEBUG FUNCTIONS


</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <hr>
  <span v-for="(img, index) of   listeImages">
    <button v-if="isLoggedIn" @click="deleteImage(img)"> <i class="fa fa-trash"></i></button>
    <img :src="img" alt="" style="width: 250px; height: 251px; object-fit:
      fill;" :style="colors[index % 5]">

  </span>
</template>

<style scoped>
img:hover {

  -ms-transform: scale(2) translate(30px);
  /* IE 9 */
  -webkit-transform: scale(2) translate(30px);
  /* Safari 3-8 */
  transform: scale(1.5) translate(30px);
  overflow: hidden;
}

</style>