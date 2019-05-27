<template>
  <div>
      <i-panel title="我的订阅" class = "titlecontainer">
    <view class="caption-wrap">
      <i-collapse :name="name" >
        <i-collapse-item class = "slotcontainer" v-for="item in list.cardtype" :title="item.name" :name="item.id" :key ="item.id"><view slot="content" >
        <div class = cardcontainer>
            <div class = "contentcontainer">
            {{item.content}}
            </div>
            <div class = "timecontainer">
            {{item.updatetime}}
            </div>
        </div>
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
                        name: '招生就业',
                        content: '',
                        updatetime: '2019-5-23'
                    }, {
                        id: 2,
                        name: '干货分享',
                        content: '',
                        updatetime: '2019-5-24'

                    }, {
                        id: 3,
                        name: '时事新闻',
                        content: '',
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
    padding-top: 1vh;
    text-align:center;
    font-family:'Courier New', Courier, monospace;
    font-size: large;
    font-weight: bold;
}
.contentcontainer{
    text-align: left;
    padding: 1vh;
    color: black;
    font-weight: normal
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
