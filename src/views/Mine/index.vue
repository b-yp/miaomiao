<template>
  <div id="main">
    <Header title="我的喵喵"></Header>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <TabBer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBer from "@/components/TabBer";
export default {
  name: "Mine",
  components: {
    Header,
    TabBer
  }
};
</script>

<style>
</style>