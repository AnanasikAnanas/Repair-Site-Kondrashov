<template>
	<div class="package-card">
		<div class="package-card__header">
			<Rhombus/>
			<p>{{ packageType }}</p>
		</div>
		<p class="package-card__name">{{ packageName }}</p>
		<p class="package-card__price">{{ price }}</p>
		<a href="#">Подробнее</a>
	</div>
</template>

<script>
import Rhombus from '../icons/Rhombus.vue'
export default {
	components: {
		Rhombus
	},
	props: {
		packageType: {
			type: String,
			required: true,
		},
		packageName: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
	}
}
</script>


<style lang="scss" scoped>
.package-card {
	display: flex;
	padding: 60px 50px;
	justify-content: space-between;
	align-items: start;
	border-top: 1px solid rgba(132, 131, 134, 0.1);
	border-bottom: 1px solid rgba(132, 131, 134, 0.1);
	p{
		margin: 0;
	}
	.package-card__header {
		display: flex;
		align-items: center;
		gap: 15px;
		p {
			font-size: 18px;
			font-weight: 400;
			width: 200px;
		}
	}
	.package-card__name {
		font-size: 30px;
		font-weight: 400;
		color: #000;
		max-width: 450px;
		margin: 0;
	}
	.package-card__price {
		font-size: 18px;
		font-weight: 400;
	}
	a {
		font-size: 18px;
		font-weight: 400;
		color: #848386;
	}
}
</style>