<template>
	<div class="container home-page">
		<h1>Home</h1>
		<HelloComponent name="World" />
		<hr>
		<p>This is the VUE+webpack SPA starter</p>

		<div class="row">
			<div class="col-md">
				<div class="jumbotron">
					<i class="fab fa-vuejs fa-5x"></i>
					<hr>
					<p>VUE</p>
				</div>
			</div>
			<div class="col-md">
				<div class="jumbotron">
					<i class="fas fa-cube fa-5x"></i>
					<hr>
					<p>Webpack</p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md">
				<div class="jumbotron">
					<i class="fab fa-css3 fa-5x"></i>
					<hr>
					<p>SCSS</p>
				</div>
			</div>
			<div class="col-md">
				<div class="jumbotron">
					<i class="fas fa-minus-square fa-5x"></i>
					<hr>
					<p>SCSS with minify</p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md">
				<div class="jumbotron">
					<i class="fab fa-autoprefixer fa-5x"></i>
					<hr>
					<p>SCSS with autoprefixer</p>
				</div>
			</div>
			<div class="col-md">
				<div class="jumbotron">
					<i class="fab fa-node-js fa-5x"></i>
					<hr>
					<p>NodeJS</p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md">
				<div class="jumbotron">
					<i class="fas fa-images fa-5x"></i>
					<hr>
					<p>Static assets handling</p>
				</div>
			</div>
			<div class="col-md">
				<div class="jumbotron">
					<i class="fab fa-font-awesome fa-5x"></i>
					<hr>
					<p>Pre configured fontawesome</p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md">
				<div class="jumbotron">
					<i class="fab fa-bootstrap fa-5x"></i>
					<hr>
					<p>Pre configured bootstrap</p>
				</div>
			</div>
			<div class="col-md">
			</div>
		</div>

	</div>
</template>

<script>
	import HelloComponent from 'components/HelloComponent'

	export default {
		components: {
			HelloComponent
		}
	}
</script>