<script setup>


//& IMPORTS

import { ref, reactive, onBeforeMount, onMounted } from 'vue';
import ArticleMini from '../components/ArticleMini.vue';


import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { ref as storageRef, } from "firebase/storage";
import { getFirestore, updateDoc, } from "firebase/firestore";
import { getStorage, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from "@firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";





//& FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyAcxX5LFG2C1V4QPtbkOTKBl4U-ln2hbjs",
  authDomain: "siteehpad.firebaseapp.com",
  projectId: "siteehpad",
  storageBucket: "siteehpad.appspot.com",
  messagingSenderId: "932950441246",
  appId: "1:932950441246:web:f6b82dc4a70950dc639d0f",
  measurementId: "G-JV3J02YGYE"
};

const storage = getStorage();
// ceci est une référence pointant a la racine du bucket contenant les images de l'ehpad
//~ exemple: la référence storageRef(storage, "/Images") va créer un fichier nommé "Images" à la racine du projet 

// il est possible de spécifier un dossier enfant dans les paramètres de la fonction



const app = initializeApp(firebaseConfig); // Initialize Firebase
const db = getFirestore(app); //Initialize Cloud Firestore and get a reference to the service
const metadata = {
  contentType: 'image/png',
}; // métadonnée qui sert a firestore



//& VARIABLES
// les variables firestore sont déclarée dans //&firebase
let queryListeArticles = reactive(getDocs(collection(db, "Articles")));
let listeArticles = reactive([]);
let listeImages = reactive([]);


let dateToday = new Date()
let mois = dateToday.getMonth();
if(mois < 10){
mois = `0${mois}`
}
 let dateEnString = (`${dateToday.getFullYear()}-${mois}-${dateToday.getDate()}`)

let isLoggedIn = ref(true); // variable de l'application qui contient les valeurs a afficher
let couleurStatut = ref("grey");
let texteStatut = "en attente";
let titreArticle = ref('');
let contenuArticle = ref("");
let dateArticle = ref(dateEnString);
let URLTelechargementImage = ref("");

// sélection du fichier a post sur firebase storage
let fichier; //déclaration du fichier dans la scope globale

let auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (user) {
    //si on a un utilisateur connecté ( ici les seuls utilisateurs qui peuvent se connecter sont les administrateurs)
    isLoggedIn.value = true; // on affiche l'interface de gestion des articles
  } else {
    isLoggedIn.value     = false;
  }
})




//* POST ajout d'une image sur firestore ( cela peut être n'importe quel type de fichier, mais il faudra écrire une autre fonction)
function addImage() {
  console.log(`${titreArticle} `);
  const storagerefFirestore = storageRef(storage, `/Images/${fichier.name}`)
  texteStatut = `l'image qui sera déployée sera "${fichier.name}"` //TODO changer ça en retour visuel sur le site
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
          texteStatut = 'Upload is running';
          couleurStatut = "yellow"
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
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        // console.log('File available at', downloadURL);
        URLTelechargementImage = downloadURL;
        addArticle(downloadURL);
      });
    }
  );
}



//* POST ajoute un document dans la collection "Articles"
//TODO implémenter la date d'ajout et la source de l'image dans la base de données ( utiliser l'url qui est retournée à la fin du post )
async function addArticle(urlImage) {
  //? variable interne a firebase

  let docRef = await addDoc(collection(db, "Articles"), {
    titre: titreArticle.value,
    contenu: contenuArticle.value,
    date: dateArticle.value,
    source: urlImage,
    id: "testID"
  });
  updateDoc(docRef, { id: docRef.id })
  getArticles()

  texteStatut= "article ajouté avec succès";
  couleurStatut = "green";
}

//TODO retourner le statut de la publication de l'article dans un champ de texte coloré pour avertir l'utilisateur




//* GET récupère les valeurs de la collection "Articles"
async function getArticles() {
  listeArticles.splice(0, listeArticles.length) //? on nettoie la liste des articles
  queryListeArticles = await getDocs(collection(db, "Articles")) //? fetch
  queryListeArticles.forEach((element) => {
    // console.log(element.data());
    listeArticles.push({
      titre: element.data().titre,
      contenu: element.data().contenu,
      date: element.data().date,
      source: element.data().source,
      id: element.data().id
    }) //? on rajoute les articles formatés dans la liste
  });
  // console.log(listeArticles)
}



