<script setup>
import InfoBlock from '@/components/CapitalSections/InfoBlock.vue'
import TheHeader from '@/components/TheHeader.vue'
import AnotherRepair from '@/components/CapitalSections/AnotherRepair.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
	<TheHeader color='black'/>
	<img src="/capital-img.png" alt="" class="capital-img">
	<InfoBlock/>
	<AnotherRepair/>
	<Footer />
</template>

<style lang='scss'>
.capital-img {
	object-fit: cover;
	padding-left: 50px;
}
</style>