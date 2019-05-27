<template>
  <div>
    <div>
        <Feedback></Feedback>
    </div>
  </div>
</template>

<script>
    import Feedback from '@/components/carddetails/Feedback';
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
        components: {
            Feedback
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
