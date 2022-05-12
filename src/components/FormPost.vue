<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title"/>
    <input type="text" placeholder="body" v-model="body"/>
    <button type="submit">Add post</button>
<!--    <hr>-->
  </form>

</template>
<script>
import {mapMutations} from "vuex";

export default {
  data:() => ({
    title: '',
    body: ''
  }),
  methods: {
    ...mapMutations(['createPost']),
    submit() {
     this.createPost({
       title: this.title,
       body: this.body,
       id: Date.now()
     })
      this.title = this.body = ''
    }
  }
}
</script>
<style>
input {
  display: block;
  width: 100%;
  border: 1px solid #b6b0b0;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
button {
  padding: 10px;
  border-radius: 5px;
  background: #d5dee7;
  cursor: pointer;
}
</style>