<template>
  <div class="App_box">
    <!-- 头部导航 -->
    <van-nav-bar title="蓝色技术工作室" left-text="返回" fixed style="">
      <template #left>
        <img src="./assets/avatar.png" alt="" @click="back"/>
      </template>

      <template #right>
        <!--        <el-button @click="drawer = true"  type="primary" style="margin-left: 16px;">-->
        <!--          菜单-->
        <!--        </el-button>-->
        <van-icon name="ellipsis" @click="drawer = true" size="25px"/>
      </template>

    </van-nav-bar>
    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false"
        size="200px"
    >
      <!--  抽屉    -->
      <van-cell-group class="action-card">
        <div class="v-cell_box">
          <van-cell icon="chat-o" title="小思同学" is-link to="/robot"/>
          <van-cell icon="user-circle-o" title="关于我们" is-link to="/about"/>
          <van-cell icon="envelop-o" title="联系我们" to="/contact" is-link/>

          <!--          <van-cell icon="flower-o" title="友情链接" is-link to="/"/>-->
          <van-collapse v-model="activeNames">
            <van-collapse-item icon="flower-o" title="友情链接" right-icon="arrow" name="1">
              <!--              <van-cell icon="like-o" title="我的博客" url="https://MrNobody233.github.io"/>-->
              <!--              <van-cell icon="like-o" title="社恐废宅的博客" url="https://MrNobody233.github.io"/>-->
              <!--              <van-cell icon="like-o" title="胃痛患者的博客" url="https://MrNobody233.github.io"/>-->
              <!--              <van-cell icon="like-o" title="Fish的博客" url="https://MrNobody233.github.io"/>-->
              <a href="https://MrNobody233.github.io">
                <van-icon name="star-o"/> &nbsp;我的博客
              </a>

              <a href="https://charet.github.io/">
                <van-icon name="star-o"/> &nbsp;社恐废宅的博客
              </a>

              <a href="https://thirsty-c.github.io/">
                <van-icon name="star-o"/> 胃痛患者的博客
              </a>

              <a href="https://fish214057.github.io/">
                <van-icon name="star-o"/>&nbsp;Fish的博客
              </a>

              <a href="https://MrNobody233.github.io">
                <van-icon name="star-o"/>&nbsp;果果超甜的博客
              </a>

            </van-collapse-item>
          </van-collapse>
          <van-cell icon="like-o" title="我的学校" is-link url="https://www.jxut.edu.cn/"/>
          <van-cell icon="home-o" title="返回主页" is-link to="/"/>

        </div>
        <div class="bottom_box">
          <img src="./assets/gzh.png" alt="">
          <br>
          <span>扫码关注蓝色技术公众号</span>
        </div>
      </van-cell-group>
    </el-drawer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      drawer: false,
      activeNames: ['0'],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);

    }
  }
};
</script>

<style scoped lang="less">
.App_box {
  background-color: #f8f8f8;
  max-width: 450px;
  margin: 0 auto;
}


.van-nav-bar {
  max-width: 450px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  //background-color: #208ce6;
  border-bottom: 1px solid skyblue;
}

.van-nav-bar__title {
  //color: white;
}

// 顶部左侧图片
.van-nav-bar__left img {
  width: 32px;

}

// 侧边栏距离顶部
.v-cell_box {
}

// 公众号部分
.bottom_box {
  margin: 20% auto;
  width: 100%;
  height: 200px;
  //background-color: #ccc;

  text-align: center;
  font-size: 12px;
}

.bottom_box img {
  border-radius: 1px;
  width: 70%;
}

.van-collapse-item__content {
  a {
    display: block;
    color: black;
    padding-bottom: 7px;
  }
}
</style>