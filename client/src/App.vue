<template>
  <nav>
    <router-link to="/">Products</router-link>
    <router-link to="/add-product">Add Product</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view
    :inventory="inventory"
    :addInv="addInventory"
    :updateInv="updateInventory"
    :removeInv="removeInventory"
  />
  <MainFooter />
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
import MainFooter from '@/components/MainFooter.vue'
export default {
  data () {
    return {
      inventory: []
    }
  },
  components: {
    MainFooter
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
    },
    updateInventory (index, data) {
      this.inventory[index].name = data.name
      this.inventory[index].description = data.description
      this.inventory[index].price = data.price
      this.inventory[index].photo = data.photo
      this.inventory[index].category = data.category
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    }
  }
}
</script>
