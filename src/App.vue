<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "assets/fonts/icons/style.css";
  @import "assets/styles/styleMain";

  @font-face {
    font-family: 'Overpass';
    src: url('assets/fonts/overpass/overpass-600.woff');
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'SourceSansPro';
    src: url('assets/fonts/sourceSansPro/source-sans-pro-400.woff');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'SourceSansPro';
    src: url('assets/fonts/sourceSansPro/source-sans-pro-700.woff');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  html {
    color: #000;
    font-size: 16px;
    font-family: $sourceSansPro;
    font-weight: 400;
    line-height: 1.3;
  }

  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    transition: $transition;
  }

  button {
    font: inherit;
    cursor: pointer;
    transition: $transition;
  }
</style>
