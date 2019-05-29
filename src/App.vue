<template>
  <div id="app">
    <ul>
      <li v-for="(v,k) in images" :key="k" @click="openGallery(k)">
        <img :src="v.src" title="点击播放视频" alt="点击播放视频" fluid top>
        <p>图片尺寸：{{v.info[0]}}*{{v.info[1]}}</p>
        <div slot="footer" class="text-muted">上传者：{{v.realname}}</div>
      </li>
    </ul>
    <FancyBox :group="images" :options="options" ref="fancyBox"></FancyBox>
  </div>
</template>

<script>
import FancyBox from "./components/core.vue";

export default {
  name: "app",
  components: {
    FancyBox
  },
  data() {
    return {
      images: [
        {
          src: "https://sachinchoolur.github.io/lightgallery.js/static/img/1.jpg",
          opts: {
            caption: "图片尺寸",
            thumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-1.jpg"
          },
          info: [600, 800],
          realname: "admin"
        },
        {
          src: "https://sachinchoolur.github.io/lightgallery.js/static/img/2.jpg",
          opts: {
            caption: "图片尺寸",
            thumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg"
          },
          info: [600, 800],
          realname: "admin"
        },
        {
          src: "https://sachinchoolur.github.io/lightgallery.js/static/img/13.jpg",
          opts: {
            caption: "图片尺寸",
            thumb: "https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg"
          },
          info: [600, 800],
          realname: "admin"
        }
      ],
      options: {
        type: "image",
        thumbs: {
          autoStart: true,
          axis: "x"
        },
        buttons: [
          "zoom",
          // "share",
          // "slideShow",
          // "fullScreen",
          "download",
          // "thumbs",
          "close"
        ],
        // hideScrollbar: true,
        hash: null,
        lang: "zh_CN",
        caption: function(instance, item) {
          /*
          var parent = $(this).parent();
          var thumb = item.$thumb[0];
          var width = thumb.naturalWidth;
          var height = thumb.naturalHeight;
          return (
            "图片尺寸：" +
            width +
            "*" +
            height +
            "<br>" +
            parent.find(".card-footer").html()
          );
          */
        }
      }
    };
  },
  methods: {
    openGallery(index) {
      this.$refs.fancyBox.open(index);
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
img {
  max-width: 100%;
}
</style>
