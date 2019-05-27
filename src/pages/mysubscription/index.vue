<template>
  <div>
    <div class = "main-container">
        <MySub></MySub>
    </div>
  </div>
</template>

<script>
    import MySub from '@/components/carddetails/MySubscription';
    export default {
        data () {
            return {
            };
        },
        components: {
            MySub
        },
        methods: {
            handleClick () {
            }
        }
    };
</script>
<style>
.main-container{
    padding: 2vh
}
</style>
