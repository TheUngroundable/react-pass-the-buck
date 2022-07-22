import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import Draggable from "react-draggable";

interface BallProps {
  ballBoardRef: any;
}

const AnotherBallStyle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: navy;
  position: absolute;
  top: 400px;
  left: 50px;
`;

const BallStyle = styled.div`
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  background: #480e6e;
  border-radius: 50%;
`;

const Ball = (props: BallProps) => {
  const ballBoardRef = props.ballBoardRef;
  const ball = useRef() as React.MutableRefObject<HTMLDivElement>;
  const ballProps = gsap.getProperty(ball);
  //const radius = ball.current && ball.current.getBoundingClientRect().width / 2;
  //const tracker = InertiaPlugin.track(ball, "x,y")[0];
  const friction = -0.5;

  useEffect(() => {
    let vw = window.innerWidth;
    let vh = window.innerHeight;

    gsap.defaults({
      overwrite: true,
    });

    gsap.set(ball.current, {
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
  /*
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
*/

  const handleDrop = (e: any) => {
    //  this.setState({activeDrags: --this.state.activeDrags});
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove("hovered");
    }
  };

  return (
    <>
      <Draggable
        //axis="x"
        //handle=".handle"
        //defaultPosition={{ x: 0, y: 0 }}
        //position={null}
        //grid={[25, 25]}
        scale={1}
        onStop={() => {
          gsap.to(ball.current, {
            duration: 2.5,
            ease: "bounce.in",
            y: -500,
          });
        }}
        // onDrag={handleDrop}
        //</>  onStop={handleStop}
      >
        <AnotherBallStyle>
          <div ref={ball}></div>
        </AnotherBallStyle>
      </Draggable>
    </>
  );
};

export default Ball;
/*
   bounds: ballBoardRef,
      onPress() {
        gsap.killTweensOf(ball);
        this.update();
      },
      onDragEnd: animateBounce,
      onDragEndParams: [],*/
