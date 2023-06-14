<script>
import { getIsAdmin  } from "../router/index"
import { ref } from "vue"



</script>

<template>
    <nav>
            <p>Résidence "Les Tilleuls"</p>
            <router-link to="/">Accueil</router-link>
            <router-link to="/admission">admission</router-link>
            <router-link to="/services">services</router-link>
            <router-link to="/articles">articles</router-link>
            <router-link to="/galerie">galerie</router-link>
            <router-link to="/connexion-admin" v-if="this.$isAdmin">Admin</router-link>
    </nav>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
/*//? Import de la police d'écriture cursive pour le titre */

p {
    white-space: nowrap;
    display: inline;
    font-family: 'Great Vibes', cursive;
    font-size: xx-large;
    padding-left: 3%;
    padding-right: 3%;
    margin: 0%;
}


nav {
    width: max-content;
    padding: 10px;
    padding-top: 20px;
    vertical-align: middle;
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

/* palettes de couleur: bleu: #00AEEF rose: #ED028C jaune: #FFF101 
bleu:#2E3092            rouge:#EE1D23 vert: #00A54F  gris: #363539 
noir:# 231F20           pourpre   cramoisi: #5A449C
*/

a{
vertical-align: middle  ;
text-decoration: none;
background-color: #00A54F;
padding-left: 4%;
padding-right: 4%;
}
a:hover{
    background-color: rgb(0, 205, 0);
}

nav .router-link{
    font-size: 24px;
}

nav .router-link-active{
    background-color: bisque;
}

</style>