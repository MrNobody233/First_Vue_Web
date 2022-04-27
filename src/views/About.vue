<template>

  <div class="about_box">
    <van-notice-bar left-icon="volume-o" :scrollable="false" scrollable color="#1989fa" background="#ecf9ff"
                    mode="closeable" speed="100">
      <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
      >
        <van-swipe-item>勤洗手，戴口罩，常通风，多消毒，有症状，早就医，讲卫生，多锻炼，少出行，少聚集，多理解，多配合，需警惕，不恐慌，疫情防控，切勿松懈。</van-swipe-item>
      </van-swipe>
    </van-notice-bar>

    <div class="logo_box">
      <img src="../assets/lsjs.jpg" alt="">
    </div>
    <!--  简介  -->
    <div class="font_box">
      <span>工作室简介</span>
      <p>蓝色工作室(BST)成立于 2011 年 10
        月，成立的初衷是为了提高学生对科学技术的兴趣和认知能力，使同学们积极地对科学技术进行不断的研究和探索，让同学们有一个相互交流的平台，实现学习和实践相结合，从而使同学们的知识水平达到一个更高的层次。我们着重培养电子、汽车、机械、软件方面的专业人才，培养其动手能力和创新思维。自团队成立来，它培养了一批又一批专业基础扎实的学生。</p>
      <div class="font_box_img">
        <img src="../assets/About/About_img_01.jpg" alt="">
      </div>
      <br>
      <h3>工作室进行内部讨论▲</h3>
    </div>
    <!-- 建设   -->
    <div class="font_box">
      <span>工作室建设</span>
      <p>
        蓝色技术工作室团支部一改以往在全校范围内以“挑尖子”的纳新方式，着重以个人兴趣为导向广纳学生，并设计了自己的工作室标识：象征科技创新的蓝色火焰，标识被设计成贴纸，创建了蓝色技术工作室官方网站，不断更新相关资讯，让会员、同学们都能在第一时间了解竞赛、活动的具体情况。大家拥有共同的奋斗目标，不断将自己的所思、所学留在工作室，促进工作室进一步发展、提高、壮大，让新会员们能有更多、更好的理论、实践知识进行学习。</p>
      <div class="font_box_img">
        <img src="../assets/About/About_img_02.jpg" alt="">
      </div>
      <h3 style="text-align: right">参加的各类创新型竞赛▲</h3>
    </div>

    <!--底部-->
    <footer class="bottom_box">
      <p>© 2011 - 2022 ☆ 蓝色技术工作室</p>
    </footer>
  </div>
</template>
<script>

</script>

<style scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}

.about_box {
  max-width: 450px;
  margin: 46px auto;
  height: 100%;

}

.logo_box {
  padding-top: 10px;
  text-align: center;
  margin: 30px auto 0 auto;
  width: 50%;
  height: 100px;
  border-bottom: 1px solid #ccc;
}

/*logo大小*/
.logo_box img {
  width: 85px;
}

/*文字设置*/
.font_box {
  margin: 20px 30px 15% 30px;
  text-align: center;
  max-width: 450px;
}

.font_box span {
  font-size: 16px;
  color: #2c3e50;
}

.font_box p {
  text-indent: 20px;
  font-size: 12px;
  color: #7f8c8d;
  line-height: 25px;
}

.font_box_img {
  width: 100%;
  height: 390px;
}

.font_box h3 {
  text-align: left;
  font-size: 12px;
  font-weight: normal;
}

.font_box_img img {
  width: 100%;
  height: 100%;
}

.bottom_box {
  text-align: center;
  color: gray;
  width: 450px;
  height: 10px;
  position: absolute;
}
</style>