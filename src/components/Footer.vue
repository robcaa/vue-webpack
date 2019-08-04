<template>
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
            <small>
                Copyright &copy; {{year}} <a href="http://robertgirhiny.com">robertgirhiny.com</a>
            </small>
        </div>
    </footer>
</template>

<script>
    export default {
        data: function () {
            return {
                year: 2019,
            }
        },
        mounted: function () {
            this.year = new Date().getFullYear();
        }
    }
</script>

<style lang="scss" scoped>
    a {
        color: #fff;
        &:hover {
            color: #fca;
        }
    }

    #sticky-footer {
        flex-shrink: none;
    }
</style>