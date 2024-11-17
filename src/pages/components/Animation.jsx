import React, { useEffect, useState, useRef } from "react";
import "../../App.css";

export const AnimatedHR = ({
  id,
  className = "",
  duration = 1500,
  width = "5rem",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const hrElement = document.getElementById(id);
    if (hrElement) {
      observer.observe(hrElement);
    }

    return () => {
      if (hrElement) {
        observer.unobserve(hrElement);
      }
    };
  }, [id]);

  return (
    <hr
      id={id}
      className={`my-1 transition-all ease-out ${className}`}
      style={{
        width: isVisible ? width : "0",
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    />
  );
};

export const TypeWriter = ({ text = "", speed = 200 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed, isVisible]);

  return (
    <h3
      ref={elementRef}
      className="min-h-[20px] noto-serif-tc-regular"
      id="content"
    >
      {displayText}
    </h3>
  );
};
