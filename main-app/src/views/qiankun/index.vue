<template>
  <div id="subapp-viewport"></div>
</template>

<script>
import start from "@/qiankun/index";
export default {
  mounted() {
    // 启动微前端
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>
