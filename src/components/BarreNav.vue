<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router';// import router
const router = useRouter();


</script>

<template>
    <nav>
        <img src="../assets/images/Logo_tilleuls.png" alt=""  @click="router.push('/');">
        <router-link to="/" class="left-link">Accueil</router-link>
        <router-link to="/admission">Admission</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/articles">Actualités</router-link>
        <router-link to="/galerie">Galerie</router-link>
        <router-link to="/contacts" class="right-link">Contacts</router-link>

    </nav>
    <!-- <img src="/src/assets/images/cadre TIlleuls.png" style="width: 100px; height: 100px; object-fit: fill;"> -->
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
/*//? Import de la police d'écriture cursive pour le titre */

p {
    cursor: pointer;
    white-space: nowrap;
    display: inline;
    font-family: 'Great Vibes', cursive;
    font-size: xx-large;
    padding-right: 3%;
    margin: 0%;
}

img{
    z-index: 3;
    top: 30px;
    border: none;
    height: 70px;
    cursor: pointer;
}


nav {
    z-index: 3;
    height: 75px;
    align-items: center;
    width: max-content;
    padding: 10px;
    padding-top: 20px;
    vertical-align: bottom;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    padding: 10px;
    padding-right: 20px;
    padding-bottom: 19px;
    position: relative;
    bottom: 10px;
    right: 15px;
    width: 100%;
    background-color: #dfdfdf;
}

nav .router-link {

    font-size: 24px;
    background-image: url("/src/assets/images/décoration liens.png");
    position: relative;
    width: 300px;
    padding-top: 10px;
    left: 60px;
    top: 30px;
    border: "none";
}

nav .router-link-active {
    background-color: bisque;
}

.divNav {
    background-color: aquamarine;
}

/* palettes de couleur: bleu: #00AEEF rose: #ED028C jaune: #FFF101 
bleu:#2E3092            rouge:#EE1D23 vert: #00A54F  gris: #363539 
noir:# 231F20           pourpre   cramoisi: #5A449C
*/

a  {
    flex-direction: column;
    display: flex;
    height: 50px;
    font-weight: bold;
    vertical-align: middle;
    text-decoration: none;
    background-color: #00A54F;
    padding-left: 3%;
    padding-right: 3%;
}

.faux-lien{
    padding-left: 3%;
}

a:hover {
    background-color: rgb(0, 205, 0);
}

.left-link {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.right-link {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

}
</style>