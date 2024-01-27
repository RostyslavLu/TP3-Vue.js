<template>
  <section class="products">
    <div v-for="product in products" :key="product.id" class="card">
      <img src="https://placehold.co/600x400" :alt="product.nom" style="width:100%">
      <h2>{{ product.nom }}</h2>
      <p class="price">$&nbsp;{{ product.price }}</p>
      <p>{{ product.category }}</p>
    </div>
  </section>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  name: 'ProductView',
  data () {
    return {
      products: []
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.products = response.data
      })
  }
}
</script>
