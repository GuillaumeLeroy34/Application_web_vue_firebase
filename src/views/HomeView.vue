<script setup>

// palettes de couleur: bleu:  #00AEEF rose:  #ED028C jaune:  #FFF101 bleu:  #2E3092 rouge:  
//#EE1D23 vert:  #00A54F gris:  #363539 noir:# 231F20 pourpre cramoisi:  #5A449C




</script>

<template>
  <head>
    <meta name="google-site-verification" content="zhBSYgAMlw1gFOdS02EIVYNti0ZFebnmBrp7Yta8RLY" />
    <!-- balise de vérification de propriété google pour l'indexation des pages -->
  </head>
  <div class="image">

    <h1>La résidence</h1>

      <hr>

        <p>
          La résidence "Les Tilleuls" est un établissement public géré par le Centre Communal d'Action Sociale de
          Murviel-les-Béziers.
          Il a ouvert ses portes en 1991 et des travaux de mise en conformité ont été réalisés en 1999 pour la sécurité,
          le
          confort et le bien-être des résidents.
        </p>

      <p>
        L'établissement se trouve à 14 km de béziers, entre mer et montagne.
        Il est situé en lisière du village et domine la plaine, près de la place du marché et des principaux commerces.
      </p>


    <!-- voir pour faire des effets de style fade in  -->


      <h2>Présentation de l'établissement</h2>

        
          <p>La résidence "Les Tilleuls" a une capacité d'accueil de 53 lits dont une place d'hébergement temporaire.
            Les chambres sont à 1 ou 2 lits, avec une superficie de 20 et 30m², équipées d'une salle de bain individuelle.
          </p>


          <p> Les chambres comprennent des prises de télévision et de téléphone.
            Le mobilier comprend un lit, une table, un chevet, un placard penderie, une chfaise et un fauteuil.
            Il est tout à fait possible de personnaliser la chambre en apportant ses propres meubles.</p>


          <p> Depuis le 1e décembre 2004, la Résidence "Les Tilleuls" est un Établissement Hébergeant des Personnes âgées
            Dependantes.
            il est donc possible d'accueillir des personnes ayant perdu leur autonomie.
            L'établissement a recruté du personnel médical tel que des infirmiers, des aides soignants, un psychologue, et
            un médecin coordonateur.</p>

        




  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
/*import de la police d'écriture manuscrite pour le titre */
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
/*import de la police d'écriture pour les corps de texte, sans sérif*/


.box-tranparente {
  background-color: white;
  opacity: 70%;
}

html {

  font-family: 'Abel';
  font-size: 18px;
}

.image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 1%;
  height: 1000px;
  background-image: url("../assets/images/fond_ecran_accueil_transparent.JPG");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;

}

h3::first-letter {

  font-size: 1.5rem;
  font-family: 'Great Vibes', cursive;
}

p{
  width: 55%;
}

p,
ul {
  text-align: center;
  padding: 1%;
}

.text-box {
  display: contents;
  text-align: center;
  width: 75%;
  justify-content: center;

  padding: 2px;
  color: white;
}</style>  