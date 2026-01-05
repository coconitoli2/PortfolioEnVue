<template>
<main class="Main">
  <div class="not-found">
    <h1>404</h1>
    <h2>Page introuvable</h2>

    <a href="/">Retour au portfolio</a>
  </div>
</main>
</template>

<style scoped>



.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/image/GrilleRouge.jfif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

.not-found h1 {
  font-size: 6rem;
  margin-bottom: 10px;
}

.not-found a {
  margin-top: 20px;
  color: #4fc3f7;
  text-decoration: underline;
  cursor: pointer;
}
</style>
