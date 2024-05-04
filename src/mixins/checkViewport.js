export default {
  data() {
    return {
      isSM: false,
      isMD: false,
      isLG: false,
      isXL: false,
    };
  },
  async mounted() {
    this.checkViewport();
  },
  methods: {
    checkViewport() {
      // console.log("init Function viewport");
      // console.log(window.innerWidth);
      const app = this;
      if (window.innerWidth < 981) {
        app.isSM = true;
        app.isMD = false;
        app.isLG = false;
        app.isXL = false;
      } else if (window.innerWidth < 1024 && window.innerWidth > 980) {
        app.isSM = false;
        app.isMD = true;
        app.isLG = false;
        app.isXL = false;
      } else if (window.innerWidth > 1024 && window.innerWidth < 1440) {
        app.isSM = false;
        app.isMD = false;
        app.isLG = true;
        app.isXL = false;
      } else if (window.innerWidth > 1440) {
        app.isSM = false;
        app.isMD = false;
        app.isLG = false;
        app.isXL = true;
      }

      window.addEventListener("resize", function () {
        if (window.innerWidth < 981) {
          app.isSM = true;
          app.isMD = false;
          app.isLG = false;
          app.isXL = false;
        } else if (window.innerWidth > 768 && window.innerWidth < 980) {
          app.isSM = false;
          app.isMD = true;
          app.isLG = false;
          app.isXL = false;
        } else if (window.innerWidth > 1024 && window.innerWidth < 1440) {
          app.isSM = false;
          app.isMD = false;
          app.isLG = true;
          app.isXL = false;
        } else if (window.innerWidth > 1440) {
          app.isSM = false;
          app.isMD = false;
          app.isLG = false;
          app.isXL = true;
        }
      });
      // console.log("check mobile", app.isSM);
      // console.log("check tablet", app.isMD);
      // console.log("check desktop", app.isLG);
      // console.log("check widescreen", app.isXL);
    },
  },
};
