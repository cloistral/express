<template>
    <div>
        <north-header title="用户编辑">
            <div slot="right"
                 @click="deleteUser">删除</div>
        </north-header>
        <div class="user-info">
            <div v-text="'用户名: ' + query.username"></div>
            <div v-text="'密码: ' + query.password"></div>
        </div>
        <div class="cell">
            <span>地址</span>
            <cube-input class="cube-input"
                        v-model="param.address"
                        placeholder="请输入地址"></cube-input>
        </div>
        <div class="cell"
             @click="showDatePicker">
            <span>出生日期</span>
            <cube-input class="cube-input"
                        readonly
                        v-model="param.birthday"
                        placeholder="请选择生日"></cube-input>
        </div>
        <cube-button class="button"
                     @click="submitHandler">确认</cube-button>
    </div>
</template>

<script>
export default {
    name: 'Test',
    props: ['options'],
    data() {
        return {
            param: {
                address: '',
                birthday: ""
            },
            datePicker: null,
        }
    },
    computed: {
        query() {
            let type = typeof this.options
            let options
            if (type == 'string') return options = JSON.parse(this.options)
            else return {}
        }
    },
    mounted() { },
    methods: {
        showDatePicker() {
            if (!this.datePicker) {
                this.datePicker = this.$createDatePicker({
                    title: '请选择生日',
                    min: new Date(2008, 7, 8),
                    max: new Date(2020, 9, 20),
                    value: new Date(),
                    onSelect: (date, selectedVal, selectedText) => {
                        this.param.birthday = selectedVal.join('-')
                    },
                    onCancel: () => { }
                })
            }
            this.datePicker.show()
        },
        submitHandler() {
            let param = {
                id: this.query._id,
                address: this.param.address,
                birthday: this.param.birthday
            }
            this.$http.post('/api/editUser', param)
                .then((res) => {
                    console.log(res)
                })
        },
        deleteUser() {
            this.$http.delete('/api/deleteUser',{
                data: { id: this.query._id }
            }).then((res) => {
                console.log(res)
            })
        }
    },
    destroy() { }
}
</script>

<style lang="stylus" scoped>
.user-info {
    width: 95%;
    height: 50px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        flex: 1;
    }
}
</style>
