<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link to="/home" class="navbar-brand">VUE - WEBPACK</router-link>
		<button :class="opened ? 'navbar-toggler collapsed' : 'navbar-toggler'" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" :aria-expanded="opened" aria-label="Toggle navigation" @click="toggleNavbar">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div :class="opened?'collapse navbar-collapse show':'collapse navbar-collapse'" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<router-link to="/home" tag="li" class="nav-link" @click.native="navigate"><i class="fas fa-igloo"></i> HOME</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/foo" tag="li" class="nav-link" @click.native="navigate"><i class="fas fa-frog"></i> FOO</router-link>
				</li>
			</ul>
			<form class="form-inline my-2 my-lg-0" @submit.prevent="search">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchString">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>
</template>

<script>
	export default {
		data: function() {
			return {
				searchString: "",
				opened: false,
			}
		},
		methods: {
			search() {
				alert(`TODO search ${this.searchString}`);
				this.searchString = "";
			},
			toggleNavbar() {
				this.opened = !this.opened;
			},
			navigate() {
				this.opened = false;
			},
		},
	}
</script>

<style lang="scss" scoped>
	.nav-link {
		cursor: pointer;
	}
</style>