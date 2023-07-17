<template>
  <div class="post">
    <h1>This is an post page</h1>
  </div>
  <div class="postList">
    <h1>Post List</h1>
    <h3 v-if="errorMsg">{{errorMsg}}</h3>
    <table border="1">
      <tr>
        <td>ID</td>
        <td>Username</td>
        <td>Post</td>
        <td>Like</td>
        <td>Share</td>
        <td>Comment</td>
        <td>Action</td>
      </tr>
      <tr v-for="post in postList" :key="post._id">
          <td>{{post._id}}</td>
          <td>{{post.username}}</td>
          <td>{{post.post}}</td>
          <td>{{post.like}}</td>
          <td>{{post.share}}</td>
          <td>{{post.comment}}</td>
          <!-- <td>
            <button @click="getData()">Get</button> 
            <button @click="findAllData()">Find All</button> 
          </td> -->
      </tr>
      
    </table>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        postList: [],
        errorMsg: '',
        formData: {
          id:undefined,
          username : '',
          post : '',
          like : '',
          share : '',
          comment : ''
        }
      }
    },
    methods: {
      getData(){
        axios
        .get('http://localhost:3000/api/v1/posts')
        .then((response) => {
          console.log(response);
          this.postList = response.data.docs;
        }).catch((error) => {
          console.log(error);
          this.errorMsg = "Error"
        })
      }
      
    },
      deleteData(id){
        axios   
        .delete('http://localhost:3000/api/v1/users/'+ id)
        .then((response) => {
          console.log(response);
          this.getData();
        }).catch((error) => {
          console.log(error);
          this.errorMsg = "Error"
        })
      },
      updateData(){
        console.log(this.formData);
        axios
        .patch('http://localhost:3000/api/v1/users/'+ this.formData._id,this.formData)
        .then((response) => {
          console.log(response);
          this.getData();
        }).catch((error) => {
          console.log(error);
          this.errorMsg = "Error"
        })
      },
    mounted() {
      this.getData();
    }
  }
</script>