<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const search_value = ref('')

const baidu = () => {
  const baidu_url = "https://www.baidu.com/s?wd=" + search_value.value
  window.open(baidu_url,"_blank")
}

const google = () => {
  const google_url = "https://www.google.com/search?q=" + search_value.value
  window.open(google_url,"_blank")
}


</script>

<template>
  <div>
    <!-- LOGO -->
    <van-cell style="padding:0 0 0 0;" >
      <template #title>
        <div class="headbox">
          <img src="./assets/logo.png" class="mainlogo">
        </div>
      </template>
    </van-cell>

    <!-- 搜索 -->
    <van-row class="row" align="center">
      <van-col span="16" >
        <van-cell-group inset style="padding:10px 10px 10px 10px">
          <van-row align="center">
            <van-col span="20">
              <van-field size="large"  v-model="search_value" clearable left-icon="search" placeholder="使用Baidu/Google搜索" />
            </van-col>
            <van-col span="4">
              <div style="margin-bottom:5px">
              <van-button plain type="primary" size="small" class="search_button" @click="baidu()">Baidu</van-button>
              </div>
              <div style="margin-top:5px">
              <van-button plain type="success" size="small" class="search_button" @click="google()">Google</van-button>
              </div>
            </van-col>
          </van-row>


        </van-cell-group>

      </van-col>
      <van-col span="8">
       
      </van-col>
    </van-row>


  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

}

.headbox {
  height: 60px;
  background-color: #DEE1E1;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;

}

.mainlogo {
  height: 80%;
}

.row {
  margin-top: 10px;
}

.search_button {
  width: 80%;
}
</style>
