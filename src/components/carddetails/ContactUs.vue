<template>
    <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <form-item label="问题类型" prop="type">
            <i-radio-group v-model="formValidate.type">
                <Radio label="problem1">软件问题</Radio>
                <Radio label="problem2">内容问题</Radio>
            </i-radio-group>
        </form-item>
        <form-item label="Desc" prop="desc">
            <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请控制在300字以内"></i-input>
        </form-item>
        <form-item>
            <i-button type="primary" @click="handleSubmit('formValidate')">Submit</i-button>
            <i-button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</i-button>
        </form-item>
    </i-form>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    type: '',
                    desc: ''
                },
                ruleValidate: {
                    type: [
                        { required: true, message: '请选择问题类型！', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入问题详细描述！', trigger: 'blur' },
                        { type: 'string', min: 5, message: '问题描述过短', trigger: 'blur' },
                        { type: 'string', max: 300, message: '问题描述过长', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
