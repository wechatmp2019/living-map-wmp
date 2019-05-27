<template>
  <div>
    <div>
        <MyCard></MyCard>
    </div>
  </div>
</template>

<script>
    import MyCard from '@/components/carddetails/MyCard';
    export default {
        data () {
            return {
                name: 'name1',
                list: {
                    cardtype: [{
                        id: 1,
                        name: 'aaa',
                        content: 'aaaaaaaa',
                        updatetime: '2013'
                    }, {
                        id: 2,
                        name: 'bbb',
                        content: 'bbbbbbbb',
                        updatetime: '2013'
                    }, {
                        id: 3,
                        name: 'ccc',
                        content: 'cccccccc',
                        updatetime: '2013'
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
