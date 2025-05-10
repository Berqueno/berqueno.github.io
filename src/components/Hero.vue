<template>
  <section class="landing">
    <div class="row vertical-center">
      <!-- Sol taraf: İsim ve pozisyon -->
      <div class="col-lg-8 text-left pb-5">
        <h1 class="display-1">{{ fullName }}</h1>
        <p class="lead pl-2">{{ jobTitle }}</p>
      </div>

      <!-- Sağ taraf: Profil fotoğrafı -->
      <div class="col-lg-4 text-center my-auto pb-5 rounded-circle">
        <img class="img-fluid rounded-circle" :src="profileImage" alt="profile image" />
      </div>
    </div>
  </section>
</template>

<script setup>
const fullName = 'Jane Doe'
const jobTitle = 'Frontend Developer'
const profileImage = 'https://picsum.photos/512' // Dilersen gerçek fotoğraf URL'siyle değiştir
</script>
