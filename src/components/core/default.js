const defaults = {
  closeExisting: false,
  loop: false,
  gutter: 50,
  keyboard: true,
  preventCaptionOverlap: true,
  arrows: true,
  infobar: true,
  smallBtn: "auto",
  toolbar: "auto",
  buttons: [
    "zoom",
    // "share",
    // "slideShow",
    // "fullScreen",
    "download",
    // "thumbs",
    "close"
  ],
  idleTime: 3,
  protect: false,
  modal: false,
  image: {
    preload: false
  },
  ajax: {
    settings: {
      // This helps to indicate that request comes from the modal
      // Feel free to change naming
      data: {
        fancybox: true
      }
    }
  },
  iframe: {
    tpl: "fancyiframe",
    preload: true,
    css: {},
    attr: {
      scrolling: "auto"
    }
  },
  video: {
    tpl: "fancyvideo",
    format: "", // custom video format
    autoStart: true
  },
  defaultType: "image",
  animationEffect: "zoom",
  animationDuration: 366,
  zoomOpacity: "auto",
  transitionEffect: "fade",
  transitionDuration: 366,
  slideClass: "",
  baseClass: "",
  parentEl: "body",
  hideScrollbar: true,
  autoFocus: true,
  backFocus: true,
  trapFocus: true,
  fullScreen: {
    autoStart: false
  },
  touch: {
    vertical: true, // Allow to drag content vertically
    momentum: true // Continue movement after releasing mouse/touch when panning
  },
  hash: null,
  media: {},
  slideShow: {
    autoStart: false,
    speed: 3000
  },
  thumbs: {
    autoStart: false, // Display thumbnails on opening
    hideOnClose: true, // Hide thumbnail grid when closing animation starts
    parentEl: ".fancybox-container", // Container is injected into this element
    axis: "y" // Vertical (y) or horizontal (x) scrolling
  },
  wheel: "auto",
  lang: "en"
};

export default defaults
