$(function () {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui()

  // 给按键点击绑定事件
  $('#btnSend').on('click', function () {
    var text = $('#ipt').val().trim();
    // 如果用户没输入内容则清空
    if (text.length <= 0) {
      return $('#ipt').val('')
    }
    // 如果用户输入了聊天内容 则将聊天内容追加到页面上显示
    $('.talk_list').append(`<li class="right_word">
          <img src="img/person02.png" /> <span>${text}</span>
        </li>`)
    $('#ipt').val('')
    // 重置滚动条位置
    resetui()

    getMsg(text)

    // 获取聊天机器人发送回来的消息
    function getMsg(text) {
      $.ajax({
        method: "GET",
        url: "http://www.liulongbin.top:3006/api/robot",
        data: { spoken: text },
        success: function (res) {
          if (res.message === 'success') {
            var msg = res.data.info.text
            $('.talk_list').append(` <li class="left_word">
          <img src="img/person01.png" /> <span>${msg}</span>
        </li>`)
            resetui();

            getVoice(text);
          }
        }
      })

      /*    $.get('http://www.liulongbin.top:3006/api/robot', { spoken: text }, function (res) {
           $('.talk_list').append(` <li class="left_word">
             <img src="img/person01.png" /> <span>${res.data.info.text}</span>
           </li>`)
         }) */
    }
    // 把文字转换成语音进行播放
    function getVoice(text) {
      $.ajax({
        method: "GET",
        url: "http://www.liulongbin.top:3006/api/synthesize",
        data: { text: text },
        success: function (res) {
          if (res.status === 200) {
            console.log(res);
            // 播放语音
            $('#voice').attr('src', res.voiceUrl)
          }
        }
      })
    }
  })

  $('#ipt').on('keyup', function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      $('#btnSend').click()
    }
  })
})