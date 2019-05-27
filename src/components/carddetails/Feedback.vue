<template>
<div class="feedback-container">
    
    <i-panel title="问题反馈">
    <i-radio-group  :current="current.qtype" @change="handleChange">
        <i-radio v-for="item in list.qtype" :position="position" :key="item.id" :value="item.name">
        </i-radio>
    </i-radio-group>   
    <i-input :value= feedback type="textarea" title="问题描述" placeholder="请控制在300字以内" maxlength="300" />
    <div class = 'button-container'>
     <i-button type="primary" @click="submit" class = "submitbutton">确认提交</i-button>
    </div>
</i-panel>
</div>
</template>
<script>
    export default({
        data () {
            return {
                feedback: '',
                checked: false,
                disabled: false,
                list: {
                    qtype: [{
                        id: 1,
                        name: '软件问题'
                    }, {
                        id: 2,
                        name: '内容问题'
                    }, {
                        id: 3,
                        name: '其他问题'
                    }
                    ]
                },
                current: {
                    qtype: '软件问题'
                }
            };
        },
        methods: {
            handleChange (e) {
                this.current.qtype = e.target.value;
            },
            submit () {
                wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000
                });
            }
        }
});
</script>
<style scoped>
.submitbutton{
    background: aqua
}
.button-container {
  width:50%;
  margin: 0 auto;
  background:#fff;
}
.feedback-container{
    padding: 1vh
}
</style>
