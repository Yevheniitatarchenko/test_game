<template>
  <div class="related-news">
    <h2>Related News</h2>
      <div class="relative-list" >
        <div
          v-for="(news, i) in news_description"
          :key="i"
          class="related-new"
        >
          <img class="img-responsive" :src="news.image" alt="img">
          <div class="description">
            <h2>{{news.title}}</h2>
            <p>{{news.description}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news_description: [
        {
          id: '1',
          title: 'Welcome to Nethernite',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
          image: 'https://previews.dropbox.com/p/thumb/AApTOIRpG3l_TUfn8dVGVrIarrgco1_K2uR9UWASylvmE_8YFHBeF3JKxKnztL1t6YvkqLXLlfmsE9i5DsT_uyTiMcnQ232Lz84ZuGG2k7ucY6LEDKGmfWwO3lm3tr3FjmeBIiivWfq6j3FToUuqXSfTOzmzZ7D7A4ztHIewjZ1HqBu3kABJYHNs-uOOekumQireehPqSH06mpmnOlufEcexAKcYWtGlrW3jcbK7rWZJQYv6If_fzodeq-4Tal17mL50zUPzLiR8MTLwKvfI2cZ7_Sjg9HhwQmt9lfUevyrY7lW9I2JNv9SsWgiiv59D_8EVm4rHZ9Vzk3mDQlEBLGNHIkf3MvUgm4ggNfY5hK_QEQ/p.png?size=1600x1200&size_mode=3'
        },
        {
          id: '2',
          title: 'Welcome to Nethernite',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
          image: 'https://previews.dropbox.com/p/thumb/AApTOIRpG3l_TUfn8dVGVrIarrgco1_K2uR9UWASylvmE_8YFHBeF3JKxKnztL1t6YvkqLXLlfmsE9i5DsT_uyTiMcnQ232Lz84ZuGG2k7ucY6LEDKGmfWwO3lm3tr3FjmeBIiivWfq6j3FToUuqXSfTOzmzZ7D7A4ztHIewjZ1HqBu3kABJYHNs-uOOekumQireehPqSH06mpmnOlufEcexAKcYWtGlrW3jcbK7rWZJQYv6If_fzodeq-4Tal17mL50zUPzLiR8MTLwKvfI2cZ7_Sjg9HhwQmt9lfUevyrY7lW9I2JNv9SsWgiiv59D_8EVm4rHZ9Vzk3mDQlEBLGNHIkf3MvUgm4ggNfY5hK_QEQ/p.png?size=1600x1200&size_mode=3'
        },
        {
          id: '3',
          title: 'Welcome to Nethernite',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
          image: 'https://previews.dropbox.com/p/thumb/AApTOIRpG3l_TUfn8dVGVrIarrgco1_K2uR9UWASylvmE_8YFHBeF3JKxKnztL1t6YvkqLXLlfmsE9i5DsT_uyTiMcnQ232Lz84ZuGG2k7ucY6LEDKGmfWwO3lm3tr3FjmeBIiivWfq6j3FToUuqXSfTOzmzZ7D7A4ztHIewjZ1HqBu3kABJYHNs-uOOekumQireehPqSH06mpmnOlufEcexAKcYWtGlrW3jcbK7rWZJQYv6If_fzodeq-4Tal17mL50zUPzLiR8MTLwKvfI2cZ7_Sjg9HhwQmt9lfUevyrY7lW9I2JNv9SsWgiiv59D_8EVm4rHZ9Vzk3mDQlEBLGNHIkf3MvUgm4ggNfY5hK_QEQ/p.png?size=1600x1200&size_mode=3'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.related-news {
  width: 100%;
  display: block;
  h2 {
    font-size: 18px;
    color: #fff;
    font-family: 'Geomanist-Book';
    letter-spacing:0.04em;
    margin: 0 0 31px 0px;
  }
}

.relative-list {
  flex-wrap: wrap;
  display: flex;
}

.related-new {
  max-width: 443px;
  background-repeat: no-repeat;
  box-shadow: 0px 22px 40px 0px rgba(36, 35, 51, 0.45);
  margin-bottom: 40px;
  margin: auto auto 35px auto;
  display: block;
  img {
    width: 100%;
  }
  .description {
    text-shadow: 0px 22px 40px rgba(36, 35, 51, 0.45);
    background-color: #242333;
    opacity: .9;
    padding: 23px 69px 29px 27px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    margin-top: -124px;
    z-index: 3;
    h2 {
      margin: 0px 0px 13px 0px;
    }
    p {
      margin: 0;
      font-size: 14px;
      color: #9d9acc;
      font-family: 'Geomanist-Book';
      letter-spacing:0.04em;
    }
  }
}

@media only screen and (max-width: 1324px) {
  .related-new {
    .description {
      margin-top: -102px;
      padding: 15px 24px 15px 24px;
    }
  }
}

@media only screen and (max-width: 1196px) {
  .related-new {
    .description {
      margin-top: -89px;
      padding: 10px 10px 10px 10px;
    }
  }
}

@media only screen and (max-width: 1116px) {
  .related-new {
    .description {
      margin-top: -89px;
      h2 {
        font-size: 14px;
      }
      p {
        font-size: 15px;
      }
    }
  }
}

@media only screen and (max-width: 1050px) {
  .related-new {
    margin-bottom: 45px;
    .description {
      margin-top: -82px;
      h2 {
        font-size: 15px;
        margin-bottom: 5px;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .related-news {
    display: block;
  }
}

@media only screen and (max-width: 423px) {
  .description {
    margin-top: -111px!important;
    padding: 15px 13px 15px 12px!important;
  }
}

</style>
