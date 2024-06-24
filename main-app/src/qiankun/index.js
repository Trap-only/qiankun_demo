import { registerMicroApps, start } from "qiankun";
import store from "@/store";

registerMicroApps([
  {
    name: "sub-app",
    entry: "http://localhost:7663", // 微应用入口
    container: "#subapp-viewport", // 微应用挂载的div
    activeRule: "/sub-app/",
    props: {
      // 此处将父应用的 store 传入子应用
      store,
    },
  },
]);

export default start;
