<template>
    <Header></Header>
    <main class="Main">
        <div class="BoxDiv">
            <h1>Devoir 3 : Dynamiser un Espace Commentaire</h1>
            <h2>Description :</h2>
            <ul>
                <h1>Voici les informations et explications sur ce devoir.</h1>
                <li>Objectif : Créer un espace de commentaires interactif</li>
                <li>Technologies utilisées : HTML, CSS, JavaScript</li>
                <li>Fonctionnalités : Ajouter, supprimer, et visualiser des commentaires</li>
            </ul>
            <div>
                <h1>Visualisation du devoir :</h1>
                <iframe class="imageDevoir" src="../UnEspaceAuCommentaire/index.html" frameborder="200"></iframe>
            </div>
            
        </div>
    </main>
    <Footer></Footer>

</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
</script>

<style scoped>

.Main{
     background-image: url("../assets/image/Grille_Sur_Font_Gris.jfif");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        min-height: 100vh;
        padding: 50px 20px; /* espace autour */
        display: flex;
        justify-content: center; /* centrer horizontalement */
        align-items: start;      /* début vertical */
}

.BoxDiv{
    background-color: white;   /* bloc blanc */
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2); /* ombre légère */
  max-width: 1000px; /* largeur maximale */
  width: 100%;       /* s'adapte aux écrans plus petits */
}

.imageDevoir{
    width: 1000px;
 height: 1000px;
}

</style>