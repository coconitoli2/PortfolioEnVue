<template>
<header>
    <nav class="NavBar">
       <a :href="`/`">
        <img class="IconPortfolio" src="../assets/icon/pixil-frame-0.png" alt="IconPortfolio">
       </a>
         <h1 class="ParagrapheNav" >Mon Portfolio</h1>
       <img class="IconGestion" src="../assets/icon/pixil-frame-1.png" alt="IconGestion">  
        </nav>
</header>
</template>
<style scoped>
.NavBar{
    display: flex;
    background-image: url("../assets/image/fond-sac-plastique-froisse-rouge.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
   .IconPortfolio:hover {
        /*Celà crée un effet de zoom sur l'icon*/
    transform: translateX(0%) scale(1.2) rotate(0deg);
    filter: brightness(1.2);
    }
</style>