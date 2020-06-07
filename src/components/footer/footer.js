import { h } from "preact";
import styles from "./footer.css";

function Footer() {
  return (
    <div class="container">
      <p class={`${styles.slightly_right}`}>
        Created by{" "}
        <a href="https://jimfilippou.github.io" rel="noopener" target="__blank">
          Jim Filippou
        </a>{" "}
        &nbsp;
        <i class="fas fa-bolt"></i>
      </p>
      <p class={`${styles.slightly_right}`}>
        Created by{" "}
        <a href="https://manosthemaster.github.io/" rel="noopener" target="__blank">
          Manos Stamatakis
        </a>{" "}
        &nbsp;
        <i class="fas fa-fan-table"></i>
      </p>
    </div>
  );
}
export default Footer;
