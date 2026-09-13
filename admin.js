const users = JSON.parse(localStorage.getItem('jmr_users') || '[]');
const count = document.querySelector('#memberCount');
if (users.length) count.textContent = (1284 + users.length).toLocaleString('zh-CN');
const table = document.querySelector('#userTable');
users.slice(0, 4).forEach((user, index) => {
  const row = document.createElement('tr');
  const colors = ['', 'orange', 'purple'];
  row.innerHTML = `<td><span class="user-cell"><i class="${colors[index % colors.length]}">${user.email.slice(0, 1).toUpperCase()}</i><strong>${user.email}</strong></span></td><td><span class="pill free">${user.plan}</span></td><td>刚刚</td><td><div class="mini-progress"><i style="width:0%"></i></div></td>`;
  table.prepend(row);
});
document.querySelector('#exportData').addEventListener('click', () => {
  const data = JSON.stringify({ users, exportedAt: new Date().toISOString() }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'jmr-users.json'; link.click(); URL.revokeObjectURL(link.href);
});
document.querySelector('#logout').addEventListener('click', () => { window.location.href = 'index.html'; });
const orders = JSON.parse(localStorage.getItem('jmr_orders') || '[]');
const orderList = document.querySelector('.order-list');
orders.slice(0, 5).reverse().forEach((order) => {
  const item = document.createElement('div');
  item.innerHTML = `<span class="order-icon">¥</span><div><strong>${order.plan} · 待核验</strong><small>${order.email} · ${order.channel}</small></div><b>${order.amount} <em class="pending">待核验</em></b>`;
  orderList.prepend(item);
});
