<template>
  <div class="pc-container">
    <div class="title">
		<span>{{project.name}}</span>
		<span v-if="project.state==1">（已开放）</span>
		<span v-else>（未开放）</span>
	</div>
	<div class="middle">
		<span><i class="el-icon-s-release"></i>项目总分：{{project.point}}</span>
		<div class="button">
			<button @click="check()">考勤</button>
		</div>
		<div class="button">
			<button @click="modify()">修改项目信息</button>
		</div>
	</div>
	<div class="info">
		<span>{{project.info}}</span>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		project:{
			name:'项目1',
			point:1,
			state:0,
			info:'一些项目介绍,哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈'
		}
    }
  },
  methods: {
	  check(){
		  this.$message('已成功考勤！')
	  },
	  modify(){
		  this.$router.push('/projectModify')
	  }
  },
  mounted () {
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
.pc-container{
	width: 100%;
	background-color: aliceblue;
	display: flex;
	flex-direction: column;
	.title{
		padding: 10px;
		font-size: 30px;
		font-weight: 800;
	}
	.middle{
		flex-direction: row;
		width: 100%;
		.button{
			display: inline-block;
			button{
			  margin-top: 20px;
			  outline: none;
			  border: none;
			  background: #a499cf;
			  border-radius: 8px;
			  padding:5px 10px;
			  margin:0 10px;
			  letter-spacing: 1px;
			  font-size: 16px;
			  color: #fff;
			  transition: 1s;
			}
			button:hover{
			  background: #a4d5de;
			}
		}
	}
	.info{
		padding: 20px;
		font-size: 18px;
	}
}
</style>