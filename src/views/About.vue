<template>
  <div class="about">
    <h1>Открытый и гласный суд</h1>
  </div>
  <test-album/>
</template>
<script>
// @ is an alias to /src
import TestAlbum from '@/components/TestAlbum'

export default {
  name: 'About',
  components: {
    TestAlbum
  }
}
</script>