// ヘッダーを非同期でロードする関数
function loadHeader() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // 取得したヘッダーの内容をheaderContainer要素に設定
      document.getElementById("headerContainer").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "header.html", true);
  xhttp.send();
}

// ページのロードが完了したらヘッダーをロード
document.addEventListener("DOMContentLoaded", function() {
  loadHeader();
});

// フッターを非同期でロードする関数
function loadFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // 取得したフッターの内容をheaderContainer要素に設定
        document.getElementById("footerContainer").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "footer.html", true);
    xhttp.send();
  }
  
  // ページのロードが完了したらフッターをロード
  document.addEventListener("DOMContentLoaded", function() {
    loadFooter();
  });