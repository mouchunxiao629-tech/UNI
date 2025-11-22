# UNI Component Library

React 组件库，支持 Figma Code Connect。

## 安装依赖

安装 Node.js 后，运行以下命令安装项目依赖：

```bash
npm install
```

## 组件

### Button 组件

支持多种变体、尺寸和状态的按钮组件。

**使用示例：**

```tsx
import { Button } from './components/button';

// Filled 样式，小尺寸，默认状态
<Button style="Filled" size="S" state="Default" label="按钮" />

// Tonal 样式，中等尺寸
<Button style="Tonal" size="M" label="按钮" />

// Outline 样式，大尺寸
<Button style="Outline" size="L" label="按钮" />

// Text 样式，不显示图标
<Button style="Text" iconOrNot={false} label="按钮" />
```

**Props：**

- `label?: string` - 按钮文字（默认：'按钮'）
- `icon?: React.ReactNode | null` - 自定义图标
- `iconOrNot?: boolean` - 是否显示图标（默认：true）
- `textOrNot?: boolean` - 是否显示文字（默认：true）
- `style?: 'Filled' | 'Outline' | 'Text' | 'Tonal'` - 样式变体（默认：'Filled'）
- `size?: 'L' | 'M' | 'S'` - 尺寸（默认：'S'）
- `state?: 'Default' | 'Disabled' | 'Pressed'` - 状态（默认：'Default'）
- `onClick?: () => void` - 点击事件处理函数
- `className?: string` - 额外的 CSS 类名

## Figma Code Connect

本项目已配置好与 Figma Code Connect 的集成。组件位于 `components/button/` 目录下。

