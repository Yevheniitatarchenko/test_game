<template>
  <div class="news-list">
    <News />
    <RelatedNews />
  </div>
</template>

<script>
import News from '../views/News'
import RelatedNews from '../views/RelatedNews'

export default {
  components: {
    News,
    RelatedNews
  }
}
</script>

<style lang="scss" scoped>
.news-list {
  display: flex;
  justify-content: space-between;
}

.related-news {
  width: calc(36.5% - 34px);
}

@media only screen and (max-width: 1116px) {
  .description {
    margin-top: -112px!important;
  }
}

@media only screen and (max-width: 815px) {
  .related-news {
    display: none!important;
  }
}

</style>
