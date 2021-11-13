<template>
  <div class="container">
    <h2>AddBlogs</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input 
        type="text" 
        class="form-control" 
        id="name" 
        v-model="blogName"/>

      <label for="description">Description:</label>
      <input
        type="text"
        class="form-control"
        id="description"
        v-model="description"
      />

      <label for="url">Url:</label>
      <input
        type="url"
        class="form-control"
        id="url"
        v-model="url"
      />
      <br />
      <button v-on:click="addBlog" class="btn btn-primary">Add Blog :)</button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  data() {
    return {
      blogName: "",
      description: "",
      url: "",
    };
  },
  methods: {
    async addBlog() {
      const result = await this.$apollo.mutate({

          mutation: gql`mutation ($blog: blog_Blogs_insert_input!){
                        insertBlog(object: $blog) {
                          id
                        }
                      }`,
          variables:{
            blog:{
              name: this.blogName,
              description: this.description,
              url: this.url
            }
          }            
      });
       
      if(result.data != null){
        alert('data saved successfully... :)');
      }
      
     window.location.href = '/';
    },
  },
};
</script>


<style scoped>
.container {
  text-align: center;
}
</style>