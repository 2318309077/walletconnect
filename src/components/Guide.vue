<script setup>
import GuideItem from "./GuideItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import WcIcon from "./icons/IcoWalletConnect.vue";
import CodeIcon from "./icons/IconCoding.vue";
</script>

<template>
  <div class="wrapper-page">
    <GuideItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Get in started</template>
      <div :style="[isSM ? { width: '89%' } : {}]">
        <p>
          To use the new version of web3modal first you will need to create your
          Vue project using vite.<br /><br />
          Initialize your project using the npm terminal command<br />
          <code>npm create vue@3</code> or <code>npm create vue@2</code><br />
          You will be able to use Vue2 or Vue3 indifferently.
        </p>
      </div>
    </GuideItem>

    <GuideItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Add Packages</template>
      <div :style="[isSM ? { width: '89%' } : {}]">
        <p>
          After creating your project you will need to install the components
          necessary <br v-if="isSM" />
          for <code>web3modal</code> to work.<br />
          Run this command from the terminal:<br />
        </p>
      </div>
      <b-tabs position="is-left" class="block mt-4">
        <b-tab-item label="yarn">
          <pre
            class="language-sh"
          ><code>yarn add @web3modal/ethereum @web3modal/html @wagmi/core ethers        </code
          ><b-button style="padding:2px 5px; height: auto" v-clipboard:copy="yarn" class="top-right-center btn-icon ml-4"><i class="fa-solid fa-copy"></i></b-button></pre>
        </b-tab-item>
        <b-tab-item label="npm">
          <pre
            class="language-sh"
          ><code>npm install @web3modal/ethereum @web3modal/html @wagmi/core ethers     </code
          ><b-button style="padding:2px 5px; height: auto" v-clipboard:copy="npm" class="top-right-center btn-icon ml-4"><i class="fa-solid fa-copy"></i></b-button></pre>
        </b-tab-item>
      </b-tabs>
    </GuideItem>

    <GuideItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Import</template>
      <div :style="[isSM ? { width: '89%' } : {}]">
        <p>
          After installing the necessary packages, import them into your
          component
          <em>(ex: MyComponent.vue)</em>
        </p>
      </div>
      <br v-if="isSM" />
      <pre class="language-js"><code>import {
  configureChains,
  createClient,
  watchAccount,
  getProvider,
} from "@wagmi/core";
import { goerli, mainnet } from "@wagmi/core/chains";
import { Web3Modal } from "@web3modal/html";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";</code><b-button style="padding:2px 5px; height: auto" v-clipboard:copy="importWeb3" class="top-right btn-icon ml-4"><i class="fa-solid fa-copy"></i></b-button></pre>
    </GuideItem>

    <GuideItem>
      <template #icon>
        <CodeIcon />
      </template>
      <template #heading>Configure</template>
      <div :style="[isSM ? { width: '89%' } : {}]">
        <p>
          Once you have imported the components, you will need to create a
          function to inject and prepare the environment for WalletConnect. To
          do this you will need to create such a function and put it in the
          mounted() as in the example.
        </p>
        <br v-if="isSM" />
      </div>
      <pre class="language-js"><code>  name: "wallet-connect",
  data() {
    return {
      web3modal: {},
      web3client: {},
      account: "",
      balance: "",
    };
  },
  mounted() {
    const app = this;
    const chains = [mainnet, goerli];
    // Wagmi Core Client
    const { provider } = configureChains(chains, [
      walletConnectProvider({
        projectId: "YOUR_PROJECT_ID",
      }),
    ]);
    const wagmiClient = createClient({
      autoConnect: true,
      connectors: modalConnectors({ appName: "web3Modal", chains }),
      provider,
    });
    // Web3Modal and Ethereum Client
    app.web3client = new EthereumClient(wagmiClient, chains);
    app.web3modal = new Web3Modal(
      { projectId: "YOUR_PROJECT_ID" },
      app.web3client
    );
    app.connect();
  },
};</code><b-button style="padding:2px 5px; height: auto" v-clipboard:copy="codeMounted" class="top-right btn-icon ml-4"><i class="fa-solid fa-copy"></i></b-button></pre>
    </GuideItem>

    <GuideItem>
      <template #icon>
        <WcIcon />
      </template>
      <template #heading>Usage</template>

      <p>
        Finally you will have to create the function to show the modal and
        connect.<br />You will also notice that 2 other functions have been
        triggered. in particular <code>connect()</code> - which is called in the
        mounted - will be used precisely to try a "background connection" to see
        if the user had previously connected. <br /><br />
        The other function, <code>readState()</code> , will be used to "read"
        information about--in this case--the user. But it could be extended by,
        for example, instantiating a smart contract, etc...
      </p>
      <br v-if="isSM" />
      <pre class="language-js"><code>  methods: {
    async openModal() {
      const app = this;
      app.web3modal.openModal();
    },
    async readState() {
      const app = this;
      const account = app.web3client.getAccount();
      app.account = account.address;
      const provider = getProvider();
      console.log("Provider:", provider);
      const signer = provider.getSigner();
      console.log("Signer:", signer);
      const balance = await provider.getBalance(app.account);
      app.balance = balance;
      console.log("Balance:", balance.toString());
    },
    async connect() {
      const app = this;
      console.log("Try background connection");
      app.readState();
      watchAccount((connected) => {
        app.readState();
      });
    },
  },</code><b-button style="padding:2px 5px; height: auto" v-clipboard:copy="codeModal" class="top-right btn-icon ml-4"><i class="fa-solid fa-copy"></i></b-button></pre>
    </GuideItem>
  </div>
</template>

<script>
import checkViewport from "@/mixins/checkViewport";
export default {
  mixins: [checkViewport],
  data() {
    return {
      yarn: "yarn add @web3modal/ethereum @web3modal/html @wagmi/core ethers",
      npm: "npm install @web3modal/ethereum @web3modal/html @wagmi/core ethers",
      importWeb3:
        "import { configureChains, createClient } from '@wagmi/core'; import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'; import { Web3Modal } from '@web3modal/html';import {EthereumClient,modalConnectors, walletConnectProvider } from '@web3modal/ethereum';",
      codeMounted:
        "export default { name: 'wallet-connect', data() { return { web3modal: {}, }; }, mounted() { const app = this; const chains = [mainnet, goerli]; const { provider } = configureChains(chains, [ walletConnectProvider({ projectId: 'YOUR_PROJECT_ID', }), ]); const wagmiClient = createClient({ autoConnect: true, connectors: modalConnectors({ appName: 'web3Modal', chains }), provider, }); const ethereumClient = new EthereumClient(wagmiClient, chains); app.web3modal = new Web3Modal( { projectId: 'YOUR_PROJECT_ID' }, ethereumClient ); },};",
      codeModal:
        "methods: { async connect() { const app = this; console.log('try init connect'); app.web3modal.openModal(); console.log('iter finish'); },},",
    };
  },
};
</script>
