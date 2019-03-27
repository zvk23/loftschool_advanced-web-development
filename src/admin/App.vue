<template lang="pug">
  .maincontent
    Header
    Tabs
    .app__route-info
      Route
</template>

<script>
import Header from './src/components/Header'
import Tabs from './src/components/Tabs'
import Route from './src/components/Route'

export default {
  components: {
    Header,
    Tabs,
    Route
  }
}
</script>

<style lang="postcss">
  .app__route-info {
    margin: 55px 0;
  }



/* base */
  html {
  @media (min-width: 1200px) {
    font-size: 15px;
  }
  }
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  body {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f6f9fe;
  }

  * {
    font-family: 'Open Sans', sans-serif !important;
  }

  .wrapper {
    overflow: hidden;
    min-height: 100%;
    position: relative;
  }

  .container {
    margin: 0 auto;
    max-width: 1480px;
    width: 95%;
    position: relative;

    @media (max-width: 480px) {
      width: 85%;
    }
  }

  .fullscreen-section {
    height: 100vh;
    min-height: 650px;
  }

  button {
    border: 0;
    cursor: pointer;
    background: none;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button[type="button"] {
    cursor: pointer;
    background-color: transparent;
  }

  a {
    color: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
</style>

