<template>
  <section class="mt-5 mb-5">
    <h4 class="display-4">A little about me,</h4>
    <div class="row">
      <!-- Sol taraf: Hakkımda ve sosyal medya -->
      <div class="col-lg-6 wrap text-left">
        <div class="about-desc">
          <h1 class="bold-text">About</h1>
          <div class="pt-5">
            <h2 class="mb-5">Hello!</h2>
            <p>
              Most bee jobs are small ones. But bees know that every small job, if it's done well,
              means a lot. But choose carefully because you'll stay in the job you pick for the rest of your life.
            </p>
            <ul class="social-links list-unstyled mt-4">
              <li><a href="#"><ion-icon name="mail-outline"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-github"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Sağ taraf: Yetenekler -->
      <div class="col-lg-6 wrap align-content-center">
        <div class="row mt-5 flex-column">
          <div class="col-md-8">
            <h2 class="mb-4">My Skills</h2>
          </div>

          <div class="col-md-6 mt-3" v-for="(skill, index) in skills" :key="index">
            <div class="progress-wrap">
              <h4>{{ skill.name }}</h4>
              <div class="progress progress-style">
                <div
                  class="progress-bar color-1"
                  role="progressbar"
                  :aria-valuenow="skill.value"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{ width: skill.value + '%' }"
                ></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Skill 1', value: 75 },
  { name: 'Skill 2', value: 60 },
  { name: 'Skill 3', value: 85 },
]
</script>
