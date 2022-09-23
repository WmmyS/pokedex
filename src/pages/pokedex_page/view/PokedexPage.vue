<template>
  <q-page>
    pokedéx
  </q-page>
</template>
<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
  name: 'PokedexPage',
})
</script>
<style lang="scss">
  @import '../../../css/quasar.variables.scss';

  .q-page {
    background-image: map-get($gradients , greyGradient);
  }

</style>
