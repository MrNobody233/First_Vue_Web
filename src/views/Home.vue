<template>
  <div>
    <!-- 轮播图 -->
    <div class="lbt">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/bst-2022/bst-0.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/bst-2022/bst-01.jpeg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/bst-2022/bst-02.jpeg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/bst-2022/bst-03.jpeg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/bst-2022/bst-04.png" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <br><br>

    <!-- 近期活动 -->
    <div class="activity">
      <h3>江西科技学院第四届轮式机器人竞速赛</h3>
      <i class="el-icon-date">2021-12-13</i>
      <p>
        蓝色技术工作室一直致力于学生的创新能力，为广大同学提供了一个创新创造的平台，还经常举行技术培训技术讲座来帮助同学实现创新创造的梦想。为了加强我校大学生软硬件知识学习，提高实际运用的能力，比赛于2021年11月29日在J8-101进行，上午9点开始进行了基础四轮组初赛，双车接力组及平衡组的比赛。此次比赛共有20只队伍，其中基础四轮组14组，双车接力组2组，平衡组4组，共计22人。比赛前一个多月，工作室对参赛队员进行了C语言、单片机、arduino软件等培训</p>
      <img src="../assets/Home/home_img01.jpg" alt="">
      <br>
      <i class="el-icon-caret-top">正在培训单片机和开发环境的安装</i>
    </div>
  </div>
</template>

<script>
// 导入轮播图
import {Swipe, SwipeItem} from 'vant';

export default {
  name: "Home",

}
</script>

<style scoped lang="less">
.lbt {
  max-width: 500px;
  min-width: 300px;
  height: 270px;
  margin: 46px auto 0 auto;
}

.my-swipe .van-swipe-item {
  width: 100%;
  height: 270px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #ccc;
}

.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}

/*活动区*/
.activity {
  text-align: center;
  max-width: 450px;

  img {
    width: 70%;
  }

  h3 {
    font-weight: normal;
    font-size: 16px;
  }

  p {
    font-size: 15px;
    line-height: 20px;
    padding: 0 20px 0 20px;
  }

  .el-icon-caret-top {
    font-size: 13px;
  }
}
</style>