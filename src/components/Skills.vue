<template>
  <section class="mt-5">
    <h2 class="mb-4">My Skills</h2>

    <div class="row">
      <div
        class="col-md-6 mt-3"
        v-for="(skill, index) in skills"
        :key="index"
      >
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
  </section>
</template>

<script setup>
const skills = [
  { name: 'HTML & CSS', value: 90 },
  { name: 'JavaScript', value: 80 },
  { name: 'Vue.js', value: 75 },
  { name: 'Git & GitHub', value: 70 },
  { name: 'Responsive Design', value: 85 },
  { name: 'Bootstrap', value: 80 },
]
</script>