//* GET récupère les url de toutes les images stockées dans le dossier /Images du bucket de firebase et les met dans la variable ListeImages
function getImages() {
  listeImages.splice(0, listeImages.length)
  const storageImages = storageRef(storage, "/Images/")
  listAll(storageImages)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(storageRef(storage, itemRef)).then((downloadURL) => {
          // console.log(`fichier disponible à l'addresse: ${downloadURL}`) 
          listeImages.push(downloadURL);
        });
        // All the items under listRef.
      });
    }).catch((error) => {
      console.log(error)
      couleurStatut = "red"
      texteStatut = "une erreur est survenue!"+error;

      // Uh-oh, an error occurred!
    });
}


//~ exemple <option v-for="item of listeTypeDonnees" :key="item.id" :value="item.id"> {{ item.nom }} </option>

//*DELETE supprime un article
async function deleteArticle(idItem) {
  console.log(`l'article d'id: ${idItem} va être supprimé`);
  let itemRef = doc(db, "Articles", idItem)
  await deleteDoc(itemRef).then(() => {
    // File deleted successfully
    texteStatut = "Article supprimé avec succès."
    getArticles();
  }).catch((error) => {
    // Uh-oh, an error occurred! 
  });
}

//*GET récupère le fichier dans l'input file pour le post sur le bucket du cloud
function previewFiles(event) {
  fichier = event.target.files[0];
}


////   déprécié
//!    important
//TODO à faire
//^    idk, jaune ?
//*    fonctions
//     commentaire
//?    notes
//~    exemple
//&    catégorie




//& fonctions TEST & DEBUG    

function afficherListeArticles() {
  console.log(listeArticles);
}

function debugLogArticle() {
  console.log(`titreArticle: ${titreArticle.value}\n contenuArticle:${contenuArticle.value}\n dateArticle: ${dateArticle.value}\n sourceURLImage: ${URLTelechargementImage.value}\n `);
}


//& MOUNT FUNCTIONS
onBeforeMount(() => { // exécuter une fois au chargement de la page 
  getArticles();
})


  //todo voir pour stocker des pdf



</script>

<template>
  <div v-if="isLoggedIn">
      </div>
  <div>
    <div v-show="isLoggedIn"> <!-- //? sert a contrôler la visibilité du form  -->

      <hr>

      <!-- //? form principal qui permet de poster des articles -->
      <!-- //TODO permettre l'ajout d'un pdf, soit par un radio button ( fonctionnerait de la même manière que les zones du ptut) ou autre -->
      <form @submit.prevent="addImage">
        <img v-for="image of listeImages" v-bind:src="image" style="width: 100px; height: 100px; object-fit: fill;">
        <input type="file" name="" id="" accept="image/*" @change="previewFiles">

        <label>
          Titre de l'article:
          <input type="text" class="input" name="" id="input-titre" v-model="titreArticle"
            placeholder="titre de l'article">
        </label>

        <label>
          Contenu de l'article
          <textarea name="" id="" class="input" cols="17" rows="3" v-model="contenuArticle"
            placeholder="résumé de l'article"></textarea>
        </label>

        <input type="date" name="date" id="" v-model="dateArticle">
        <input type="submit" value="valider">
      </form>
      <label> statut: <input type="text" name="" v-bind:value="texteStatut" readonly size="50"
        :style="{ color: couleurStatut }">
      </label>
      <hr>
    </div>

    <ArticleMini @supprimerArticle="deleteArticle" id v-for="article of listeArticles" v-bind:isVisible="isLoggedIn"
      v-bind:titre="article.titre" v-bind:contenu="article.contenu" v-bind:source="article.source"
      v-bind:date="article.date" v-bind:identifiant="article.id">
    </ArticleMini>

  </div>
</template>
<style scoped>
label {

  position: relative;
  display: table;
  vertical-align: middle;
}

.input-titre {
  padding: 20%;
}
</style>