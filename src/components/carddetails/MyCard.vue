<template>
    <div class="my-card-container">
        <i-action-sheet :visible="asVisible" :actions="actions2" show-cancel @cancel="handleCancelAs" @click="handleClickItem2" :mask-closable="true">
            <view slot="header" style="padding: 16px">
                <view style="color: #444;font-size: 16px">确定吗？</view>
                <text>删除后无法恢复哦</text>
            </view>
        </i-action-sheet>
        <i-swipeout :operateWidth="180" :unclosable="true" :toggle="toggleSwipeout">
            <div slot="content" class="my-card">
                <i-tag class="my-card-tag" color="green">{{cardData.markName}}</i-tag>
                <div class="my-card-content">
                    <div class="my-card-header">
                        <div class="my-card-header-content">
                            {{ title }}
                        </div>
                    </div>
                    <div class="my-card-body">
                        <div class="my-card-body__item" v-for="(item, index) in detail" :key="index">
                            {{item}}
                        </div>
                    </div>
                </div>
            </div>
            <div slot="button" class="i-swipeout-demo-button-group" style="background:#2db7f5;">
                <div class="i-swipeout-demo-button" style="width:60px" @click="openActionSheet"><i-icon size="32" type="like_fill"></i-icon></div>
                <div class="i-swipeout-demo-button" style="width:60px" @click="openActionSheet"><i-icon size="32" type="share_fill"></i-icon></div>
                <div class="i-swipeout-demo-button" style="width:60px" @click="openActionSheet"><i-icon size="32" type="delete_fill"></i-icon></div>
            </div>
        </i-swipeout>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'my-card',
    data () {
        // as 代表 actionsheet
        return {
            asVisible: false,
            toggleSwipeout: false,
            actions2: [
                {
                    name: '删除',
                    color: '#ed3f14'
                }
            ],
            actions: [
                {
                    name: '喜欢',
                    color: '#fff',
                    fontsize: '20',
                    width: 100,
                    icon: 'like',
                    background: '#ed3f14'
                },
                {
                    name: '返回',
                    width: 100,
                    color: '#80848f',
                    fontsize: '20',
                    icon: 'undo'
                }
            ]
        };
    },
    components: {
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        type: {
            validator: (value) => {
                return ['place', 'tip'].indexOf(value) !== -1;
            },
            default: 'tip'
        },
        detail: {
            type: Array,
            default: []
        },
        cardId: {
            type: Number,
            require: true
        },
        cardData: {
            type: Object,
            require: true
        }
    },
    computed: {
    },
    methods: {
        ...mapActions([
            'cancleCollectCard'
        ]),
        handleCancelAs () {
            this.closeActionSheet();
            this.toggleSwipeout = !this.toggleSwipeout;
        },
        handleClickItem2 () {
            const action = [...this.actions2];
            action[0].loading = true;
            this.actions2 = action;

            setTimeout(() => {
                action[0].loading = false;
                this.closeActionSheet();
                this.actions2 = action;
                this.toggleSwipeout = !this.toggleSwipeout;
            }, 2000);
        },
        openActionSheet () {
            this.asVisible = true;
        },
        closeActionSheet () {
            this.asVisible = false;
        }
    }
};
</script>

<style scoped>
.my-card-container {
    border-radius: 18px;
}
.my-card {
    font-size: 14px;
    padding: 8px 16px;
    position: relative;
}
.my-card-tag {
    position:absolute;
    top: 0px;
    left: 28px;
}
.my-card-header {
    display: flex;
    padding: 12px 16px 6px;
    align-items: center
}
.my-card-header-content {
    flex: 1;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    color: #333;
}
.my-card-body {
    position: relative;
    padding: 6px 16px;
}
.my-card-body__item {
    font-size: 12px;
    color:#666;
    padding-bottom: 6px;
}
.my-card-footer {
    position: relative;
    padding: 6px 16px;
    color: #80848f;
    font-size: 12px
}
.i-swipeout-demo-button-group{
    height:100%;
    width:100%;
}
.i-swipeout-demo-button{
    width:70px;
    float:left;
    display: flex;
    height:100%;
    justify-content: center;
    background:#2d8cf0;
    color:#fff;
    align-items:center;
}
</style>
