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
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>检测报告</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="box" id="app">
  正在加载报告...
</div>

<script src="script.js"></script>

</body>
</html>
const reports = [
  {
    id: "20260629001",
    product: "矿用截齿",
    model: "U95",
    material: "42CrMo",
    date: "2026-06-29",
    result: "合格",
    items: ["硬度检测", "冲击试验", "焊接质量", "尺寸检测"]
  },
  {
    id: "20260629002",
    product: "矿用截齿",
    model: "U92",
    material: "42CrMo",
    date: "2026-06-29",
    result: "合格",
    items: ["硬度检测", "冲击试验", "尺寸检测"]
  }
];

function getQuery(name){
  const url = new URLSearchParams(window.location.search);
  return url.get(name);
}

function render(report){
  if(!report){
    document.getElementById("app").innerHTML = `
      <h2>❌ 未找到检测报告</h2>
    `;
    return;
  }

  document.getElementById("app").innerHTML = `
    <h2>检测报告</h2>

    <div class="status">状态：${report.result}</div>

    <p><b>报告编号：</b>${report.id}</p >
    <p><b>产品名称：</b>${report.product}</p >
    <p><b>型号：</b>${report.model}</p >
    <p><b>材质：</b>${report.material}</p >
    <p><b>检测日期：</b>${report.date}</p >

    <h3>检测项目</h3>
    <ul>
      ${report.items.map(i => `<li>✔ ${i}</li>`).join("")}
    </ul>

    <button onclick="window.print()">打印</button>
  `;
}

const id = getQuery("id");
const report = reports.find(r => r.id === id);

render(report);
