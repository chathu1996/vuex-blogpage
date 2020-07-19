<template>
  <div id="preview-blog">
      <h1>Preview Blog</h1>
        <div v-for="post in getPosts" :key="post.id" class="postItem">
            <h1>{{ post.title }}</h1>
            <small>{{ post.author}}</small>
        </div>
     <button v-on:click="deleteBlog()">Delete Todo</button>
  </div>
</template>

<script>

export default {
    methods: {
       deleteBlog(){
           this.$store.dispatch('deleteBlog', this.blog);
       } 
    },
    computed: {
        getPosts(){
            return this.$store.getters.getPosts;
        }
    }
}
</script>

<style scoped>
#preview-blog *{
    box-sizing: border-box;
    width: 250px;
    margin: 5px auto;
}
h1{
    text-align: center;
    color: blueviolet;
}
#preview-blog ul{
    display: flex;
    justify-content: space-between;
}
</style>