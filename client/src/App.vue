<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
  </nav>
  <router-view
  :inventory="inventory"
  :addInv="addProduct"
  :updateInv="updateProduct"
  :removeInv="deleteProduct"
  />
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  name: 'App',
  data () {
    return {
      inventory: []
    }
  },
  methods: {
    addProduct (product) {
      ProductDataService.create(product)
        .then(response => {
          this.inventory.push(response.data)
        })
    },
    updateProduct (product) {
      ProductDataService.update(product.id, product)
        .then(response => {
          console.log(response.data)
        })
    },
    deleteProduct (id) {
      ProductDataService.delete(id)
        .then(response => {
          console.log(response.data)
        })
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
  }
}
</script>
