<script setup>
import { onBeforeMount, reactive } from 'vue';
import { getStorage, ref as storageRef, listAll, getDownloadURL } from 'firebase/storage';

let listeImages = reactive([]);
const storage = getStorage();

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
onBeforeMount(() => {
  getImages();
})
//& DEBUG FUNCTIONS


</script>

<template>
  <hr>
  <div>
    <img v-for="(img, index) of   listeImages  " v-bind:src="img" alt="" style="width: 250px; height: 251px; object-fit:
      fill;"
      :style="colors[index % 5]">
  </div>
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