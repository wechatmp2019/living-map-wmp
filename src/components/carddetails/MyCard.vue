<template>
  <div>
      <i-panel title="我的卡包" class = "titlecontainer">
    <view class="caption-wrap">
      <i-collapse :name="name" >
        <div class = "slotcontainer">
        <i-collapse-item v-for="item in list.cardtype" :title="item.name" :name="item.id" :key ="item.id"><view slot="content" >
        <div class = cardcontainer>
            <div class = "contentcontainer">
            {{item.content}}
            </div>
            <div class = "timecontainer">
            {{item.updatetime}}
            </div>
        </div>
          </view> </i-collapse-item>
          </div>
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
                        name: '校医院',
                        content: '校医院挂号须知',
                        updatetime: '2019-5-23'
                    }, {
                        id: 2,
                        name: '校医院',
                        content: '如何开具转院单',
                        updatetime: '2019-5-24'

                    }, {
                        id: 3,
                        name: '保卫处',
                        content: '如何借户籍卡',
                        updatetime: '2019-5-27'
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
<style>
.titlecontainer{
    font-weight: bold;
    padding-top: 10vh;
}
.slotcontainer{
    padding-bottom: 1vh;
    text-align:center;
    font-family:'Courier New', Courier, monospace;
    font-size: large;
    font-weight: bold;
    border-style: ridge;
}
.contentcontainer{
    text-align: left;
    padding: 1vh;
    color: black;
    font-weight: normal;
}
.timecontainer{
    padding: 1vh;
    text-align:right;
    color:gray;
    font-style: italic;
    font-size: medium;
    font-weight: bold;
}
</style>
