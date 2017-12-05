const postAdd = {
  methods: {
    postAdd (title, description) {
      this.$root.$firebaseRefs.add.push(
        {
          'title': title,
          'description': description,
          'info': 'Posted by Charles on Tuesday',
          'created_at': -1 * new Date().getTime()
        }
      ).then(
        this.$router.push('/')
      )
    }
  }
}

export default postAdd
