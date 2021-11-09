<template>
    <div id="blogs" class="display-1">
        <h1 class="display-1">Blogs</h1>
        <div id="blog-item"
        v-for="blog in blogs"
        v-bind:key="blog.id"
        >
           <h2>{{blog.name}}</h2>
           <p>{{blog.description}}</p>
           <a v-bind:href="blog.url">click for more :)</a>
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
      // blogs: [
      //     {
      //         id: 1,
      //         name: 'Sensitive information hiding',
      //         description: 'This blogs shows how to hide sensitive information like username and password with *** in c#',
      //         url: 'https://www.c-sharpcorner.com/blogs/sensitive-information-hiding'
      //     },
      //       {
      //         id: 2,
      //         name: 'GraphQl API Client Integration In ASP.NET Core 3.1',
      //         description: 'This method shows how to integrate an graphql api client in .net core project',
      //         url: 'https://www.c-sharpcorner.com/blogs/graphql-api-client-integration-in-asp-net-core-31'
      //     }
      // ]
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