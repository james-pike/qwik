import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "~/media/thunder.png?jsx";



export default component$(() => {

  
  return (

    

    
<div class={["container", styles.hero, styles["video-container"]]}>
  <video class={styles["video-bg"]} autoPlay muted loop>
  <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
  </video>
  <div class={styles["video-content"]}>

    <h1>
      So <span class="highlight">fantastic</span>
      <br />
      to have <span class="highlight">you</span> here
    </h1>
    <p>Have fun building your App with Qwik.</p>
    <div class={styles["button-group"]}>
      <button
        onClick$={async () => {
          // Your button code here
        }}
      >
        Time to celebrate
      </button>
      <a
        href="https://qwik.builder.io/docs"
        target="_blank"
        class="button button-dark"
      >
        Explore the docs
      </a>
    </div>
  </div>
</div>

  );
});
