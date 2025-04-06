'use client';

import {
    animate,
    motion,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
} from 'motion/react';
import { useRef } from 'react';

export default function ScrollLinked() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    const maskImage = useScrollOverflowMask(scrollXProgress);

    return (
        <div id="example">
            <motion.ul
                ref={ref}
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage: maskImage,
                }}
            >
                <ul>
                    <li style={{ background: '#ff0088' }}>
                        <div>Card 1</div>
                        <div>Details go here</div>
                    </li>
                    <li
                        style={{
                            background:
                                'linear-gradient(to right, #d100ff, white)',
                        }}
                    >
                        <div>Card 2</div>
                        <div>More info</div>
                    </li>
                    <li style={{ background: '#0d63f8' }}>
                        <div>Card 3</div>
                        <div>Another detail</div>
                    </li>
                </ul>
            </motion.ul>

            <StyleSheet />
        </div>
    );
}

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress) {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    );

    useMotionValueEvent(scrollXProgress, 'change', (value) => {
        const prev = scrollXProgress.getPrevious();
        if (value === 0) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            );
        } else if (value === 1) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            );
        } else if (prev === 0 || prev === 1) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            );
        }
    });

    return maskImage;
}

function StyleSheet() {
    return (
        <style>{`
           html, body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: sans-serif;
}

ul {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-x: auto;
  gap: 24px;
  padding: 0 24px;
  margin: 0;
  list-style: none;

  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

ul::-webkit-scrollbar {
  display: none;
}

li {
  flex: 0 0 400px;
  height: 80vh;
  border-radius: 20px;
  background: pink;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


        `}</style>
    );
}
