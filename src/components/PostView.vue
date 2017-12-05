<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Title</label>
        </div>
        <br/>
        <h4>Description</h4>
        <textarea/>
        <div class="actions">
          <a @click.prevent="postAdd(title, Description)" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST AN ADD
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>