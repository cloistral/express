<template>
    <div>
        <north-header title="Title"
                      back-type="modal"
                      v-model="value"
                      header-type="input"
                      :search-fun="search">
        </north-header>
        <span v-text="msg"></span>
        <cube-button class="button"
                     @click="btnClick">Modal Click</cube-button>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            msg: 'ssss',
            value : ''
        }
    },
    mounted() {
        this.msg = Math.random()
    },
    methods: {
        btnClick() {
            console.log(this.value)
            this.$emit('back', '日了狗了')
        },
        search() {
            console.log(111)
        }
    },
    destroy() {
        console.log(222)
    }
}
</script>
