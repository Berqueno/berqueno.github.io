<template>
  <section class="mt-5">
    <h1 class="display-4">Let's Talk</h1>
    <h1 class="bold-text bg-text">Contact</h1>

    <div class="text-left">
      <div class="pt-5">
        <h2 class="mb-5">
          Have a great product and need a {{ jobProfile }} or just want to have a chat?
          <br />
          My inbox is always open!
        </h2>
        <ul class="social-links list-unstyled mt-4">
          <li>
            <a href="#"><ion-icon name="mail-outline"></ion-icon></a>
          </li>
          <li>
            <a href="#"><ion-icon name="logo-github"></ion-icon></a>
          </li>
          <li>
            <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
          </li>
          <li>
            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-5 mb-5 text-center">
      <h4>Made with ♥ by Kartik Choudhary</h4>
    </div>
  </section>
</template>

<script setup>
const jobProfile = 'developer' // Burayı isteğine göre değiştirebilirsin
</script>
