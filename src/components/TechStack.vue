<template>
  <section class="interests pt-5 pb-5">
    <h1 class="display-4">Tech I'm familiar with</h1>
    <h1 class="bold-text bg-text">Tech Stack</h1>

    <div class="row pt-5">
      <div
        class="col-lg-3 col-md-4 mt-4"
        v-for="(tech, index) in techs"
        :key="index"
      >
        <div class="icon-box">
          <ion-icon :name="tech.icon"></ion-icon>
          <h3>{{ tech.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const techs = [
  { icon: 'logo-html5', name: 'HTML5' },
  { icon: 'logo-css3', name: 'CSS3' },
  { icon: 'logo-javascript', name: 'JavaScript' },
  { icon: 'logo-vue', name: 'Vue.js' },
  { icon: 'logo-nodejs', name: 'Node.js' },
  { icon: 'logo-github', name: 'GitHub' },
  { icon: 'logo-react', name: 'React' }, // örnek olarak bırakıldı
  { icon: 'logo-python', name: 'Python' },
]
</script>
