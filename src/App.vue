<template>
  <div class="app-container d-flex flex-column">
    <Navigation />
    <div class="page-container">
        <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script>
    import Navigation from 'components/Navigation';
    import Footer from 'components/Footer';
    import HelloComponent from 'components/HelloComponent';

    export default {
        components: {
            Navigation,
            Footer,
            HelloComponent
        },
        data: function() {
            return {
                message: 10,
            }
        },
        methods: {
            btnClick() {
                alert(this.message);
            },
        }
    }
</script>


<style scoped lang="scss">
    .full-width {
        width: 100%;
    }
    .center-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div {
        > p {
            color: lime;
            text-align: center;
        }
    }
</style>