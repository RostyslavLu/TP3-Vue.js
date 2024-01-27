<template>
  <section class="add-product">
    <div v-if="!submitted" >
      <form>
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="product.name" required />
        <label for="description">Description</label>
        <input type="text" id="description" v-model="product.description" required />
        <label for="price">Price</label>
        <input type="number" id="price" v-model="product.price" required />
        <label for="photo">Photo</label>
        <input type="text" id="photo" v-model="product.photo" required />
        <label for="category">Category</label>
        <input type="text" id="category" v-model="product.category" required />
        <div><button type="submit" @click="saveProduct">Add</button></div>
      </form>
    </div>
    <div v-else>
      <div class="button">Product saved successfully</div>
      <button @click="newProduct">
        New Product
      </button>
    </div>
  </section>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  name: 'AddProduct',
  props: ['addInv'],
  data () {
    return {
      message: null,
      submitted: false,
      product: {
        name: '',
        description: '',
        price: '',
        photo: '',
        category: ''
      }
    }
  },
  methods: {
    saveProduct () {
      console.log(this.product)
      ProductDataService.create(this.product)
        .then(response => {
          console.log(response.data)
          this.product.id = response.data.id
          this.addInv(this.product)
          this.submitted = true
          this.message = null
          this.product = {}
        })
        .catch(e => {
          console.log(e)
          this.message = e.response.data.message
        })
    },
    newProduct () {
      this.submitted = false
      this.product = {
        name: '',
        description: '',
        price: '',
        photo: '',
        category: ''
      }
    }
  }
}
</script>
