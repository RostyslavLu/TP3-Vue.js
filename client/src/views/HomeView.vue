<template>
  <h1 class="header-catalog">Products catalog</h1>
  <section class="products">
    <div v-for="(product, i) in inventory" :key="i" class="card">
      <img :src="product.photo" :alt="product.name" style="width:100%">
      <h2>{{ product.name }}</h2>
      <p class="price">$&nbsp;{{ product.price }}</p>
      <p>{{ product.category }}</p>
      <router-link :to="{ name:'product', params: {id: product.id}}" class="btn-details">Details</router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ['inventory']
}
</script>
