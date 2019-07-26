<template>
    <div class="north-header">
        <template v-if="headerType == 'normal'">
            <div class="left"
                 @click="backClick">
                <img src="../assets/back_white.png"
                     width="25">
            </div>
            <div class="middle"
                 v-text="title"></div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </template>
        <template v-else-if="headerType == 'input'">
            <div class="left-icon"
                 @click="backClick">
                <img src="../assets/back_white.png"
                     width="25">
            </div>
            <div class="header-input-container">
                <cube-input @input="$emit('input',$event)"
                            placeholer="请输入内容">
                    <div class="confirm-btn"
                         slot="append"
                         @click="searchFun">Search</div>
                </cube-input>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        backType: {
            type: String,
            default: 'page'
        },
        headerType: {
            type: String,
            default: 'normal'
        },
        searchFun: {
            type: Function,
            default() { }
        }
    },
    methods: {
        backClick() {
            if (this.backType == 'page') this.$router.prev()
            else if (this.backType == 'modal') this.$parent.$parent.hide()
        }
    }
}
</script>

<style scoped lang="stylus">
.north-header {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    padding: 0 5%;
    background-color: #000000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $large-font-size;

    .left {
        flex: 1;
    }

    .middle {
        flex: 2;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        font-size: 16px;
    }
}

.north-header {
    .left-icon {
    }

    .header-input-container {
        flex: 1;

        .confirm-btn {
            &:active {
                opacity: 0.5;
            }
        }
    }
}
</style>
