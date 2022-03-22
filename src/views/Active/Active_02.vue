<template>
  <div class="activity">
    <h3>蓝色技术工作室冬至饺子宴</h3>
    <i class="el-icon-date">2021-12-22</i>
    <br>
    <img src="../../assets/Activity/Active02_img_01.png" alt="">
    <!-- 装一大坨内容  -->
    <div class="content_box">
      <p>中 / 国 / 传 / 统 / 节 / 气</p>
      <div class="top_img">
        <h1>冬至</h1>
        <p>夏至三庚入伏，冬至逢壬数九</p>
      </div>
      <div class="bottom_img">
        <p>时遇冬至，新加入工作室的小伙伴们已经开始融入
          <br>
          这个集体，为了给大伙在忙碌之余增添些色彩，
          <br>
          蓝色技术工作室特举办了一场盛大的饺子宴。
          <br>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Active_02"
}
</script>

<style lang="less" scoped>
.activity {
  margin: 60px auto 0 auto;
  max-width: 450px;
  text-align: center;

  h3 {
    text-align: center;
    font-size: 16px;
  }

  /deep/ .el-icon-date {
    text-align: center;
  }

  .content_box {
    background-color: #8db3e2;
    width: 100%;
    color: white;

    p {
      font-weight: bold;
      letter-spacing: 3px
    }

    .top_img {
      width: 100%;
      height: 205px;
      background: url("../../assets/Activity/Active02_img_02.png") no-repeat;
      background-size: 100%;
      h1{
        padding-top: 100px;
      }
      p{
        font-weight: normal;
        font-size: 14px;
      }
    }
    .bottom_img{
      width: 100%;
      height: 200px;
      background: url("../../assets/Activity/Active02_img_03.png") no-repeat;
      background-size: 100%;

      p{
        font-weight: normal;
        font-size: 12px;
      }
    }
  }
}
</style>