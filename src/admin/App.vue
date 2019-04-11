<template lang="pug">
  include ../mixins.pug

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
      appLogin(
        v-if="showLogin"
        @closeLoginForm="showLogin = !showLogin"
      )

      AboutPage

      WorkPage

      ReviewsPage

</template>

<script>
import Header from './src/components/Header'
import Tabs from './src/components/Tabs'
import Route from './src/components/Route'
import appLogin from './src/components/Login'
import AboutPage from './src/components/About'
import WorkPage from './src/components/WorkPage'
import ReviewsPage from './src/components/Reviews'

export default {
  components: {
    Header,
    Tabs,
    AboutPage,
    Route,
    WorkPage,
    ReviewsPage,
    appLogin
  },
  data() {
    return {
      showLogin: true
    }
  },
  methods: {
    closeLoginForm() {
      console.log('this', this);
    }
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
  @import "../styles/admin/app-login.pcss";
  @import "../styles/admin/tabs.pcss";
  @import "../styles/admin/route.pcss";
  @import "../styles/admin/add-btn.pcss";
  @import "../styles/admin/works.pcss";
  @import "../styles/admin/add-work.pcss";
  @import "../styles/admin/btn.pcss";
  @import "../styles/admin/setup-skills.pcss";
  @import "../styles/admin/skills-list.pcss";
  @import "../styles/admin/reviews.pcss";
  @import "../styles/admin/add-review.pcss";

  .app__route-info {
    margin: 55px 0;
  }

  .admin {
    position: relative;
    padding-bottom: 50px;

    &:before {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: url('../images/Mountain-Baloon.jpg');
      background-size: cover;
      background-position: botom;
      z-index: -1;
      opacity: 0.2;
    }
  }
</style>

