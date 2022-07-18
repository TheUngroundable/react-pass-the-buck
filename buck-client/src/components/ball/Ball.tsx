import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BallProps {
  ballBoardRef: any;
}

const Ball = (props: BallProps) => {
  const ballBoardRef = props.ballBoardRef;
  const ball = useRef() as React.MutableRefObject<HTMLDivElement>;
  const ballProps = gsap.getProperty(ball);
  const radius = ball.current && ball.current.getBoundingClientRect().width / 2;
  const tracker = InertiaPlugin.track(ball, "x,y")[0];

  const friction = -0.5;

  useEffect(() => {
    let vw = window.innerWidth;
    let vh = window.innerHeight;

    gsap.defaults({
      overwrite: true,
    });

    gsap.set(ball, {
      xPercent: -50,
      yPercent: -50,
      x: vw / 2,
      y: vh / 2,
    });
    window.addEventListener("resize", () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
    });
  }, []);

  const draggable =
    ball.current &&
    ballBoardRef &&
    new Draggable(ball.current, {
      bounds: ballBoardRef,
      onPress() {
        gsap.killTweensOf(ball);
        this.update();
      },
      onDragEnd: animateBounce,
      onDragEndParams: [],
    });

  function animateBounce(x = 0, y = 0, vx = 0, vy = 0) {
    gsap.fromTo(
      ball,
      { x, y },
      {
        inertia: {
          x: vx,
          y: vy,
        },
        onUpdate: checkBounds,
      }
    );
  }

  function checkBounds() {
    const r: number = radius;
    const x: number = +ballProps("x");
    const y: number = +ballProps("y");
    let vx: number = tracker.get("x");
    let vy = tracker.get("y");
    let xPos = x;
    let yPos = y;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let hitting = false;

    if (x + r > vw) {
      xPos = vw - r;
      vx *= friction;
      hitting = true;
    } else if (x - r < 0) {
      xPos = r;
      vx *= friction;
      hitting = true;
    }

    if (y + r > vh) {
      yPos = vh - r;
      vy *= friction;
      hitting = true;
    } else if (y - r < 0) {
      yPos = r;
      vy *= friction;
      hitting = true;
    }

    if (hitting) {
      animateBounce(xPos, yPos, vx, vy);
    }
  }

  return (
    <>
      {/*<draggable> */}
      <p>pipo</p>
      <div ref={ball}>ciao</div>
    </>
  );
};

export default Ball;
