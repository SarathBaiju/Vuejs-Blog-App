<template>
    <div id="blogs" class="display-1">
        <h1 class="display-1">Blogs</h1>
        <div id="blog-item"
        v-for="blog in blogs"
        v-bind:key="blog.id"
        >
           <h2>{{blog.name}}</h2>
           <p>{{blog.description}}</p>
           <a v-bind:href="blog.url" target="new">click for more :)</a>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
 
  apollo:{
    blogs: gql`query{
        blogs{
          id
          name
          description
          url
        }
      }`
  },

  data () {
    return {
    }
  }
}
</script>
<style scoped>
#blogs{
    text-align: center;
}
#blog-item{
    background: rgb(235, 226, 226);
}
</style>