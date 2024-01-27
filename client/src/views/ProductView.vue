<template>
  <header>
    <div class="add-product">
      <button @click="toggleAddProduct">Add Product</button>
      <AddProduct v-if="showAddProduct" :add="add" />
    </div>
  </header>
  <section class="products">
    <div v-for="product in products" :key="product.id" class="card">
      <img src="https://placehold.co/600x400" :alt="product.name" style="width:100%">
      <h2>{{ product.name }}</h2>
      <p class="price">$&nbsp;{{ product.price }}</p>
      <p>{{ product.category }}</p>
    </div>
  </section>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
import AddProduct from '@/components/AddProduct.vue'
export default {
  name: 'ProductView',
  props: ['add', 'inv'],
  components: {
    AddProduct
  },
  data () {
    return {
      showAddProduct: false,
      products: []
    }
  },
  methods: {
    toggleAddProduct () {
      this.showAddProduct = !this.showAddProduct
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
