<template>
  <div class="contact_box">
    <!--加入我们-->
    <div class="top_box">
      <h3>加入我们</h3>
      <h3>与BST取得联系</h3>
      <div class="center_box">
        <div class="left_img">
          <img src="../assets/contact/Contact01.png" alt="">
          <p>BST-2020</p>
        </div>
        <div class="right_img">
          <img src="../assets/contact/contact02.png" alt="">
          <p>BST-2021</p>
        </div>
        <!--  公众号  -->
        <div class="gzh_box">

          <img src="../assets/gzh.png" alt="">
          <p>BST公众号</p>
        </div>
      </div>
      <br><br><br><br><br><br><br>
      <router-link to="/" class="back_home">返回首页 ></router-link>
    </div>

    <footer class="bottom_box">
      <p>© 2011 - 2022 ☆ 蓝色技术工作室</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "contact"
}
</script>

<style scoped lang="less">

.contact_box {
  margin-top: 46px;
}

.top_box {
  margin: 0 auto;
  max-width: 450px;
  height: 600px;
  background-color: #333333;

  h3:nth-child(1) {
    padding-top: 40px;
    text-align: center;
    color: white;
  }

  h3:nth-child(2) {
    text-align: center;
    color: white;
  }
}

.center_box {
  height: 300px;
  max-width: 450px;
  margin: 30px 40px 0 40px;
}

.left_img, .right_img {
  width: 100px;
  height: 100px;

  img {
    width: 100%;
  }

  p {
    text-align: center;
    color: white;
  }
}

.left_img {
  float: left;
}

.right_img {
  float: right;
}

//公众号
.gzh_box{
  text-align: center;
  padding-top: 60%;
  color: white;
  img{
    width: 100px;
  }
}
.back_home {
  color: white;
  text-decoration: underline;
  padding-left: 10%;

}

.bottom_box {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: gray;
  font-size: 15px;
}
</style>