<template>
  <div>
    <div class = "main-container">
        <MyCard></MyCard>
    </div>
  </div>
</template>

<script>
    import MyCard from '@/components/carddetails/MyCard';
    export default {
        data () {
            return {
            };
        },
        components: {
            MyCard
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
