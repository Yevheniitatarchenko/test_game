<template>
  <div class="news">
    <div class="nav-button">
      <a class="back">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12">
            <path d="M6.890,-0.000 C6.604,-0.000 6.319,0.101 6.102,0.303 C6.102,0.303 -0.001,5.987 -0.001,5.987 C-0.001,5.987 6.102,11.670 6.102,11.670 C6.534,12.072 7.237,12.074 7.672,11.675 C8.106,11.276 8.109,10.626 7.677,10.224 C7.677,10.224 3.127,5.987 3.127,5.987 C3.127,5.987 7.677,1.749 7.677,1.749 C8.109,1.347 8.106,0.697 7.672,0.298 C7.455,0.099 7.172,-0.000 6.890,-0.000 Z" id="path-1" class="cls-2" fill-rule="evenodd"/>
          </svg>
        </span>
        Back
      </a>
      <router-link class="back related-new" to="/relatedNews">
          Related News
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12">
              <path d="M1.079,12.000 C1.364,12.000 1.649,11.898 1.866,11.696 C1.866,11.696 7.969,5.998 7.969,5.998 C7.969,5.998 1.866,0.299 1.866,0.299 C1.435,-0.104 0.732,-0.106 0.297,0.294 C-0.138,0.695 -0.140,1.346 0.292,1.749 C0.292,1.749 4.841,5.998 4.841,5.998 C4.841,5.998 0.292,10.246 0.292,10.246 C-0.140,10.649 -0.138,11.301 0.297,11.701 C0.513,11.900 0.796,12.000 1.079,12.000 Z" id="path-1" class="cls-2" fill-rule="evenodd"/>
            </svg>
          </span>
      </router-link>
    </div>

    <div class="slide-nav"></div>
    <div class="swiper-box">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          class="swiper-item"
          v-for="(item, i) in news"
          :key="i"
        >
          <div class="swiper-content">
            <img :src="item.image" alt="user">
            <div class="title">
              <h2>{{item.title}}</h2>
              <p>{{item.date}}</p>
            </div>
            <div class="description">
              <p>{{item.description}}</p>
              <p>{{item.description}}</p>
            </div>
          </div>
          <div class="line"></div>
          <div class="menu">
            <div class="menu-left">
              <div class="like">
                <a href="#"><img src="../assets/Like.png" alt="notifications">345</a>
              </div>
              <div class="views">
                <a href="#"><img src="../assets/views.png" alt="notifications">7.649</a>
              </div>
            </div>
            <div class="menu-right">
              <ul>
                <li><a href="#"><img src="../assets/share.png" alt="share"></a></li>
                <li><a href="#"><img src="../assets/facebook.png" alt="facebook"></a></li>
                <li><a href="#"><img src="../assets/twitter.png" alt="twitter"></a></li>
              </ul>
            </div>
          </div>
        </swiper-slide>
      </swiper>
        <div class="bttn-round slide-controls prev">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12">
              <path d="M6.890,-0.000 C6.604,-0.000 6.319,0.101 6.102,0.303 C6.102,0.303 -0.001,5.987 -0.001,5.987 C-0.001,5.987 6.102,11.670 6.102,11.670 C6.534,12.072 7.237,12.074 7.672,11.675 C8.106,11.276 8.109,10.626 7.677,10.224 C7.677,10.224 3.127,5.987 3.127,5.987 C3.127,5.987 7.677,1.749 7.677,1.749 C8.109,1.347 8.106,0.697 7.672,0.298 C7.455,0.099 7.172,-0.000 6.890,-0.000 Z" id="path-1" class="cls-2" fill-rule="evenodd"/>
            </svg>
          </span>
          <p>See Previous</p>
        </div>
        <div class="bttn-round slide-controls next">
          <p>See Next</p>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12">
            <path d="M1.079,12.000 C1.364,12.000 1.649,11.898 1.866,11.696 C1.866,11.696 7.969,5.998 7.969,5.998 C7.969,5.998 1.866,0.299 1.866,0.299 C1.435,-0.104 0.732,-0.106 0.297,0.294 C-0.138,0.695 -0.140,1.346 0.292,1.749 C0.292,1.749 4.841,5.998 4.841,5.998 C4.841,5.998 0.292,10.246 0.292,10.246 C-0.140,10.649 -0.138,11.301 0.297,11.701 C0.513,11.900 0.796,12.000 1.079,12.000 Z" id="path-1" class="cls-2" fill-rule="evenodd"/>
          </svg>
          </span>
        </div>
    </div>

    <div class="content-box">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          class="swiper-item"
          v-for="(comment, i) in comments"
          :key="i"
        >
          <div class="user-comment">
            <div class="comments">
              <a href="#"><img src="../assets/comments.png" alt="notifications"><span>Comments:</span> 48</a>
            </div>
            <div class="menu-comments">
              <ul>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Recent</a></li>
              </ul>
            </div>
          </div>
          <div class="line"></div>
          <div class="list-comments">
            <div class="add-comment">
              <input type="text" placeholder="Type comment here..">
              <button class="button-input">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="14" height="10" viewBox="0 0 14 10">
                    <path d="M13.753,4.182 C13.753,4.182 9.734,0.265 9.734,0.265 C9.365,-0.098 8.766,-0.098 8.397,0.265 C8.027,0.628 8.027,1.216 8.397,1.578 C8.397,1.578 10.963,4.069 10.963,4.069 C10.963,4.069 0.947,4.069 0.947,4.069 C0.424,4.069 0.001,4.486 0.001,4.998 C0.001,5.510 0.424,5.927 0.947,5.927 C0.947,5.927 10.963,5.927 10.963,5.927 C10.963,5.927 8.397,8.417 8.397,8.417 C8.027,8.780 8.027,9.368 8.397,9.730 C8.767,10.093 9.365,10.093 9.734,9.730 C9.734,9.730 13.753,5.814 13.753,5.814 C13.980,5.590 14.050,5.286 13.999,4.997 C14.050,4.710 13.979,4.405 13.753,4.182 Z" id="path-1" class="cls-1" fill-rule="evenodd"/>
                  </svg>
                </span>
              </button>
              <div
                class="comment"
              >
                <div class="user">
                  <img :src="comment.image" alt="user">
                </div>
                <div class="description">
                  <h2>{{comment.name}}<span>{{comment.date}}</span></h2>
                  <p>{{comment.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: 1,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
          disabledClass: 'disabled'
        }
      },
      news: [
        {
          id: '1',
          title: 'The International 2018 Collector’',
          date: 'July 24, 2018',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
          image: 'https://previews.dropbox.com/p/thumb/AAobG0sCmOCxuggC15LnqdtYUDrva3t0GhswjbITfL8do3hNmLZY7h2_vmmrhs2p7AEy9H7PLqepB0_cDvbcfKeHULZwy_Y-oSkTLztqrt2bXTKQV6vcuYNe9WT9QAsZ9-jg1ejccv6MlERL4cCHRn1pHuPnUnWTVGu38fdwlMM-4ig-p-PKDE37kreupUhWVP1TPqXOVvD2zZv1rGgrBoptcQprQUmuLIgf8UgJG-82DBd8JDY2qne7vqKqKs4ZjvHG8vDMr6VhSa_9uo3g8-IQ12lWkz7DGh-FP-M8HC1Ogi2Bcf_y03VPuadMnzrLv4eHb59VEGlxk2NfhHNjptFU/p.png?size=1600x1200&size_mode=3'
        },
        {
          id: '2',
          title: 'The International 2018 Collector’',
          date: 'July 24, 2018',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
          image: 'https://previews.dropbox.com/p/thumb/AAobG0sCmOCxuggC15LnqdtYUDrva3t0GhswjbITfL8do3hNmLZY7h2_vmmrhs2p7AEy9H7PLqepB0_cDvbcfKeHULZwy_Y-oSkTLztqrt2bXTKQV6vcuYNe9WT9QAsZ9-jg1ejccv6MlERL4cCHRn1pHuPnUnWTVGu38fdwlMM-4ig-p-PKDE37kreupUhWVP1TPqXOVvD2zZv1rGgrBoptcQprQUmuLIgf8UgJG-82DBd8JDY2qne7vqKqKs4ZjvHG8vDMr6VhSa_9uo3g8-IQ12lWkz7DGh-FP-M8HC1Ogi2Bcf_y03VPuadMnzrLv4eHb59VEGlxk2NfhHNjptFU/p.png?size=1600x1200&size_mode=3'
        },
        {
          id: '4',
          title: 'The International 2018 Collector’',
          date: 'July 24, 2018',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
          image: 'https://previews.dropbox.com/p/thumb/AAobG0sCmOCxuggC15LnqdtYUDrva3t0GhswjbITfL8do3hNmLZY7h2_vmmrhs2p7AEy9H7PLqepB0_cDvbcfKeHULZwy_Y-oSkTLztqrt2bXTKQV6vcuYNe9WT9QAsZ9-jg1ejccv6MlERL4cCHRn1pHuPnUnWTVGu38fdwlMM-4ig-p-PKDE37kreupUhWVP1TPqXOVvD2zZv1rGgrBoptcQprQUmuLIgf8UgJG-82DBd8JDY2qne7vqKqKs4ZjvHG8vDMr6VhSa_9uo3g8-IQ12lWkz7DGh-FP-M8HC1Ogi2Bcf_y03VPuadMnzrLv4eHb59VEGlxk2NfhHNjptFU/p.png?size=1600x1200&size_mode=3'
        }
      ],
      comments: [
        {
          id: '1',
          image: 'https://previews.dropbox.com/p/thumb/AApbPuQgXgS6z_51gUE_KqiN0hFxwcf25tUtJoN4nZm7A7wtEQ1BtH3T45pUuOR331I0ngGpmKnAQkLBzNc64OpOLxoOPoLuoCKLqG5XnFzwoNesT0jN97zODElLWwJ6WJL6dESyc88t6mOul5v7W0b3HyfwrOJFS1qSbjRlgWDZmL55zudW0WSaXrCiipkVKnsmJ4ZFiIpbuZV7kCnZp_6RPGmojRDvAS8OAXSZ89B1RI5vYJczFsKqtCvBYiecUhHL8FqSu7pOJSg3Xr0avovJSp2KRF6Bli9DJxquCE26jpXBdTj4GjfuOGnJTbLEqKU8M9aOOLm1CGhp2n18m4FB/p.png?fv_content=true&size_mode=5',
          name: 'Svetlakov',
          date: '22 May',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500.'
        },
        {
          id: '2',
          image: 'https://previews.dropbox.com/p/thumb/AApbPuQgXgS6z_51gUE_KqiN0hFxwcf25tUtJoN4nZm7A7wtEQ1BtH3T45pUuOR331I0ngGpmKnAQkLBzNc64OpOLxoOPoLuoCKLqG5XnFzwoNesT0jN97zODElLWwJ6WJL6dESyc88t6mOul5v7W0b3HyfwrOJFS1qSbjRlgWDZmL55zudW0WSaXrCiipkVKnsmJ4ZFiIpbuZV7kCnZp_6RPGmojRDvAS8OAXSZ89B1RI5vYJczFsKqtCvBYiecUhHL8FqSu7pOJSg3Xr0avovJSp2KRF6Bli9DJxquCE26jpXBdTj4GjfuOGnJTbLEqKU8M9aOOLm1CGhp2n18m4FB/p.png?fv_content=true&size_mode=5',
          name: 'Svetlakov',
          date: '45 May',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.news {
  width: 63.5%;
}

.nav-button {
  display: flex;
  justify-content: space-between;
}

.back {
  color: #fff;
  display: block;
  font-size: 18px;
  font-family: 'Geomanist-Book';
  letter-spacing: 0.04em;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 31px;
  span {
    margin-right: 19px;
  }
}

.related-new {
  display: none;
  span {
    margin-left: 19px;
    margin-right: 0;
  }
}

.title {
  h2 {
    margin: 0 0 16px 0;
    font-size: 22px;
    color: #fff;
    font-family: 'Geomanist-Book';
    letter-spacing:0.04em;
  }
  p {
    color: #6b698d;
    font-size: 16px;
    font-family: 'Geomanist-Book';
    letter-spacing:0.04em;
    margin: 0 0 32px 0;
  }
}

.description {
  p {
    color: #9d9acc;
    font-size: 16px;
    font-family: 'Geomanist-Book';
    letter-spacing:0.04em;
    line-height: 24px;
    margin: 0 0 32px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.line {
  border-bottom: solid 2px #302f43;
}

.menu {
  padding: 28px 25px 26px 35px;
  display: flex;
  justify-content: space-between;
}

.menu-left {
  display: flex;
  .like {
    margin-right: 46px;
  }
  img {
    margin-right: 14px;
    margin-bottom: -3px;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-family: 'Geomanist-Book';
    letter-spacing:0.04em;
    line-height: 25px;
  }
}

.menu-right {
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0 21px 0 0;
      padding: 0;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.user-comment {
  display: flex;
  justify-content: space-between;
  padding: 30px 52px 26px 30px;
}

.comments {
  img {
    margin-right: 20px;
    margin-bottom: -6px;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-family: 'Geomanist-Book';
    letter-spacing:0.04em;
    span {
      color: #9d9acc;
    }
  }
}

.menu-comments {
  display: -webkit-box;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0 21px 0 0;
      padding: 0;
      a {
        color: #9d9acc;
        font-size: 16px;
        font-family: 'Geomanist-Book';
        letter-spacing: 0.04em;
        text-decoration: none;
        padding: 0 9px 26px 9px;
        border-bottom: 2px solid transparent;
        &:focus, &:active {
          border-image: url(../assets/line.png) 1 15;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.list-comments {
  padding: 27px 25px 61px 25px;
}

.add-comment {
  input {
    max-width: 97%;
    width: 100%;
    background: #2a293b;
    color: #6b698d;
    font-size: 16px;
    font-family: 'Geomanist-Book';
    letter-spacing: 0.04em;
    border: none;
    border-radius: 5px;
    padding: 23px 0px 23px 25px;
    margin-bottom: 16px;
    &::placeholder {
      color: #6b698d;
    }
    &:focus {
      outline: none;
    }
  }
}

.comment {
  display: flex;
  border-bottom: solid 2px #302f43;
  padding: 18px 0 24px 0;
  .user {
    img {
      margin-right: 17px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
  }
  .description {
    h2 {
      color: #9d9acc;
      font-size: 18px;
      font-family: 'Geomanist-Book';
      letter-spacing: 0.04em;
      margin: 0 0px 22px 0;
      padding: 0;
      span {
        color: #6b698d;
        font-size: 16px;
        margin-left: 13px;
      }
    }
    p {
      color: #fff;
      font-size: 14px;
      font-family: 'Geomanist-Book';
      letter-spacing: 0.04em;
      line-height: 24px;
      margin: 0;
      padding: 0;
    }
  }
}

.cls-2 {
  fill: #9d9acc;
  opacity: 0.4;
}

.cls-1 {
  fill: #9d9acc;
}

.slide-nav {
  border-radius: 15px;
  background-color: rgb(36, 35, 51);
  opacity: 0.8;
  box-shadow: 0px 22px 40px 0px rgba(36, 35, 51, 0.45);
  height: 70px;
  width: 100%;
  margin-bottom: 20px;
}

.button-input {
  position: absolute;
  border: none;
  padding: 25px 19px;
  margin-top: -82px;
  right: 24px;
  border-radius: 5px;
  background: #2A293B;
  cursor: pointer;
}

/deep/ .swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

/deep/ .swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  align-items: flex-end;
}

/deep/ .swiper-item {
  flex-shrink: 0;
}

.swiper-box {
  position: relative;
  background-color: #242333;
  box-shadow: 0px 22px 40px 0px rgba(36, 35, 51, 0.45);
  border-radius: 15px;
  margin-bottom: 20px;
  .slide-controls.bttn-round {
    position: absolute;
    top: -22px;
    margin-top: -40px;
  }
}

.swiper-content {
  padding: 24px;
  img {
    border-radius: 15px;
    margin-bottom: 23px;
    display: block;
    width: 100%;
  }
}

.slide-controls.bttn-round {
  width: 130px;
  height: 180px;
  left: auto;
  background: none;
  box-shadow: none;
  display: flex;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  > img,
  svg {
    cursor: pointer;
  }
  &.prev {
    left: 25px;
    p {
      margin-left: 21px;
    }
  }
  &.next {
    right: -10px;
    p {
      margin-right: 21px;
    }
  }
  &.disabled {
    cursor: initial;
  }
  p {
    margin-top: -1px;
    font-size: 14px;
    color: #9d9acc;
    font-family: 'Geomanist-Book';
    letter-spacing:0.04em;
    cursor: pointer;
  }
}

.btns-wrap {
  padding: 20px 20px 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.content-box {
  background-color: #242333;
  box-shadow: 0px 22px 40px 0px rgba(36, 35, 51, 0.45);
  border-radius: 15px;
  padding: 0px 0px;
}

@media only screen and (max-width: 815px) {
  .news {
    width: 100%;
  }
  .related-new {
    display: block;
  }
}

@media only screen and (min-width: 769px) {
  .related-news {
    display: none;
  }
}

@media only screen and (max-width : 480px) {
  .user-comment {
    padding: 22px 15px 18px 15px
  }

  .menu-comments {
    ul {
      li {
        margin: 0;
        padding: 0;
        a {
          font-size: 13px;
          padding: 0 9px 21px 9px;
        }
      }
    }
  }

  .comments {
    a {
      font-size: 13px;
    }
    img {
      margin-right: 9px;
      margin-bottom: -6px;
    }
  }

  .comment {
    .description {
      h2 {
        font-size: 16px;
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }

  .button-input {
    padding: 25px 5px;
  }

  .achievements {
    margin-right: 16px;
  }

  .title {
    h2 {
      font-size: 20px;
    }
    p {
      margin-bottom: 10px;
      font-size: 15px;
    }
  }

  .swiper-content {
    padding: 20px;
  }

  .description p {
    line-height: 17px;
    font-size: 14px;
  }

  .menu-left {
    .like {
      margin-right: 5px;
    }
    a {
      font-size: 14px;
    }
  }
}

</style>
