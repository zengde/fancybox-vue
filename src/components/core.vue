<template>
  <div
    class="fancybox-container"
    :class="[opts.baseClass,classObject]"
    role="dialog"
    tabindex="-1"
    :id="`fancybox-container-${id}`"
    v-if="isVisible"
  >
    <div class="fancybox-bg"></div>
    <div class="fancybox-inner">
      <div class="fancybox-infobar">
        <span data-fancybox-index>{{currIndex+1}}</span>&nbsp;/&nbsp;
        <span data-fancybox-count>{{group.length}}</span>
      </div>
      <div class="fancybox-toolbar">
        <component v-for="(v,k) in current.opts.buttons" :key="k" :is="v"></component>
      </div>
      <div class="fancybox-navigation">
        <arrowLeft/>
        <arrowRight/>
      </div>
      <div class="fancybox-stage">
        <component class="fancybox-slide fancybox-slide--current" :is="'fancy-'+current.opts.type" :item="current"></component>
      </div>
      <div class="fancybox-caption">
        <div class="fancybox-caption__body">
          {{current.opts.caption}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/css/core.css";
import defaults from "./core/default";

export default {
  props: {
    group: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    download: () => import("./core/download"),
    zoom: () => import("./core/zoom"),
    close: () => import("./core/close"),
    arrowLeft: () => import("./core/arrowLeft"),
    arrowRight: () => import("./core/arrowRight"),
    smallBtn: () => import("./core/smallBtn"),
    fancyImage: () => import("./core/fancyimage"),
    fancyVideo: () => import("./core/fancyvideo"),
    fancyIframe: () => import("./core/fancyiframe")
  },
  data() {
    return {
      opts: Object.assign({}, defaults, this.options),
      locales: ["en", "de", "zh_CN"],
      id: 0,
      currIndex: 0,
      prevIndex: null,
      prevPos: null,
      currPos: 0,
      firstRun: true,
      slides: {},
      isVisible: false,
      idleSecondsCounter: 0,
      hasHiddenControls: false
    };
  },
  computed: {
    classObject() {
      let $current = this.current;
      let opts = $current.opts;
      return {
        "fancybox-is-open": this.isVisible,
        "fancybox-show-toolbar": !!(opts.toolbar && opts.buttons),
        "fancybox-show-infobar": !!(opts.infobar && this.group.length > 1),
        "fancybox-show-caption": !!opts.caption,
        "fancybox-show-nav": !!(opts.arrows && this.group.length > 1),
        "fancybox-is-modal": !!opts.modal
      };
    },
    current() {
      if (this.currIndex < 0 || this.currIndex >= this.group.length) return {};
      let item = this.group[this.currIndex];
      // todo should only overrite some opts {buttons,toolbar,infobar,caption,arrows,modal,type}
      item.opts = Object.assign({}, this.opts, item.opts);
      return item;
    }
  },
  created() {
    let locale = this.locales.includes(this.opts.lang) ? this.opts.lang : "en";
    import(/* webpackChunkName: "lang-[request]" */ "@/locales/" + locale).then(
      msgs => {
        this.$i18n.mergeLocaleMessage(this.$i18n.locale, msgs.default);
      }
    );
  },
  methods: {
    init() {},
    close() {
      this.isVisible = false;
    },
    open(index) {
      this.isVisible = true;
      this.$set(this, "currIndex", index);
    },
    previous(duration) {
      this.jumpTo(this.currIndex - 1, duration);
    },
    next(duration) {
      this.jumpTo(this.currIndex + 1, duration);
    },
    jumpTo(pos, duration) {
      let self = this;
      let groupLen = self.group.length;
      let loop;
      loop = self.opts.loop;
      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }
      self.currIndex = pos;
    },
    showControls() {
      this.hasHiddenControls = false;
      this.idleSecondsCounter = 0;
    },
    hideControls() {
      this.hasHiddenControls = true;
    },
    toggleControls() {},
    download() {}
  }
};
</script>
