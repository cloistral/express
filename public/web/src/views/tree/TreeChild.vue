<template>
  <div>
    <north-header title="添加" />
    <div>
      <div class="input-container">
        <span class="title">姓名</span>
        <cube-input v-model="param.name" placeholder="请输入姓名"></cube-input>
      </div>
      <div class="input-container">
        <span class="title">密码</span>
        <cube-input v-model="param.name" placeholder="请输入密码"></cube-input>
      </div>

      <div class="input-container">
        <span class="title">联系方式</span>
        <cube-input v-model="param.name" placeholder="请输入联系方式"></cube-input>
      </div>

      <div class="textarea-container">
        <span class="title">添加内容</span>
        <cube-textarea v-model="param.name" indicator="indicator" slot="sss" name="sss" key="sss"></cube-textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			param: {
				name: ''
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.input-container {
  width: 90%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    margin-right: 20px;
  }

  .cube-input {
    flex: 1;
  }
}

.textarea-container {
  display: flex;
  align-items: last baseline;
  justify-content: space-between;

  .cube-textarea-wrapper {
    flex: 1;
  }
}
</style>
