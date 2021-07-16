<template></template>


<script>

import {parse} from 'papaparse';

export default {
  data: function () {
    return {
      questions: []
    }
  },
  beforeMount() {
    this.readFile()
  },
  methods: {
    readFile() {
      /* return first object in FileList */
      console.log(this.file)
      parse(this.file, {
        header: true,
        complete: this.onComplete // your vue methods
      });
    },
    onComplete(results) {
      this.gridData = results.data
      this.gridColumns = results.meta['fields']
    }
  }

}

</script>
