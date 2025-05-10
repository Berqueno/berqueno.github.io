<template>
  <section class="mt-5">
    <h1 class="display-4">Experience</h1>
    <h1 class="bold-text bg-text">Profile</h1>

    <div class="row d-flex">
      <div class="col-md-10">
        <h4 class="dmb-4 mt-2 profile-text">
          I'm a {{ jobProfile }} from {{ location }}. Bees have 100 percent employment, but we do jobs like taking the crud out.
        </h4>

        <!-- Experience List -->
        <div class="mt-3">
          <div
            class="py-4"
            v-for="(exp, index) in experiences"
            :key="'exp-' + index"
          >
            <div class="desc">
              <h4>{{ exp.position }}</h4>
              <p>{{ exp.company }}</p>
            </div>
            <div>
              <p>{{ exp.start }} - {{ exp.end }}</p>
            </div>
          </div>
        </div>

        <!-- Education -->
        <h1 class="display-4 mt-5">Education</h1>
        <h1 class="bold-text bg-text">Academics</h1>

        <div
          class="py-4"
          v-for="(edu, index) in education"
          :key="'edu-' + index"
        >
          <div class="desc">
            <h4>{{ edu.degree }}</h4>
            <p>{{ edu.school }}</p>
          </div>
          <div>
            <p>{{ edu.start }} - {{ edu.end }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobProfile = 'UX Designer'
const location = 'Istanbul'

const experiences = [
  {
    position: 'UX & Interaction Designer',
    company: 'The Bee Company',
    start: '2020',
    end: '2020',
  },
  {
    position: 'Frontend Developer',
    company: 'Honey Tech',
    start: '2021',
    end: '2023',
  },
  {
    position: 'UI Designer',
    company: 'Buzz Co.',
    start: '2019',
    end: '2020',
  },
]

const education = [
  {
    degree: 'Master Degree in Computer Science',
    school: 'Harvard University',
    start: '2013',
    end: '2014',
  },
  {
    degree: 'Bachelor of Design',
    school: 'Beehive Institute',
    start: '2009',
    end: '2013',
  },
  {
    degree: 'High School',
    school: 'Sting High School',
    start: '2005',
    end: '2009',
  },
]
</script>
