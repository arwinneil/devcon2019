<template>
  <div class="btn effect-hover click" :style="'--theme:' + theme + '; --size:' + size">
    <a :href="link" :target="target">
      <span>
        <slot></slot>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      default: "/"
    },
    target: {
      default: ""
    },
    theme: {
      default: "#fff"
    },
    size: {
      default: "45px"
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  /* cap the width */
  max-width: 500px;
  /* give ample whitespace around and inside of the container */
 
  text-align: center;
  font-family: "Permanent Marker", cursive;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(25)" opacity="0.3" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
    #fff;
  background-size: 16px, 100%;
  /* solid border */
  border: 0.4rem solid #000;
  /* position relative for the :before pseudo element */
  position: relative;
      text-shadow: -5px 5px #fff;


  &:hover {
    text-decoration: none;
  }
  padding: 10px 60px;

  @media screen and (max-width: $tablet) {
    padding: 0 20px;
  }

  a,
  a span {
    color: var(--theme);
  }

  &.effect-hover {
    overflow: hidden;
    position: relative;

    span {
      z-index: 20;
    }

    &:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  /////////////////////////////
  // Click
  ///////////////////////////

  &.click:active,
  &.click:focus {
    animation: pulse 0.3s;
    box-shadow: 0 0 0 1em rgba(black, 0);

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 var(--theme);
      }
    }
  }
}
</style>