import styles from './CenterLineButton.module.css';

export const hint = {
  title: 'How it works',
  steps: [
    'button::after로 가상 요소를 만들어 하단에 2px 라인을 배치합니다.',
    '기본 상태는 width: 0%, left: 50% — 가운데에서 너비 없이 숨겨져 있습니다.',
    'hover 시 width: 100%, left: 0%로 전환되며 가운데에서 양쪽으로 퍼지는 라인이 나타납니다.',
  ],
};

export const code = `button {
  font-size: 18px;
  color: #888;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

button:focus,
button:hover {
  color: #111;
}

button:focus:after,
button:hover:after {
  width: 100%;
  left: 0%;
}

button:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}`;

export default function CenterLineButton() {
  return (
    <button className={styles.btn} type="button">
      Hover me
    </button>
  );
}
