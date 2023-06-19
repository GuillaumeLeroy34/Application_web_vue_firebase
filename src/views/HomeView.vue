<script setup>

// palettes de couleur: bleu:  #00AEEF rose:  #ED028C jaune:  #FFF101 bleu:  #2E3092 rouge:  
//#EE1D23 vert:  #00A54F gris:  #363539 noir:# 231F20 pourpre cramoisi:  #5A449C




</script>

<template>
  <head>
    <meta name="google-site-verification" content="zhBSYgAMlw1gFOdS02EIVYNti0ZFebnmBrp7Yta8RLY" />
  </head>


  <section class="container">
    <h1>La résidence:</h1>
    <hr>
<!--  -->
    <!-- mettre une photo ici de la résidence-->



    <p>
      La résidence "Les Tilleuls" est un établissement public géré par le Centre Communal d'Action Sociale de
      Murviel-les-Béziers.
      Il a ouvert ses portes en 1991 et des travaux de mise en conformité ont été réalisés en 1999 pour la sécurité, le
      confort et le bien-être des résidents.
    </p>
    <p>
      L'établissement se trouve à 14 km de béziers, entre mer et montagne.
      Il est situé en lisière du village et domine la plaine, près de la place du marché et des principaux commerces.
    </p>
  </section>


  <!-- voir pour faire des effets de style fade in  -->

  <section class="container">
    <h2>Présentation de l'établissement</h2>
    <div>
      <div class="text-box">
        <p>La résidence "Les Tilleuls" a une capacité d'accueil de 53 lits dont une place d'hébergement temporaire.
          Les chambres sont à 1 ou 2 lits, avec une superficie de 20 et 30m², équipées d'une salle de bain individuelle.
        </p>
      </div>
    </div>
    <div class="text-box">
      <p>Les chambres comprennent des prises de télévision et de téléphone.
        Le mobilier comprend un lit, une table, un chevet, un placard penderie, une chaise et un fauteuil.
        Il est tout à fait possible de personnaliser la chambre en apportant ses propres meubles.
      </p>
    </div>

    <div class="text-box">
      <p>Depuis le 1e décembre 2004, la Résidence "Les Tilleuls" est un Établissement Hébergeant des Personnes âgées
        Dependantes.
        il est donc possible d'accueillir des personnes ayant perdu leur autonomie.
        L'établissement a recruté du personnel médical tel que des infirmières, des aides soignants, une psychologue, et
        un médecin coordonateur.
      </p>
    </div>      
    <div id="map"></div> <!-- composant pour mettre la carte google maps-->
  </section>

  <!-- <h2>Admission</h2>
  <div class="text-box">
    <p>La Résidence reçoit des personnes autonomes de plus de 60 ans. Lors de votre entrée, un dossier vous sera remis.
      Il comprend divers formulaires que vous voudrez bien remplir et nous retourner dans les meilleurs délais.
      Le contrat de séjour et le règlement intérieur devront être lus attentivement et signés.
    </p>
  </div>
  <div class="text-box">
    <p>Pour tout renseignement complémentaire, vous pouvez vous adresser au secrétariat, ouvert du lundi au vendredi
      de 9h00 à 12h00 et de 13h30 à 17h00, et le samedi de 9h00 à 12h00.
    </p>
  </div>
  <h2> Les frais de séjour</h2>
  <div class="text-box">
    <p>Aucune caution n'est demandée lors de l'admission.
      Au 1e janvier de chaque année, un arrêté du président du Conseil Général fixe les prix de journée applicables à
      l'établissement.
      Les frais de séjour sont payables mensuellement à terme échu au Trésor Public.
    </p>
  </div>
  <h3>Ils sont détaillés comme suit:</h3>
  <div class="text-box">
    <ul>
      <li>l'hébergement</li> -->
      <!-- //TODO voir si il est possible de récupérer des information, le cas échéant transformer ces éléments en lien de redirection vers des pages-->
     <!-- <li>les repas</li>
      <li>la participation dépendance</li>
    </ul>
  </div>

  <h3>Ils comprennent:</h3>

  <ul>
    <li>l'hébergement</li>
    <li>les repas</li>
    <li>l'entretien des chambres</li>
    <li>le lavage du linge personnel</li>
    <li>la fourniture des prestations pour l'incontinence</li>
    <li>tous les services mis à la disposition des résidents</li>
  </ul>

  <p>Sous condition de revenus, une Allocation Personnalisée au Logement peut être attribuée par la C.A.F ou la M.S.A
  </p>




  <ul id="vie-quotidienne">
    <li>
      <h3> Restauration</h3>
      <div class="text-box">
        <p>Les petit déjeuners sont servis en chambre à partir de 7h30. Les repas, préparés par nos cuisiniers, sont pris
          en salle de restaurant.
          Ils peuvent être pris en chambre à titre exceptionnel et momentané, avec justification d'une prescription
          médicale.
          Le déjeuner est servi à 12 heures et le dîner à 19 heures. Un goûter réunit tous ceux qui le désirent en salle
          de restaurant vers 16 heures.
        </p>
      </div>
    </li>
    <li>
      <h3> Linge</h3>
      <div class="text-box">
        <p>Le linge hôtelier est fourni par la Résidence. Chaque résident apporte son linge personnel préalablement
          marqué. L'ensemble du linge est entretenu par la blanchisserie de l'établissement.
        </p>
      </div>
    </li>
    <li>
      <h3>Prestations annexes:</h3>
      <div class="text-box">
        <p>Le ménage est effectués quotidiennement par les agents de l'établissement. Un agent de maintenance assure les
          réparations courantes.</p>
      </div>
    </li>
    <li>
      <h3> Coiffeur</h3>
      <div class="text-box">
        <p>Il y a un salon de coiffure dans l'établissement.
          Comme pour les soins, le choix du coiffeur est libre.
        </p>
      </div>
    </li>
    <li>
      <h3> Culte</h3>
      <div class="text-box">
        <p>Le résident est libre de recevoir le ministre du culte de son choix.
          Une salle de culte est à sa disposition.
        </p>
      </div>
    </li>
    <li>
      <h3> Visites et sorties</h3>
      <div class="text-box">
        <p>Vous pouvez recevoir vos familles et amis aux heures qui vous conviennent.
          Le service du restaurant est ouvert aux familles et amis.
          Il est possible de sortir librement, nous vous prions toutesfois d'informer le personnel en cas de départ
          prolongé ou d'absence à un repas.
        </p>
      </div>
    </li>
    <li>
      <h3> Animations et les loisirs</h3>
      <div class="text-box">
        <p>Des activités ludiques sont organisées tous les jours par le personnel de l'établissement et des intervenantes
          extérieurs
          ( ergothérapeutes, professeur de gymnastique) favorisant ainsi le maintien de l'autonomie des résidents.
          La Résidence dispose d'une animatrice à temps plein.
           Des sorties, promenades et des excursions sont programmées au cours de l'année. 
          Voir la rubrique "Articles" pour des exemples d'activités effectuées par nos séniors par le passé.</p>
      </div>
    </li>
  </ul> -->
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'); /*import de la police d'écriture manuscrite pour le titre */
  @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');      /*import de la police d'écriture pour les corps de texte, sans sérif*/
  
html{
font-family: 'Abel';
font-size: 18px;
}
p::first-letter, h3::first-letter{
  font-size: 1.5rem;
  font-family: 'Great Vibes', cursive;
  color:  #00AEEF
}
p, ul{
  font-family: 'Abel';
  font-size: 18px;

}

.text-box{
  background-color: #795cce;
  padding: 2px;
  color: white;
}



</style>  