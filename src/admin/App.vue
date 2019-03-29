<template lang="pug">
  .maincontent.admin
    .admin__header-container
      Header(
        title="Панель администратора"
      )
    
    .admin__tabs-container
      Tabs

    .admin__route-info-container
        Route(pageTitle="Обо мне")
    
    main.admin__main-container
      AboutPage
</template>

<script>
import Header from './src/components/Header'
import Tabs from './src/components/Tabs'
import Route from './src/components/Route'
import AboutPage from './src/components/SetupSkills'

export default {
  components: {
    Header,
    Tabs,
    AboutPage,
    Route
  }
}
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "../styles/blocks/admin.pcss";
  @import "../styles/admin/card.pcss";

  .app__route-info {
    margin: 55px 0;
  }
</style>

