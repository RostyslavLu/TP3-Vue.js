<template>
  <h1 class="header">Add Product</h1>
  <div class="add-product">
    <div class="message">{{ message }}</div>
    <div v-if="!submitted">
      <form>
        <div class="field">
          <label for="productName">Nom</label>
          <input type="text" id="productName" v-model="product.name" required />
        </div>
        <div class="field">
          <label for="productDescription">Description</label>
          <input type="text" id="productDescription" v-model="product.description" required />
        </div>
        <div class="field">
          <label for="productPrice">Price</label>
          <input type="number" id="productPrice" v-model="product.price" required />
        </div>
        <div class="field">
          <label for="productPhoto">Photo</label>
          <input type="text" id="productPhoto" v-model="product.photo" required />
        </div>
        <div class="field">
          <label for="productCategory">Category</label>
          <select id="productCategory" v-model="product.category" required>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Toys">Toys</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="btn"><button type="submit" @click="saveProduct">Add Product</button></div>
      </form>
    </div>
    <div v-else class="field">
      <h2>Product added successfully!</h2>
      <div class="btn"><button @click="submitted = false">Add Another</button></div>
      <div class="btn-blue">
        <router-link to="/">Back to Products</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['addInv'],
  data () {
    return {
      message: null,
      submitted: false,
      product: {
        name: '',
        description: '',
        price: '',
        photo: 'https://dummyimage.com/640x360/fff/aaa',
        category: ''
      }
    }
  },
  methods: {
    saveProduct () {
      ProductDataService.create(this.product)
        .then(response => {
          this.product.id = response.data.id
          this.addInv(response.data)
          this.submitted = true
          this.message = null
        })
        .catch(e => {
          console.log(e)
          this.message = e.response.data.message
        })
      this.submitted = true
      this.product = {}
    }
  }
}
</script>
