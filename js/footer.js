document.addEventListener('DOMContentLoaded', function() {
  // ===== 时钟 =====
  setInterval(() => {
    let create_time = Math.round(new Date('2026-07-01 00:00:00').getTime() / 1000);
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = [0, 0, 0, 0, 0];

    var nol = function(h) {
      return h > 9 ? h : '0' + h;
    }
    if (second >= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600));
      second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
    }
    if (second >= 3600) {
      time[2] = nol(parseInt(second / 3600));
      second %= 3600;
    }
    if (second >= 60) {
      time[3] = nol(parseInt(second / 60));
      second %= 60;
    }
    if (second > 0) {
      time[4] = nol(second);
    }
    
    var currentTimeHtml;
    if ((Number(time[2]) < 22) && (Number(time[2]) > 7)) {
      currentTimeHtml = "<img src='https://img.shields.io/badge/糖果屋-营业中-6adea8?style=social&logo=cakephp' title='距离百年老店也就差不到一百年~'><br><div>" + time[0] + ' 年 ' + time[1] + ' 天 ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    } else {
      currentTimeHtml = "<img src='https://img.shields.io/badge/糖果屋-打烊了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><br><div>" + time[0] + ' 年 ' + time[1] + ' 天 ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    }
    var board = document.getElementById("workboard");
    if (board) {
      board.innerHTML = currentTimeHtml;
    }
  }, 1000);

  // ===== 轮播 =====
  var bdageswiper = new Swiper("#ghbdages", {
    direction: "vertical",
    passiveListeners: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      disableOnInteraction: true,
      delay: 1500
    },
    mousewheel: true
  });
  var ghbdage = document.getElementById("ghbdages");
  if (ghbdage) {
    ghbdage.onmouseenter = function() {
      bdageswiper.autoplay.stop();
    };
    ghbdage.onmouseleave = function() {
      bdageswiper.autoplay.start();
    };
  }
});