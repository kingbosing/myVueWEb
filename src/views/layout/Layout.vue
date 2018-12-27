<template>
  <div class="app-wrapper">
    <navbar>1</navbar>
    <sidebar>
      <router-link to="/home/page">111223333333344</router-link>
    </sidebar>

    <div class="main-container">3
     
      <!-- <app-main></app-main> -->
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
// import { Navbar, Sidebar, AppMain, TagsView } from './components'
// import Breadcrumb from '@/components/Breadcrumb'
// import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'layout',
  // components: {
  //   Navbar,
  //   Sidebar,
  //   AppMain,
  //   TagsView,
  //   Breadcrumb
  // },
  // mixins: [ResizeMixin],
  
}
</script>


