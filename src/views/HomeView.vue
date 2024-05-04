<template>
  <div id="app" class="columns is-desktop">
    <div class="column is-12-mobile is-12-tablet is-4-desktop">
      <header style="position: relative">
        <div
          class="px-6"
          :class="{
            'fixed-pos': !isMD && !isSM,
            'has-text-centered': !isLG && !isXL,
          }"
        >
          <div>
            <img
              src="https://yomi.fra1.digitaloceanspaces.com/logo_white.png"
              width="200"
              style="color: var(--textColor); font-size: 14px"
            />
            <h1 class="green mt-5">Wallet Connect Guide</h1>
          </div>

          <div class="wrapper">
            <WalletConnect />
          </div>
          <div class="has-text-centered">
            <p :class="{ 'mt-6': isSM }">
              Developed with ♥︎ by
              <a href="https://yomi.digital" target="blank">YOMI</a>
            </p>
            <p>
              Wallet Connect -
              <a href="https://docs.walletconnect.com/2.0/" target="blank"
                >docs</a
              >
            </p>
            <div
              class="
                mt-4
                is-flex is-align-items-center is-justify-content-center
              "
            >
              <a
                href="https://github.com/yomi-digital/walletconnect-vue-boilerplate"
                target="_blank"
                class="mr-3"
                ><i class="fa-brands fa-github"></i
              ></a>
              <a
                href="https://twitter.com/YOMI_WEB3"
                target="_blank"
                class="mr-3"
                ><i class="fa-brands fa-twitter"></i
              ></a>
              <a
                href="https://discord.gg/w54Jbd4Qhz"
                target="_blank"
                class="mr-3"
                ><i class="fa-brands fa-discord"></i
              ></a>
              <a
                href="https://www.linkedin.com/company/yomidigitalhub/"
                target="_blank"
                class="mr-3"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
              <a href="https://www.instagram.com/yomi_web3/" target="_blank"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </div>
          </div>
        </div>

        <div v-if="isSM" class="bottom-center has-text-centered">
          <p>Scroll down to see the guide</p>
          <span class="material-symbols-outlined mt-2"> arrow_downward </span>
        </div>
      </header>
    </div>
    <div class="column is-12-mobile is-12-tablet is-7-desktop is-offset-1-desktop">
      <main>
        <Guide />
      </main>
    </div>
  </div>
</template>

<script >
import Guide from "@/components/Guide.vue";
import WalletConnect from "@/components/WalletConnect.vue";
import checkViewport from "@/mixins/checkViewport";

export default {
  mixins: [checkViewport],
  components: {
    Guide,
    WalletConnect,
  },
};
</script>



