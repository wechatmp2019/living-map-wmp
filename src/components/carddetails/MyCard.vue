<template>
  <div>
      <i-panel title="我的卡包">
    <view class="caption-wrap">
      <i-collapse :name="name" >
        <i-collapse-item v-for="item in list.cardtype" :title="item.name" :name="item.id" :key ="item.id"><view slot="content" >
            {{item.content}}
            {{item.updatetime}}
          </view> </i-collapse-item>
      </i-collapse>
    </view>
    </i-panel>
  </div>
</template>


<script>
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
        methods: {
            handleClick () {
            }
        }
    };
</script>