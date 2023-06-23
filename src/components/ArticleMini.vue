    <script setup>
const emits = defineEmits(["supprimerArticle"]);


function afficherValeursArticle() {
    console.log(`id de l'image: ${props.identifiant}`)
}

const props = defineProps({
    identifiant: String,
    source: {
        type: String,
        default: '/src/assets/images/Placeholders/png.svg'
    },
    sourcepdf: String,
    titre: String,
    contenu: String,
    date: String,
    isVisible: Boolean
})

//composant a insérer dans la liste
</script>
<template>
    <div class="article">
        <img v-bind:src="source" style="height: 300px; object-fit: fill;">
        <span class="texte">
            <h1 class="titreArticle">{{ titre }}</h1>
            <hr>
            <div>
                <p class="contenuArticle"> {{ date }}</p>
                <p class="contenuArticle">{{ contenu }}</p>
            </div>
            <a v-bind:href="sourcepdf" target="_blank">lire plus</a>
        </span>
       
        <nav v-if="isVisible">
            <div  class="boutons-controle">
                
                <button @click="afficherValeursArticle">supprimer l'article <i class="fa fa-trash"></i></button>
            </div>
        </nav>
    </div>
</template>
<style>
/* //TODO mettre l'image à gauche en tant que miniature, le titre haut gauche sur l'espace qui reste, un extrait du contenu de l'article bas gauche */
.article {
    display: flex;
    text-align: center;
    margin: 10px;
}

/*palettes de couleur: bleu:  #00AEEF rose:  #ED028C jaune: 
 #FFF101 bleu:  #2E3092 rouge:  #EE1D23 vert:  #00A54F gris: 
  #363539 noir:# 231F20 pourpre cramoisi:  #5A449C */

img {
    margin-right: 10px;
    border: 3px;
    border: solid;
    border-color: #ED028C;
}

h1,
p {
    vertical-align: middle;
    text-align: center;


}

.texte {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #02baed;
    width: 50%;
    
        /*#5A449C; */
}

.nav {
    display: flex;
    
    vertical-align: middle;
}

.boutons-controle{
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
}
</style>