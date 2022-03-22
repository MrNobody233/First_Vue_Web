<template>

  <div class="active">

    <div class="content-box">
      <div class="content-font">
        <p>{{active_font}}</p>
        <br><br>
        <span>{{active_type}}</span>
      </div>
      <div class="content-img">
        <img :src="active_img" alt="">
        <span>{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {Divider} from 'vant';

export default {
  name: "activity",
  props: ['time', 'active_img','active_font','active_type']

}
</script>

<style scoped lang="less">
.active {
  max-width: 450px;
  margin: 0 auto 0 auto;
}

.content-box {
  display: flex;
  border-radius: 20px;
  max-width: 450px;
  height: 150px;
  margin: 0 20px 15px 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #f8f8f8f8;

  .content-font {
    padding: 5px 0 0 12px;
    flex: 1;

    span {
      font-size: 12px;
      color: #ccc;
    }

  }

  .content-img {
    text-align: center;
    padding: 15px 10px 0 10px;
    width: 40%;
    overflow: hidden;

    span {
      text-align: right;
      font-size: 12px;
      color: #333;
    }
  }


  img {
    margin-bottom: 10px;
    border-radius: 10px;
    float: right;
    width: 100%;
  }
}
</style>