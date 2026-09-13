const curriculum = [
  ['01 / 基础', 'AI 到底是什么？', '神经网络、大模型、训练、推理、上下文窗口，用生活化例子建立完整地图。', '入门 · 12 节'],
  ['02 / 沟通', 'Prompt 提示词方法', '角色、目标、约束、示例、格式与检查，让 AI 稳定输出可用结果。', '入门 · 8 节'],
  ['03 / 工具', '选对模型与工具', '按任务比较 ChatGPT、Claude、Gemini、DeepSeek、开源模型和 Cursor。', '基础 · 7 节'],
  ['04 / 部署', '把 AI 跑在自己电脑上', '检查内存和显卡，配置合规网络连接，安装 Ollama，跑通第一个本地模型。', '实操 · 6 节'],
  ['05 / API', '买好 API，第一次调用就成功', '从官方控制台充值小额额度、创建 Key，再用 curl 和 Python 发出第一条请求。', '实操 · 6 节'],
  ['06 / 成本', '别让 Token 偷走预算', '用真实请求记录 Token、耗时和费用，学会压缩上下文、缓存和模型路由。', '进阶 · 5 节'],
  ['07 / 自动化', '工作流与 Agent', '用 n8n 连接表格、邮件、网页与模型，搭建可暂停的自动化流程。', '进阶 · 5 节'],
  ['08 / 项目', '做出 3 个作品', '完成知识库问答、内容助手或客服机器人，形成可展示的作品集。', '项目 · 6 节'],
  ['09 / 安全', '隐私与安全', '处理敏感信息、权限、提示词注入、日志脱敏和上线前检查。', '必修 · 4 节'],
  ['10 / 变现', '把能力变成服务', '从需求访谈、报价、交付边界到模板产品化，找到第一位客户。', '商业 · 6 节'],
  ['11 / 进阶', '评测与迭代', '建立测试集、评分标准、人工复核和版本记录，让结果持续稳定。', '进阶 · 4 节'],
  ['12 / 路线', '30 天学习计划', '每天 30 分钟，从第一个 Prompt 到一个能演示的 AI 项目。', '计划 · 30 天']
];
const grid = document.querySelector('#courseGrid');
if (grid) {
  grid.innerHTML = curriculum.map((course, index) => `<article class="course-item ${index === 0 ? 'featured-course' : ''}"><span class="course-index">${course[0]}</span><h3>${course[1]}</h3><p>${course[2]}</p><div class="course-lessons"><span>${course[3].split(' · ')[0]}</span><span>${course[3].split(' · ')[1]}</span></div><a class="course-start" href="learn.html?course=${index}">开始学习 <b>→</b></a></article>`).join('');
}
document.querySelector('.menu-btn')?.addEventListener('click', () => document.querySelector('.nav-links')?.classList.toggle('mobile-open'));
