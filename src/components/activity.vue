<template>
  <div class="active">
    <div class="content-box">
      <div class="content-font">
        <p>{{ active_font }}</p>
        <br>
        <span>{{ active_type }}</span>
        <br>
        <span>{{ time }}</span>
      </div>
      <div class="content-img">
        <img :src="active_img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {Divider} from 'vant';

export default {
  name: "activity",
  props: ['time', 'active_img', 'active_font', 'active_type']

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
  height: 140px;
  margin: 0 20px 15px 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: rgba(204, 204, 204, 0.29);

  .content-font {
    padding: 5px 0 0 12px;
    flex: 1;

    span {
      font-size: 12px;
      color: #333333;
    }
  }

  .content-img {
    text-align: center;
    padding: 15px 10px 0 10px;
    width: 38%;
    height: 130px;
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
    height: 80%;
  }
}
</style>