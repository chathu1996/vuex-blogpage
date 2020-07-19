<template>
  <div id="app">
   <router-view></router-view>
   
  </div>
</template>

<script>
import showBlog from './components/showBlog'
import addBlog from './components/addBlog'


export default {
  data(){
    return{
      'app-show': showBlog,
      'app-add': addBlog
    }
  }
 
}
</script>

<style>
body{
  margin: 0;
  font-family: sans-serif ;
}

.postItem{
  margin: 20px;
  padding: 10px;
  background-color: chocolate;
}

</style>
