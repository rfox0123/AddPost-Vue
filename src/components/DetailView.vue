<template>
  <div>
    <h4>{{ add.title }}</h4>
    <br />
    <h6>Description</h6>
    <span>{{ add.description }}</span>
    <br />
    <span>{{ add.info }}</span>
    <br/>
    <br />
    <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
      ANSWER
    </router-link>
  </div>
</template>

<script>
  import { find } from 'lodash'
  export default {
    data () {
      return {
        add: null
      }
    },
    mounted () {
      this.add = find(this.$root.add, (add) => add['.key'] === this.$route.params.id)
    }
  }
</script>

<style scoped>
    .picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>