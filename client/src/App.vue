<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/product">Products</router-link>
  </nav>
  <router-view
  :inv="inventory"
  :add="addInventory"
  />
</template>

<script>
import ProductDataService from './services/ProductDataService'
export default {
  name: 'App',
  props: ['add', 'inv'],
  data () {
    return {
      inventory: []
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
  },
  methods: {
    addInventory (product) {
      this.inventory.push(product)
    }
  }
}
</script>
