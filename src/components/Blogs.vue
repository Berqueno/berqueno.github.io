<template>
  <section class="mt-5 mb-5">
    <h1 class="display-4">Some of my blogs</h1>
    <h1 class="bold-text bg-text">Blogs</h1>

    <div class="row mt-5 mb-5">
      <div
        class="col-md-4"
        v-for="(blog, index) in blogs"
        :key="index"
      >
        <div class="blog-entry">
          <a :href="blog.link">
            <img class="img-fluid" :src="blog.image" />
          </a>
          <div class="text p-4 d-block">
            <div class="meta mb-3">
              <div>{{ blog.date }}</div>
            </div>
            <h3 class="heading">
              <a class="link" :href="blog.link">{{ blog.title }}</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const blogs = [
  {
    title: 'You like jazz?',
    date: 'July 22, 2020',
    image: 'https://placeimg.com/640/640/any',
    link: '#',
  },
  {
    title: 'You like jazz?',
    date: 'July 22, 2020',
    image: 'https://placeimg.com/640/640/any',
    link: '#',
  },
  {
    title: 'You like jazz?',
    date: 'July 22, 2020',
    image: 'https://placeimg.com/640/640/any',
    link: '#',
  },
  {
    title: 'You like jazz?',
    date: 'July 22, 2020',
    image: 'https://placeimg.com/640/640/any',
    link: '#',
  },
  {
    title: 'You like jazz?',
    date: 'July 22, 2020',
    image: 'https://placeimg.com/640/640/any',
    link: '#',
  },
  {
    title: 'You like jazz?',
    date: 'July 22, 2020',
    image: 'https://placeimg.com/640/640/any',
    link: '#',
  },
]
</script>
