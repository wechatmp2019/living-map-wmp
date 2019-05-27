<template>
  <div>
    <div>
        <MyCard></MyCard>
    </div>
  </div>
</template>

<script>
    import MyCard from '@/components/cardetails/MyCard';
    export default {
        data () {
            return {
                name: 'name1',
                list: {
                    cardtype: [{
                        id: 1,
                        name: 'aaa',
                        content: 'aaaaaaaa'
                    }, {
                        id: 2,
                        name: 'bbb',
                        content: 'bbbbbbbb'
                    }, {
                        id: 3,
                        name: 'ccc',
                        content: 'cccccccc'
                    }
                    ]
                }
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
