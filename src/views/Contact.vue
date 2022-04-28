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
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>>
      <p class="bottom_font">© 2011 - 2022 ☆ 蓝色技术工作室</p>
    </div>
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
  height: 120%;
  background-color: #333333;
}

.top_box {
  margin: 0 auto;
  max-width: 450px;
  height: 100%;
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
.gzh_box {
  text-align: center;
  padding-top: 60%;
  color: white;

  img {
    width: 100px;
  }
}

.back_home {
  color: white;
  text-decoration: underline;
  padding-left: 10%;

}

.bottom_font {
  text-align: center;
  color: white;
}

img {
  transition: .3s all ease;
}

img:hover {
  transition: .3s all ease;
  width: 115px;
}


</style>