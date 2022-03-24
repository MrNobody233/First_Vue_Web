<template>
  <div class="activity">
    <van-notice-bar left-icon="volume-o" :scrollable="false"  color="#1989fa"  background="#ecf9ff"      mode="closeable"  speed="100">
      <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
      >
        <van-swipe-item>病毒无情，人间有情</van-swipe-item>
        <van-swipe-item>疫情终会过去，静候春暖花开</van-swipe-item>
        <van-swipe-item>抗击疫情，人人有责</van-swipe-item>
        <van-swipe-item>齐心合力，共康疫情</van-swipe-item>


      </van-swipe>
    </van-notice-bar>
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
      <div class="mountain">
        <p>冬至的意义</p>
        <br>
        <img src="../../assets/Activity/Active02_img_04.png" alt="">
        <br>
        <span>
          冬至又称“冬节”、“贺冬”,
          <br>
          华夏二十四节气之一、
          <br>
          八大天象类节气之一，
          <br>
          与夏至相对。
          <br>
          冬至在太阳到达黄经270°时开始，
          <br>
          时于每年公历12月22日左右。
          <br>
          据传，
          <br>
          冬至在历史上的周代是新年元旦，
          <br>
          曾经是个很热闹的日子。
        </span>
      </div>
      <!--   why  -->
      <div class="why">
        <h2>为什么举办这个活动</h2>
        <img src="../../assets/Activity/Active02_img_05.png" alt="">
        <p>冬至，兼具自然与人文两大内涵，既是二十四节气中一个重要的节气，也是中国民间的传统节日，素有“冬至大如年”之说。
          <br>
          这个学期已经走到了末尾，大家伙平日除了学习培训，就是在忙碌于准备明年的比赛，如此努力的大家，怎能不犒劳一下，大家一起放松放松？</p>
        <div class="why_img">
          <img src="../../assets/Activity/Active02_img_06.png" alt="">
          <img src="../../assets/Activity/Active02_img_07.png" alt="">
        </div>
      </div>
      <div class="eat">
        <h2>成果展示</h2>
        <img src="../../assets/Activity/Active02_img_05.png" alt="" style="width: 60px">

        <div class="eat_img">
          <img src="../../assets/Activity/Active02_img_08.png" alt="">
          <br>
          <img src="../../assets/Activity/Active02_img_09.png" alt="">
          <img src="../../assets/Activity/Active02_img_10.png" alt="">
        </div>
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
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.activity {
  margin: 46px auto 0 auto;
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
      letter-spacing: 3px;
      font-family: 'Microsoft YaHei ! important;';
    }

    .top_img {
      width: 100%;
      height: 205px;
      background: url("../../assets/Activity/Active02_img_02.png") no-repeat;
      background-size: 100%;

      h1 {
        padding-top: 100px;
      }

      p {
        font-weight: normal;
        font-size: 14px;
      }
    }

    .bottom_img {
      width: 100%;
      height: 200px;
      background: url("../../assets/Activity/Active02_img_03.png") no-repeat;
      background-size: 100%;

      p {
        font-weight: normal;
        font-size: 12px;
        line-height: 25px;
      }
    }

    .mountain {
      p {
        font-size: 19px;
      }

      span {
        font-size: 12px;
        line-height: 20px;
      }
    }

    .why {
      margin: 40px auto 0 auto;

      h2 {
        font-size: 19px;
      }

      img {
        width: 50px;
      }

      p {
        font-size: 12px;
        font-weight: normal;
        margin: 0 30px 0px 30px;
        line-height: 20px;
      }

      .why_img {

        margin: auto;

        img {
          width: 100px;
          padding-left: 20px;

        }
      }
    }

    .eat {
      margin: 40px auto 0 auto;

      img {
        width: 200px;

      }
    }
  }
}
</style>