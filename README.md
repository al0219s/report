<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>检测报告查询</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="box">
  <h2>检测报告查询系统</h2>

  <input id="input" placeholder="输入报告编号，例如 20260629001">
  <button onclick="go()">查询</button>

  <p class="tip">扫码可直接进入报告页面</p >
</div>

<script>
function go(){
  const id = document.getElementById('input').value.trim();
  if(!id) return;
  window.location.href = "report.html?id=" + id;
}
</script>

</body>
</html>
