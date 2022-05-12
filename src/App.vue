<template>
  <div id="app">
    <h1>ADD POSTS</h1>
    <FormPost/>
    <h2><i>Count Posts</i>: <b class="counter">{{countPosts}}</b> </h2>
    <div class="post" v-for="{title,body,id} in validPosts" :key="id">
      <h2>{{title}}</h2>
      <p>{{body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
import FormPost from './components/FormPost'

export default {
  name: 'App',
  // data: () => ({
  //   posts: []
  // }),
  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts
  //   }
  // },
  computed: mapGetters(['allPosts', 'countPosts','validPosts']),
  methods: mapActions(['fetchPost']),
  async mounted() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    // const posts = await response.json()
    // this.posts = posts

    // this.$store.dispatch('fetchPost')
   await this.fetchPost(5)
  },
  components: {
   FormPost
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 40rem;
}
.post {
  border: 1px solid #beb2b2;
  border-radius: 5px;
  padding: .2rem;
  margin-bottom: 1rem;
}
.counter {
  border: 1px solid #beb2b2;
  padding: 6px;
  border-radius: 5px;
}
</style>
