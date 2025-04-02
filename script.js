// 所有支持的主题（去除 .min 重复）
const themes = [
  "1c-light", "a11y-dark", "a11y-light", "agate", "an-old-hope", "androidstudio",
  "arduino-light", "arta", "ascetic", "atom-one-dark-reasonable", "atom-one-dark",
  "atom-one-light", "brown-paper", "codepen-embed", "color-brewer", "dark", "default",
  "devibeans", "docco", "far", "felipec", "foundation", "github-dark-dimmed", "github-dark",
  "github", "gml", "googlecode", "gradient-dark", "gradient-light", "grayscale", "hybrid",
  "idea", "intellij-light", "ir-black", "isbl-editor-dark", "isbl-editor-light", "kimbie-dark",
  "kimbie-light", "lightfair", "lioshi", "magula", "mono-blue", "monokai-sublime", "monokai",
  "night-owl", "nnfx-dark", "nnfx-light", "nord", "obsidian", "panda-syntax-dark", "panda-syntax-light",
  "paraiso-dark", "paraiso-light", "pojoaque", "purebasic", "qtcreator-dark", "qtcreator-light",
  "rainbow", "routeros", "school-book", "shades-of-purple", "srcery", "stackoverflow-dark",
  "stackoverflow-light", "sunburst", "tokyo-night-dark", "tokyo-night-light", "tomorrow-night-blue",
  "tomorrow-night-bright", "vs", "vs2015", "xcode", "xt256"
];

// 加载主题选择器
const themeSelect = document.getElementById("themeSelect");
const themeLink = document.getElementById("themeLink");

// 插入所有主题项
themes.forEach(name => {
  const opt = document.createElement("option");
  opt.value = name;
  opt.textContent = name;
  themeSelect.appendChild(opt);
});

// 切换主题样式
themeSelect.addEventListener("change", () => {
  const selected = themeSelect.value;
  themeLink.href = `themes/${selected}.css`;
});

// 默认加载第一个主题
themeSelect.value = themes[0];
themeLink.href = `themes/${themes[0]}.css`;

// 高亮按钮
document.getElementById('updateBtn').addEventListener('click', () => {
  const code = document.getElementById('codeInput').value;
  const lang = document.getElementById('langSelect').value;
  const codeBlock = document.getElementById('codeBlock');

  codeBlock.className = `language-${lang}`;
  codeBlock.textContent = code;

  hljs.highlightElement(codeBlock);
});

// 截图按钮
document.getElementById('saveBtn').addEventListener('click', () => {
  const target = document.getElementById('preview');
  html2canvas(target).then(canvas => {
    const link = document.createElement('a');
    link.download = 'code-snap.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
