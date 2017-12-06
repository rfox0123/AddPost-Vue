<template>
  <div class="mdl-grid">
    <div v-for="picture in this.$root.add" @click="displayDetails(picture['.key'])">
      <div class="demo-card-square mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
          <h5 class="mdl-card__title-text">{{ picture.title }}</h5>
        </div>
        <div>
          <h5>Description</h5>
          <span>{{ picture.description }}</span>
        </div>
      </div>
      <router-link class="add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/post">
        <i class="material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      displayDetails (id) {
        this.$router.push({ name: 'detail', params: { id: id } })
      },
      getAdds () {
        if (navigator.onLine) {
          this.saveAddsToCache()
          return this.$root.add
        } else {
          return JSON.parse(localStorage.getItem('adds'))
        }
      },
      saveAddsToCache () {
        this.$root.$firebaseRefs.add.orderByChild('created_at').once('value', (snapchot) => {
          let cachedAdds = []
          snapchot.forEach((addSnapchot) => {
            let cachedAdd = addSnapchot.val()
            cachedAdd['.key'] = addSnapchot.key
            cachedAdds.push(cachedAdd)
          })
          localStorage.setItem('adds', JSON.stringify(cachedAdds))
        })
      },
      mounted () {
        this.saveAddsToCache()
      }
    }
  }
</script>

<style scoped>
  .add-picture-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  .image-card {
    position: relative;
    margin-bottom: 8px;
  }
  .image-card__picture > img {
    width:100%;
  }
  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
  }
  .image-card__comment > span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
  .demo-card-square > .mdl-card__title {
    color: #fff;
    background: black;
  }
  .demo-card-square mdl-card mdl-shadow--2dp{
    padding-right: 5em;
  }
</style>
