import React from "react";

import styles from './SkillsCaresolu.module.css'

const InfiniteCarousel = ({ items }) => {
  // Duplicate items for seamless looping
  const duplicatedItems = [...items, ...items,...items,...items];

  return (
    < div className={styles.Container}>
      <div className={styles.Track}>
        {duplicatedItems.map((item, index) => (
          <div className={styles.Item} key={index}><img src={item}></img></div>
        ))}
      </div>
     
    </div>
  );
};

// Usage example:
export default function SkillCaresoul() {
  const carouselItems = ["angular.png","css.png","html.png","js.png","jwt.png","node.png","react.png","springboot.png","sql.png","java.png","spring.png"]; // Your content here

  return (
    <div className={styles.holder}>
      <InfiniteCarousel items={carouselItems} />
    </div>
  );
}