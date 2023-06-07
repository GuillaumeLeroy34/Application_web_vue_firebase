<script setup>
import { onBeforeMount, reactive } from 'vue';
import { getStorage, ref as storageRef, listAll, getDownloadURL } from 'firebase/storage';

let listeImages = reactive([]);
const storage = getStorage();

function getImages() {
  listeImages.splice(0, listeImages.length)
  const storageImages = storageRef(storage, "/Images/")
  listAll(storageImages)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(storageRef(storage, itemRef)).then((downloadURL) => {
          console.log(`fichier disponible à l'adresse: ${downloadURL}`) 
          listeImages.push(downloadURL)
        });
        
        // All the items under listRef.
      });
    }).catch((error) => {
      console.log(error)
      // Uh-oh, an error occurred!
    });
    console.log(listeImages)
  }
onBeforeMount(() => {
  getImages();
})
console.log(`${qdgsdfgdgdgfd}`);
//& DEBUG FUNCTIONS

function logListeImages(){
  console.log(listeImages);
}
</script>

<template>
<hr>
<button @click="logListeImages">afficher listeImages</button>
    <div> 
        <!-- <img v-for="img of listeImages" v-bind:src="img" alt=""  style="width: 400; height: 250px; object-fit: fill;"> -->
    </div>
</template>

<style scoped>


img:hover{

    -ms-transform: scale(2) translate(30px); /* IE 9 */
    -webkit-transform: scale(2) translate(30px); /* Safari 3-8 */
    transform: scale(1.5) translate(30px);
    overflow: hidden;
    }

</style>