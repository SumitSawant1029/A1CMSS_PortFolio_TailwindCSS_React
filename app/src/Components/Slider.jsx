import { useRef, useEffect, useState } from "react";
import "./Slider.css";

// Replace these with your actual image paths
import imageBefore from "../assets/machines/machinedisplay1.jpg";
import imageAfter from "../assets/machines/machinedisplay2.jpg";
import handleImg from "../assets/MachineLogo/RideOn.png";

function Slider() {
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50); // slider position in percent

  useEffect(() => {
    const container = containerRef.current;
    const handle = handleRef.current;
    let isDragging = false;

    const startDrag = (e) => {
      e.preventDefault();
      isDragging = true;
    };

    const stopDrag = () => {
      isDragging = false;
    };

    const moveSlider = (clientX) => {
      const rect = container.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPos(percent);
    };

    const onMouseMove = (e) => {
      if (isDragging) moveSlider(e.clientX);
    };

    const onTouchMove = (e) => {
      if (isDragging && e.touches.length > 0) {
        moveSlider(e.touches[0].clientX);
      }
    };

    handle.addEventListener("mousedown", startDrag);
    handle.addEventListener("touchstart", startDrag, { passive: false });

    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);

    return () => {
      handle.removeEventListener("mousedown", startDrag);
      handle.removeEventListener("touchstart", startDrag);

      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);

      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div className="slider-container" ref={containerRef}>
      {/* Before image */}
      <img src={imageBefore} alt="Before" className="before-img" />

      {/* After image clipped */}
      <img
        src={imageAfter}
        alt="After"
        className="after-img"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      />

      {/* Slider handle wrapper (draggable area) */}
      <div
        className="slider-handle-wrapper"
        ref={handleRef}
        style={{ left: `${sliderPos}%` }}
      >
        <img
          src={handleImg}
          alt="Slider handle"
          className="slider-handle-img"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="label before-label">Before</div>
      <div className="label after-label">After</div>
    </div>
  );
}

export default Slider;
