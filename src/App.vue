<template>
  <Navbar />
  <div class="container">
    <Hero />
    <About />
    <Skills />
    <TechStack />
    <Experience />
    <Blogs />
    <Contact />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import TechStack from './components/TechStack.vue'
import Experience from './components/Experience.vue'
import Blogs from './components/Blogs.vue'
import Contact from './components/Contact.vue'
</script>
