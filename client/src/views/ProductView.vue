<template>
  <div class="content">
    <h2><router-link to="/">Return</router-link></h2>
    <section class="product-card">
      <picture>
        <source v-if="product" :srcset="product.photo" type="image/webp">
        <img v-if="product" :src="product.photo" alt="Productphoto">
      </picture>
      <div class="product-info">
        <h2 v-if="product">{{ product.name }}</h2>
        <p v-if="product" class="price">$&nbsp;{{ product.price }}</p>
        <p v-if="product">{{ product.category }}</p>
        <p v-if="product">{{ product.description }}</p>
      </div>
    </section>
    <div class="controls">
      <div class="btn-edit">
        <router-link v-if="product" :to="{ name: 'edit-product', params: { id: product.id }}" class="btn">Edit</router-link>
      </div>
      <div class="btn-del"><button @click="deleteProduct">Delete</button></div>
    </div>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['inventory', 'removeInv'],
  data () {
    return {
      id: parseInt(this.$route.params.id)
    }
  },
  computed: {
    product () {
      const product = this.inventory.find((p) => {
        return p.id === Number(this.$route.params.id)
      })
      return product
    },
    index () {
      const index = this.inventory.findIndex((p) => {
        return p.id === Number(this.$route.params.id)
      })
      return index
    }
  },
  methods: {
    deleteProduct () {
      ProductDataService.delete(this.id)
        .then(response => {
          this.removeInv(this.index)
          this.$router.push({ name: 'home' })
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
