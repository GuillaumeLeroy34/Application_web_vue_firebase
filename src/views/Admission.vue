<template>
    <div class="image">

        <h1>Admission</h1>
        <hr>


        <h2>Carte de la Résidence:</h2>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.9522505283434!2d3.1463994844370977!3d43.439781322388114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b10b2d443cd305%3A0x7c5e7c02dbdfa947!2sEHPAD%20Les%20Tilleuls!5e0!3m2!1sfr!2sfr!4v1683616996411!5m2!1sfr!2sfr"
            width="600" height="450" style="border:0;" allowfullscreen loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>



        <p>Lors de votre entrée, un dossier vous sera remis.
            Il comprend divers formulaires que vous voudrez bien remplir et nous retourner dans les meilleurs délais.
            Le contrat de séjour et le règlement intérieur devront être lus attentivement et signés.
        </p>


        <p>Pour tout renseignement complémentaire, vous pouvez vous adresser au secrétariat, ouvert du lundi au vendredi
            de 9h00 à 12h00 et de 13h30 à 17h00.
        </p>

        <p>Il est possible de compléter le formulaire <a href="https://www.formulaires.service-public.fr/gf/cerfa_14732.do"
                target="_blank">en cliquant ici</a>
            ou de compléter votre demande sur <a href="https://trajectoire.sante-ra.fr/Trajectoire/" target="_blank">via
                trajectoire.</a></p>

        <h2> Les frais de séjour</h2>

        <p>Aucune caution n'est demandée lors de l'admission.
            Au 1er janvier de chaque année, un arrêté du président du Conseil Général fixe les prix de journée
            applicables à l'établissement. Les frais de séjour sont payables mensuellement à terme échu au Trésor Public.
        </p>

    </div>
</template>


<style scoped>
.image {
    background-image: url("../assets/images/DSC01098.JPG");
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 1%;
    height: 1300px;
}

p{
    width: 65%;
    text-align: center;
}

a {
    color: rgb(0, 59, 161);
}

iframe {
    border: solid;
    border: 10px;
    border-color: #5A449C;
}

.underlined {
    text-decoration: underline;
}
</style>