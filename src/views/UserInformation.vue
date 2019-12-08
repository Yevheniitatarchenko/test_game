<template>
  <div class="user">
    <div class="icon">
      <div class="achievements">
        <a href="#"><img src="../assets/achievements.png" alt="achievements"></a>
        <div class="active-achievements">
          <img src="../assets/ellipse-violet.png" alt="ellipse">
        </div>
      </div>
      <div class="notifications">
        <a href="#"><img src="../assets/notifications.png" alt="notifications"></a>
        <div class="active-notifications">
          <img src="../assets/ellipse-green.png" alt="ellipse">
        </div>
      </div>
    </div>
    <div class="money">
      <p>142</p>
    </div>
    <div class="user-info">
      <a href="#"><img src="../assets/user.png" alt="user"></a>
      <div class="active-user">
        <img src="../assets/user-active.png" alt="ellipse">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
}

.icon {
  display: flex;
  margin-top: 12px;
  margin-right: 29px;
}

.achievements {
  margin-right: 37px;
}

.active-achievements {
  position: absolute;
  top: 12px;
  margin-left: 11px;
}

.active-notifications {
  position: absolute;
  top: 12px;
  margin-left: 7px;
}

.active-user {
  position: absolute;
  top: 46px;
  margin-left: 34px;
  img {
    width: 100%!important;
    height: 100%!important;
  }
}

.money {
  background-image: url(../assets/money.png);
  width: 85px;
  height: 38px;
  margin: 5px 14px 0px 0px;
  background-repeat: no-repeat;
  p {
    color: #cecbff;
    font-size: 14px;
    letter-spacing:0.04em;
    font-family: 'Geomanist-Book';
    margin: 10px 0px 0px 41px;
    &:first-letter {
      color: #fff;
    }
  }
}

.user-info {
  img {
    border-radius: 100px;
    height: 50px;
    width: 50px;
  }
}

@media only screen and (max-width: 360px) {
  .achievements {
    margin-right: 15px;
  }
}

</style>
