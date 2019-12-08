<template>
  <div class="header">
    <Menu />
    <UserInformation />
  </div>
</template>

<script>
import Menu from '../views/Menu'
import UserInformation from '../views/UserInformation'

export default {
  components: {
    Menu,
    UserInformation
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #242333;
  padding: 11px 20px 0px 20px;
  display: flex;
  justify-content: flex-end;
  color: #fff;
  margin-bottom: 38px;
  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  top: 0;
  @media only screen and (max-width: 960px) {
    padding-bottom: 7px;
  }
}
</style>
