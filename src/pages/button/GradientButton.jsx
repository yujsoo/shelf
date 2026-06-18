import styles from './GradientButton.module.css';

export const hint = {
  title: 'How it works',
  steps: [
    'button에 그라디언트 배경을 입힙니다. padding: 3px이 시각적인 border-width 역할을 합니다.',
    '내부 <span>이 어두운 단색 배경으로 그라디언트를 덮어, padding 영역만 테두리처럼 노출됩니다.',
    'hover 시 span의 배경을 제거하면 그라디언트가 전면으로 드러납니다.',
  ],
};

export const code = `button {
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
}

button span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

button:hover span {
  background: none;
}

button:active {
  transform: scale(0.9);
}`;

export default function GradientButton() {
  return (
    <button className={styles.btn} type="button">
      <span className={styles.btnSpan}>Hover me</span>
    </button>
  );
}
