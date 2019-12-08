<template>
  <div>
    <div class="menu" :class="{'open': isBurgerOpen}">
      <ul>
        <router-link tag="li" @click.native="sidebarMenuClose" to="/"><a>Home</a></router-link>
        <router-link tag="li" @click.native="sidebarMenuClose" to="/relatedNews"><a>Marketplace</a></router-link>
        <router-link tag="li" @click.native="sidebarMenuClose" to="/relatedNews"><a>Booster Packs</a></router-link>
      </ul>
      <button class="button">Play</button>
    </div>
    <div
      @click="sidebarToggle"
      role="button"
      class="burger" :class="{'open': isBurgerOpen}">
      <div class="burger__bar"></div>
      <div class="burger__bar"></div>
      <div class="burger__bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isBurgerOpen: false
    }
  },
  methods: {
    sidebarToggle () {
      this.isBurgerOpen = !this.isBurgerOpen
    },
    sidebarMenuClose () {
      this.isBurgerOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: -webkit-box;
  margin-right: 190px;
  ul {
    display: flex;
    margin: 16px 12px 0px 0px;
    padding: 0;
    list-style: none;
    li {
      margin: 0;
      padding: 0;
      &:last-child {
        margin-right: 0;
      }
      a {
        color: #fff;
        display: block;
        font-size: 14px;
        font-family: 'Geomanist-Book';
        letter-spacing:0.04em;
        text-decoration: none;
        padding: 0 31px 25px 34px;
        border-bottom: 2px solid transparent;
        &:focus, &:active {
          border-image: url(../assets/bg-a.png) 60 30;
          background-image: url(../assets/shad-a.png);
        }
        &.active-link {
          color: #000;
        }
      }
    }
  }
}

.button {
  color: #fff;
  font-size: 14px;
  font-family: 'Geomanist-Book';
  letter-spacing:0.04em;
  background: #6f6d99;
  border: none;
  padding: 12px 39px 12px 39px;
  border-radius: 50px;
  margin-top: 6px;
}

@media only screen and (max-width: 960px) {
  .menu {
    background: #252334;
    display: block;
    position: fixed;
    left: -180px;
    transition: 0.5s;
    top: 65px;
    bottom: 0;
    padding: 0 22px 22px 22px;
    ul {
      display: block;
      margin-bottom: 14px;
      li {
        margin-bottom: 8px;
        a {
          color: #fff;
          padding: 0 15px 9px 15px;
        }
      }
    }
    button {
      margin-top: 0;
      margin-left: 15px;
    }
    &.open {
      left: 0;
    }
  }
}

.burger {
  width: 24px;
  height: 24px;
  position: fixed;
  top: 25px;
  left: 15px;
  z-index: 150;
  cursor: pointer;
  @media only screen and (min-width: 960px) {
    display: none;
  }
  &__bar {
    width: 21px;
    height: 4px;
    border-radius: 2px;
    background-color: #ffffff;
    position: relative;
    transition: all 0.2s ease-in-out;
    &:not(:last-of-type) {
      margin-bottom: 3px;
    }
  }
  &.open {
    .burger__bar {
      &:nth-of-type(1) {
        top: 7px;
        transform: rotate(-45deg);
      }
      &:nth-of-type(2) {
        opacity: 0;
        visibility: hidden;
      }
      &:nth-of-type(3) {
        bottom: 7px;
        transform: rotate(45deg);
      }
    }
  }
}

</style>
