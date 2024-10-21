const baseUrl = d('aHR0cHM6Ly9ib29rb25saW5lLmhlc3MuY29tLnR3L2Vib29rdmlld2VyL2Vib29rLmh0bWw/Ym9vaz0=');

// 創建表格元素
const table = document.createElement('table');
table.style.width = '70%'; // 設定表格寬度
table.style.margin = '20px auto'; // 置中顯示，並添加上下邊距
table.style.borderCollapse = 'collapse';
table.style.marginBottom = '200px'; // 在表格下方留出空間

// 動態生成表頭
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

// 添加自定義表頭
const headers = {
  'file_chi_display': '電子書',
  'file_no': '開啟電子書'
};

// 添加表頭
for (const key in headers) {
  const th = document.createElement('th');
  th.style.border = '1px solid black';
  th.style.fontSize = '26px';
  th.style.padding = '10px';
  th.innerText = headers[key];
  headerRow.appendChild(th);
}

thead.appendChild(headerRow);
table.appendChild(thead);

// 添加表身
const tbody = document.createElement('tbody');
data.content.forEach(item => {
  const row = document.createElement('tr');

  // 將自定義的字段填入表格
  for (const key in headers) {
    const td = document.createElement('td');
    td.style.border = '1px solid black';
    td.style.fontSize = '26px';
    td.style.padding = '10px';

    if (key === 'file_no') {
	  td.innerHTML = `<a href="${baseUrl + item[key]}" target="_blank">開啟電子書</a>`;
    } else {
      td.innerText = item[key];
    }
    row.appendChild(td);
  }

  tbody.appendChild(row);
});
table.appendChild(tbody);

// 將表格添加到頁面中
document.body.appendChild(table);
