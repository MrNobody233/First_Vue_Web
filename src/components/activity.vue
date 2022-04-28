<template>
  <!--  废弃的布局 -->
  <!--  <div class="active">
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
    </div>-->
  <div class="activeBox">
    <div class="imgBox">
      <img :src="active_img" alt="">
    </div>
    <!--文字区域-->
    <div class="contentBox">
      <!-- 左上角时间-->
      <div class="timeBox">
        {{ time }}
      </div>
      <!--文字-->
      <div class="fontBox">
        <!--标题-->
        <p>{{ font_title }}</p>
        <!--预览文字-->
        <div>{{ font_content }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "activity",
  props: ['time', 'active_img', 'font_title', 'active_type', 'font_content']

}
</script>

<style scoped lang="less">
// 废弃的样式
/*
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
*/
//==============

.activeBox {
  background-color: #ffffff;
  width: 350px;
  height: 500px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  .imgBox {
    flex: 1;


    img {
      width: 100%;
      height: 100%;
    }
  }

  .contentBox {
    height: 300px;
    background-color: #ffffff;
    margin-top: 15px;

    .timeBox {
      width: 100px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border: 1px solid #0052d9;
      color: #0052d9;
      border-radius: 10px;
    }

    .fontBox {


      p {
        padding-top: 10px;
        padding-left: 15px;
        font-size: 18px;
      }

      div {
        margin: 0 15px;
      }
    }
  }
}
</style>