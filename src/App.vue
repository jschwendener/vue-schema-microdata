<template>
	<div id="app">
		<div v-schema:scope="{ type: 'ItemList' }">
			<div v-schema:scope="{ type: 'Product', prop: 'itemListElement' }">
				<a href="#" v-schema="{ prop: 'url'}">
					<img src="https://via.placeholder.com/150x100?text=ProductImage" v-schema="{ prop: 'image' }" />
				</a>
				<h2 v-schema="{ prop: 'name' }">Product name</h2>
				<h4 v-schema="{ prop: 'category' }">Product category</h4>
				<div v-schema:scope="{ type: 'Offer', prop: 'offers' }">
					<span v-schema="{ prop: 'priceCurrency', content: 'USD' }">$</span>
					<span v-schema="{ prop: 'price' }">129.80</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "app"
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
