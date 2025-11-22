# 同步到 GitHub 指南

## 方法一：使用命令行（推荐）

### 1. 安装 Xcode 命令行工具（如果还没有安装）
```bash
xcode-select --install
```
按照提示完成安装。

### 2. 检查 Git 状态
```bash
cd /Users/mouchunxiao/Documents/GitHub/UNI
git status
```

### 3. 添加所有文件
```bash
git add .
```

### 4. 提交更改
```bash
git commit -m "feat: 添加 Button 组件和预览环境

- 添加支持多种样式、尺寸和状态的 Button 组件
- 添加 Home 图标组件
- 配置 Vite 开发环境
- 创建交互式预览页面"
```

### 5. 创建 GitHub 仓库（如果还没有）
1. 访问 https://github.com/new
2. 创建新仓库（例如：`UNI`）
3. **不要**初始化 README、.gitignore 或 license（因为本地已有）

### 6. 添加远程仓库并推送
```bash
# 替换 YOUR_USERNAME 为你的 GitHub 用户名
git remote add origin https://github.com/YOUR_USERNAME/UNI.git

# 或者使用 SSH（如果你配置了 SSH key）
# git remote add origin git@github.com:YOUR_USERNAME/UNI.git

# 推送代码
git branch -M main
git push -u origin main
```

## 方法二：使用 GitHub Desktop

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 打开 GitHub Desktop
3. 选择 "File" > "Add Local Repository"
4. 选择 `/Users/mouchunxiao/Documents/GitHub/UNI` 目录
5. 在 GitHub Desktop 中：
   - 查看更改
   - 填写提交信息
   - 点击 "Commit to main"
   - 点击 "Publish repository" 或 "Push origin"（如果已连接远程仓库）

## 方法三：使用 VS Code / Cursor

1. 在 VS Code/Cursor 中打开项目
2. 使用源代码管理面板（左侧边栏的 Git 图标）
3. 暂存所有更改
4. 填写提交信息并提交
5. 如果还没有远程仓库，点击 "Publish Branch" 按钮
6. 选择在 GitHub 上创建新仓库

## 需要提交的文件

以下文件应该被提交：
- ✅ `components/button/` - Button 组件
- ✅ `src/` - 预览应用源代码
- ✅ `package.json` - 项目配置
- ✅ `tsconfig.json` - TypeScript 配置
- ✅ `vite.config.ts` - Vite 配置
- ✅ `index.html` - HTML 入口
- ✅ `README.md` - 项目文档
- ✅ `.gitignore` - Git 忽略文件

以下文件**不应该**被提交（已在 .gitignore 中）：
- ❌ `node_modules/` - 依赖包
- ❌ `dist/` - 构建输出
- ❌ `.DS_Store` - macOS 系统文件

## 提交信息建议

如果使用命令行，可以使用以下提交信息：

```bash
git commit -m "feat: 添加 Button 组件和预览环境

- 添加支持多种样式（Filled, Tonal, Outline, Text）的 Button 组件
- 支持三种尺寸（S, M, L）和三种状态（Default, Disabled, Pressed）
- 添加 Home 图标组件
- 配置 Vite 开发环境用于组件预览
- 创建交互式预览页面展示所有变体
- 支持 Figma Code Connect 集成"
```

