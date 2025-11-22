import React, { useState } from 'react';
import { Button, ButtonStyle, ButtonSize } from '../components/button';

const App: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [buttonState, setButtonState] = useState<'Default' | 'Pressed' | 'Disabled'>('Default');
  const [selectedStyle, setSelectedStyle] = useState<ButtonStyle>('Filled');
  const [selectedSize, setSelectedSize] = useState<ButtonSize>('S');
  const [customLabel, setCustomLabel] = useState('按钮');

  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
    // 短暂显示按下状态
    setButtonState('Pressed');
    setTimeout(() => {
      setButtonState('Default');
    }, 150);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '40px', fontSize: '32px', fontWeight: 700 }}>
        UNI Component Library - Button Preview
      </h1>

      {/* Interactive Demo */}
      <section style={{ 
        marginBottom: '60px', 
        padding: '32px', 
        backgroundColor: '#1a1c1b', 
        borderRadius: '8px',
        border: '1px solid #2e3130'
      }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 500 }}>
          🎯 交互式演示
        </h2>
        <p style={{ marginBottom: '32px', fontSize: '14px', color: '#8f918f', lineHeight: '20px' }}>
          点击下面的按钮来体验交互效果。你可以切换不同的样式、尺寸和标签。
        </p>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '16px', 
            marginBottom: '24px',
            alignItems: 'center'
          }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '12px', 
                color: '#8f918f' 
              }}>
                样式
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {(['Filled', 'Tonal', 'Outline', 'Text'] as ButtonStyle[]).map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: selectedStyle === style ? '#f8faf7' : '#232625',
                      color: selectedStyle === style ? '#232625' : '#f8faf7',
                      border: '1px solid #2e3130',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      fontFamily: "'Noto Sans SC', sans-serif",
                    }}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '12px', 
                color: '#8f918f' 
              }}>
                尺寸
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {(['S', 'M', 'L'] as ButtonSize[]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: selectedSize === size ? '#f8faf7' : '#232625',
                      color: selectedSize === size ? '#232625' : '#f8faf7',
                      border: '1px solid #2e3130',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      fontFamily: "'Noto Sans SC', sans-serif",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '12px', 
                color: '#8f918f' 
              }}>
                标签文字
              </label>
              <input
                type="text"
                value={customLabel}
                onChange={(e) => setCustomLabel(e.target.value)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#232625',
                  color: '#f8faf7',
                  border: '1px solid #2e3130',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontFamily: "'Noto Sans SC', sans-serif",
                  width: '100px',
                }}
              />
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <Button
              style={selectedStyle}
              size={selectedSize}
              state={buttonState}
              label={customLabel}
              onClick={handleButtonClick}
            />
            <div style={{ 
              padding: '12px 16px', 
              backgroundColor: '#232625', 
              borderRadius: '4px',
              fontSize: '14px',
              color: '#8f918f'
            }}>
              <div style={{ marginBottom: '4px' }}>点击次数: <strong style={{ color: '#f8faf7' }}>{clickCount}</strong></div>
              <div>当前状态: <strong style={{ color: '#f8faf7' }}>{buttonState}</strong></div>
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '24px', 
          padding: '16px', 
          backgroundColor: '#0e1513', 
          borderRadius: '4px',
          fontSize: '12px',
          color: '#8f918f',
          lineHeight: '18px'
        }}>
          <strong style={{ color: '#f8faf7', display: 'block', marginBottom: '8px' }}>
            💡 提示：
          </strong>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>点击按钮会触发交互效果并更新计数</li>
            <li>按钮在点击时会短暂显示按下状态</li>
            <li>你可以切换不同的样式和尺寸来查看效果</li>
            <li>修改标签文字可以自定义按钮文本</li>
          </ul>
        </div>
      </section>

      {/* Filled Style */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 500 }}>
          Filled Style
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Default</p>
            <Button style="Filled" size="S" state="Default" />
          </div>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Pressed</p>
            <Button style="Filled" size="S" state="Pressed" />
          </div>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Disabled</p>
            <Button style="Filled" size="S" state="Disabled" />
          </div>
        </div>
      </section>

      {/* Tonal Style */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 500 }}>
          Tonal Style
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Default</p>
            <Button style="Tonal" size="S" state="Default" />
          </div>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Pressed</p>
            <Button style="Tonal" size="S" state="Pressed" />
          </div>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Disabled</p>
            <Button style="Tonal" size="S" state="Disabled" />
          </div>
        </div>
      </section>

      {/* Outline Style */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 500 }}>
          Outline Style
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Default</p>
            <Button style="Outline" size="S" state="Default" />
          </div>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Pressed</p>
            <Button style="Outline" size="S" state="Pressed" />
          </div>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Disabled</p>
            <Button style="Outline" size="S" state="Disabled" />
          </div>
        </div>
      </section>

      {/* Text Style */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 500 }}>
          Text Style
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Default</p>
            <Button style="Text" size="S" state="Default" />
          </div>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Pressed</p>
            <Button style="Text" size="S" state="Pressed" />
          </div>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Disabled</p>
            <Button style="Text" size="S" state="Disabled" />
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 500 }}>
          Sizes
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Small (S)</p>
            <Button style="Filled" size="S" state="Default" />
          </div>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Medium (M)</p>
            <Button style="Filled" size="M" state="Default" />
          </div>
          <div>
            <p style={{ marginBottom: '12px', fontSize: '14px', color: '#8f918f' }}>Large (L)</p>
            <Button style="Filled" size="L" state="Default" />
          </div>
        </div>
      </section>

      {/* Without Icon */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 500 }}>
          Without Icon
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <Button style="Filled" size="S" state="Default" iconOrNot={false} />
          <Button style="Tonal" size="S" state="Default" iconOrNot={false} />
          <Button style="Outline" size="S" state="Default" iconOrNot={false} />
          <Button style="Text" size="S" state="Default" iconOrNot={false} />
        </div>
      </section>

      {/* Interactive Examples */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 500 }}>
          交互示例
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <Button 
            style="Filled" 
            size="S" 
            state="Default" 
            label="确认" 
            onClick={() => alert('确认按钮被点击！')}
          />
          <Button 
            style="Filled" 
            size="S" 
            state="Default" 
            label="取消" 
            onClick={() => alert('取消按钮被点击！')}
          />
          <Button 
            style="Filled" 
            size="S" 
            state="Default" 
            label="提交" 
            onClick={() => alert('提交按钮被点击！')}
          />
        </div>
      </section>
    </div>
  );
};

export default App;

