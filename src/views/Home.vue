<template>
  <div class="homeBox">
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
    <br>
    <div class="Recently">
      <h1>最新动态</h1>
    </div>
    <!-- 近期活动 -->
    <Activity
        v-for="(item,index) in ActivityList"
        :key="index"
        :time="item.time"
        :active_img="item.img"
        :font_title="item.font_title"
        :font_content="item.font_content"
        :active_type="item.type_font"
        @click.native="Hop_routing(index)">
    </Activity>
  </div>
</template>

<script>
// 导入轮播图
import {Swipe, SwipeItem} from 'vant';
// 导入activity组件
import Activity from "@/components/activity.vue";

export default {
  name: "Home",
  components: {Activity},
  created() {
    this.open1();
  },
  data() {
    return {
      ActivityList: [
        {
          img: 'https://i.ibb.co/v3CPzDj/Active-img-01.jpg',
          font_title: '江西科技学院第四届轮式机器人竞速',
          font_content: '为了加强我校大学生软硬件知识学习，提高实际运算能力，蓝色技术开始进行江西科技学院第四届轮式机器人竞速赛，比赛于2021年11月29日在J8-101举行',
          type_font: '竞赛',
          time: '2021.12.13'
        },
        {
          img: 'https://i.ibb.co/4gJTyf0/1.jpg',
          font_title: '蓝色技术工作室冬至饺子宴',
          font_content: '时遇冬至，新加入工作室的小伙伴们已经开始融入这个集体，为了给大伙在忙碌之余增添些色彩，蓝色技术工作室特举办了一场盛大的饺子宴',
          type_font: '活动',
          time: '2021.12.22'
        },
        {
          img: 'https://www.weihaisheng.com/wp-content/uploads/2021/12/2021-768x512.jpg',
          font_title: '蓝色技术工作室年度总结',
          font_content: '新年的到来是对过往的检讨对未来的期望,2021已去对过去的一年,总要有句结束语跟着零碎的图片共同回忆惆怅的2021',
          type_font: '总结',
          time: '2022.1.1'
        },
      ]
    }
  },
  methods: {
    Hop_routing(index) {
      index += 1
      this.$router.push({
        path: '/active' + index,
      })
    },
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: '蓝色技术工作室提醒您:',
        message: h('i', {style: 'color: #49a1e7'}, '疫情尚未结束，我们应当配合学校工作，勤洗手，少出门，不扎堆，不聚集，不信谣，不传谣。'),
        position: 'bottom-right',
        offset: 600,
        duration: 5000,
      });
    },
  }
}
</script>

<style scoped lang="less">
.homeBox {
  background-color: #f8f8f8;
}

.lbt {
  max-width: 450px;
  height: 270px;
  margin: 43px auto 0 auto;
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

// git test
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}

.Recently {
  h1 {
    text-align: center;
    font-size: 19px;
  }
}
</style>