  <template>
  <div class="user-container">
    <!-- 用户基本信息面板 -->
    <!--    <div class="user-card">
      &lt;!&ndash; 用户头像、姓名 &ndash;&gt;
      <van-cell>
        &lt;!&ndash; 使用 title 插槽来自定义标题 &ndash;&gt;
        <template #icon>
          <img src="../assets/logo.png" alt="" class="avatar" />
        </template>
        <template #title>
          <span class="username">用户名</span>
        </template>
        <template #label>
          <van-tag color="#fff" text-color="#007bff">申请认证</van-tag>
        </template>
      </van-cell>
      &lt;!&ndash; 动态、关注、粉丝 &ndash;&gt;
      <div class="user-data">
        <div class="user-data-item">
          <span>0</span>
          <span>动态</span>
        </div>
        <div class="user-data-item">
          <span>0</span>
          <span>关注</span>
        </div>
        <div class="user-data-item">
          <span>0</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>-->

    <!-- 操作面板 -->
    <van-cell-group class="action-card">
      <van-cell icon="chat-o" title="小思同学" is-link to="/robot" />
      <van-cell icon="user-circle-o" title="关于我们" is-link />
      <van-cell icon="envelop-o" title="联系我们" is-link />
      <van-cell icon="like-o" title="我的学校"   is-link />
    </van-cell-group>
  </div>
</template>
 
<script>
export default {
  name: "User",
};
</script>
   
   <style lang="less" scoped>
.user-container {
  .user-card {
    background-color: #208ce6;
    color: white;
    padding-top: 20px;
    .van-cell {
      background: #208ce6;
      color: white;
      &::after {
        display: none;
      }
      .avatar {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .user-data {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding: 30px 0;
    .user-data-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
    }
  }
}
</style>
   