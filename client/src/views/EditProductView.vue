<template>
  <h1 class="header">Edit Product</h1>
  <section class="edit-product">
    <div v-show="message" class="message">{{ message }}</div>
    <div v-if="!submitted">
      <form>
        <div class="field">
          <label for="productName">Name</label>
          <input id="productName" v-model="product.name" required>
        </div>
        <div class="field">
          <label for="productDescription">Description</label>
          <textarea id="productDescription" v-model="product.description" required></textarea>
        </div>
        <div class="field">
          <label for="productPrice">Price</label>
          <input id="productPrice" v-model="product.price" required>
        </div>
        <div class="field">
          <label for="productPhoto">Photo</label>
          <input id="productPhoto" v-model="product.photo" required>
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
        <div class="btn"><button type="submit" @click="updateProduct">Update</button></div>
      </form>
    </div>
    <div v-else class="field">
      <h2>Product updated successfully!</h2>
      <div class="btn-blue">
        <router-link to="/">Back to Products</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['inventory', 'updateInv'],
  data () {
    return {
      message: null,
      submitted: false,
      product: {},
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    updateProduct () {
      ProductDataService.update(this.id, this.product)
        .then(response => {
          this.message = response.data.message
          this.submitted = true
          this.updateInv(this.productIndex, this.product)
        })
        .catch(e => {
          console.log(e)
          this.message = e.response.data.message
        })
    }
  },
  computed: {
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
    }
  },
  mounted () {
    ProductDataService.get(this.id)
      .then(response => {
        this.product = response.data
      })
  }
}
</script>
