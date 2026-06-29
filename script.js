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
  },
  {
    id: "LZ20260629003",
    product: "矿用截齿",
    model: "U47",
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
