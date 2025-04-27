<template>
	<div class="catalog-filter">
		<h1>Каталог</h1>
		<div class="catalog-filter__links">
			<a href="">По виду</a>
			<a href="">По количеству комнат</a>
			<a href="">По типу</a>
			<a href="">Дизайн интерьера</a>
			<a href="">Ремонт коттеджей</a>
		</div>
		<input type="text" placeholder=" Что мы ищем?" />
	</div>
</template>

<style scoped lang="scss">
.catalog-filter {
	display: flex;
	flex-direction: column;
	gap: 100px;
	h1 {
		font-size: 120px;
		font-weight: 500;
	}
	.catalog-filter__links {
		display: flex;
		gap: 60px;
		a {
			font-size: 30px;
			color: #848386;
			opacity: 0.4;
			transition: opacity 0.3s ease;
		}
		a:hover {
			opacity: 1;
		}
	}

	input {
		height: 100%;
		border-radius: 4px;
		border: 1px solid rgba(31, 31, 31, 0.10);
		color: #0A0A0A;
		padding: 20px;
		max-width: 910px;
		outline: none;
		&:focus {
			border: 1px solid rgba(31, 31, 31);
		}
	}
}
</style>