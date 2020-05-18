
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition :name="transitionName" mode="out-in">
      <keep-alive>
              <router-view class="transitionBody"></router-view>
          </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.transitionBody{
 transition: all 0.4s ease-out; /*定义动画的时间和过渡效果*/
}
.transitionLeft-enter,
.transitionRight-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
   /*当左滑进入右滑进入过渡动画*/
}
.transitionLeft-leave-active,
.transitionRight-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
// .fadee-enter,
// .fadee-leave-active {
//   -webkit-transform: translate(100%, 0);
//   transform: translate(100%, 0);
// }

// .fadee-leave-active,
// .fadee-enter-active {
//   opacity: 0;
//   -webkit-transform: translate(-100%, 0);
//   transform: translate(-100% 0);
// }
</style>
