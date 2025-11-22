import React from 'react';
import Home from './Home';

export type ButtonStyle = 'Filled' | 'Outline' | 'Text' | 'Tonal';
export type ButtonSize = 'L' | 'M' | 'S';
export type ButtonState = 'Default' | 'Disabled' | 'Pressed';

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode | null;
  iconOrNot?: boolean;
  textOrNot?: boolean;
  style?: ButtonStyle;
  size?: ButtonSize;
  state?: ButtonState;
  onClick?: (() => void) | undefined;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label = '按钮',
  icon = null,
  iconOrNot = true,
  textOrNot = true,
  style = 'Filled',
  size = 'S',
  state = 'Default',
  onClick,
  className = '',
}) => {
  // 尺寸配置
  const sizeConfig = {
    S: {
      gap: '4px',
      padding: '8px 16px',
      height: '44px',
    },
    M: {
      gap: '8px',
      padding: '12px 20px',
      height: 'auto',
    },
    L: {
      gap: '12px',
      padding: '16px 24px',
      height: 'auto',
    },
  };

  // 样式配置
  const getStyleConfig = () => {
    const isDisabled = state === 'Disabled';

    switch (style) {
      case 'Filled':
        return {
          backgroundColor: isDisabled
            ? 'rgba(248, 250, 247, 0.1)'
            : '#f8faf7',
          border: 'none',
          textColor: isDisabled ? '#f8faf7' : '#232625',
          iconColor: isDisabled ? '#f8faf7' : '#232625',
          pressedBg: 'rgba(117, 120, 118, 0.08)',
        };
      case 'Tonal':
        return {
          backgroundColor: isDisabled
            ? 'rgba(248, 250, 247, 0.1)'
            : '#232625',
          border: 'none',
          textColor: isDisabled ? '#f8faf7' : '#f8faf7',
          iconColor: isDisabled ? '#f8faf7' : '#f8faf7',
          pressedBg: 'rgba(255, 255, 255, 0.08)',
        };
      case 'Outline':
        return {
          backgroundColor: 'transparent',
          border: `1px solid ${isDisabled ? '#2e3130' : '#2e3130'}`,
          textColor: isDisabled ? '#f8faf7' : '#8f918f',
          iconColor: isDisabled ? '#f8faf7' : '#8f918f',
          pressedBg: 'rgba(0, 0, 0, 0.1)',
        };
      case 'Text':
        return {
          backgroundColor: 'transparent',
          border: 'none',
          textColor: isDisabled ? '#f8faf7' : '#fbfdfa',
          iconColor: isDisabled ? '#f8faf7' : '#fbfdfa',
          pressedBg: 'rgba(117, 120, 118, 0.1)',
        };
      default:
        return {
          backgroundColor: '#f8faf7',
          border: 'none',
          textColor: '#232625',
          iconColor: '#232625',
          pressedBg: 'rgba(117, 120, 118, 0.08)',
        };
    }
  };

  const styleConfig = getStyleConfig();
  const currentSize = sizeConfig[size as ButtonSize];
  const isDisabled = state === 'Disabled';
  const isPressed = state === 'Pressed';

  // 容器样式
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    height: size === 'S' ? '44px' : 'auto',
    position: 'relative',
  };

  // 内容容器样式
  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: styleConfig.backgroundColor,
    border: styleConfig.border,
    boxSizing: 'border-box',
  };

  // 状态层样式
  const stateLayerStyle: React.CSSProperties = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '4px',
    gap: currentSize.gap,
    padding: currentSize.padding,
    backgroundColor: isPressed ? styleConfig.pressedBg : 'transparent',
    opacity: isDisabled ? 0.38 : 1,
    cursor: isDisabled ? 'not-allowed' : onClick ? 'pointer' : 'default',
  };

  // 文字样式
  const textStyle: React.CSSProperties = {
    fontFamily: "'Noto Sans SC', sans-serif",
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    color: styleConfig.textColor,
    letterSpacing: '0.1px',
    whiteSpace: 'nowrap',
    margin: 0,
  };

  const handleClick = (): void => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  return (
    <div style={containerStyle} className={className} data-node-id="58:45">
      <div style={contentStyle} data-name="Content">
        <div
          style={stateLayerStyle}
          onClick={handleClick}
          data-name="State-layer"
        >
          {iconOrNot && (icon !== null ? icon : <Home size={20} color={styleConfig.iconColor} />)}
          {textOrNot && (
            <div style={textStyle}>
              <p style={{ margin: 0, lineHeight: '20px' }}>{label}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Button;

