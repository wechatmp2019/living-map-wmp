<template>
  <div>
      <i-panel title="我的卡包">
    <view class="caption-wrap">
      <i-collapse :name="name" >
        <i-collapse-item v-for="item in list.cardtype" :title="item.name" :name="item.id" :key ="item.id"><view slot="content" >
            {{item.content}}
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
        methods: {
            handleClick () {
            }
        }
    };
</script>