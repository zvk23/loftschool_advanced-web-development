<template lang="pug">
  include ../mixins.pug

  .maincontent.admin
    .admin__header-container
      Header(
        title="Панель администратора"
      )
    
    .admin__tabs-container
      Tabs

    main.admin__main-container
      router-view

</template>

<script>
export default {
  components: {
    Header: () => import('components/Header.vue'),
    Tabs: () => import('components/Tabs.vue'),
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

  body {
    display: flex;
    flex-direction: column;
    align-items: stretch;

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
      background-position: top;
      opacity: 0.2;
    }
  }

  .admin-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
  }

  .app__route-info {
    margin: 55px 0;
  }

  .admin {
    position: relative;
    padding-bottom: 50px;

    &__main-container {
      margin-top: 50px;
    }
  }

</style>

