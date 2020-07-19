<template>
    <div id="add-blog">
        <h1>You can add a blog here</h1>
         <form>
          <label>Blog Title: </label>
          <input type="text" v-model="title" required />
          <label>Blog Content</label>
          <textarea v-model="content"></textarea>
          <label>Author :</label>
          <input type="text" v-model="author" required>  
          <button v-on:click="addNewBlogItem()">Add Blog</button>
      </form> 
  </div> 
</template>

<script>
export default {
    data(){
        return{
            title: "",
            content: "",
            author: ""
        }
    },
    methods: {
        addNewBlogItem(){
            this.$store.dispatch('addNewBlog', this.newBlogItem);
            this.newBlogItem = "";
        }
    }
    
    
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 30px auto;
    max-width: 500px;;
}
#preview{
    padding: 10px 20px;
    border: 1px solid #ddd;
}
label{
    display: block;
    margin: 20px 0 10px;
}


</style>