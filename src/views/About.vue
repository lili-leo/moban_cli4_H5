<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goShuju1">点我</button>
  </div>
</template>
<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
import {requestLogin} from "../api/index.js";
export default{
  date(){
    return{
      ceshi:1
    }
  },
  computed:{
    ...mapState(["date1"]),
    ...mapGetters(["getter1","getter2"]),
    shuju1(){
      return "ok"
    }
  },
  created(){
    console.log("created")

  },
  mounted(){
    console.log("mounted")
  },
  methods:{
    ...mapMutations(["ADD_BOOK"]),
    ...mapActions(["dispatch1"]),
    goShuju1(){
      console.log(this.shuju1)
      console.log(this.date1) //用computed接收)
      console.log(this.getter1) //用computed接收)
      console.log(this.getter2) //用computed接收)
      this.ADD_BOOK() //执行Mutations方法
      this.dispatch1()   //执行Actions方法
      this.$Message.info('提示');
      requestLogin({}).then(res=>{
        console.log(res)
        console.log(res.status)
        console.log(res.data)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>