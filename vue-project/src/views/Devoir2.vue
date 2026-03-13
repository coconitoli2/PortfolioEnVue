<template>
    <Header></Header>
    <main class="Main">
    <div class="BoxDiv">
        <iframe class="ImageDevoir" src="../Cahier_des_Charge.pdf" frameborder="200"></iframe>
    <div class ="Text">
        <h1 class="FirstH1">Le Cachier Des Charges:</h1>
        <p>C'est un Cahier Des Charges que j'ai créé pour un devoir selon lequel je devais suivre les directives d'un client pour son site web lié a sa boutique. Une fois cela terminé je devais voir s'il me fallait améliorer des choses selon les besoins non proposés et l'autorisation du client lui-même.</p>
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

.ImageDevoir{

 width: 1000px;
 height: 1000px;
}

</style>