<template>
  <div class="container">
    <v-button>默认按钮</v-button>
    <v-button icon="setting">默认按钮</v-button>
    <v-button :loading="true">默认按钮</v-button>
    <v-button disabled>默认按钮</v-button>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/basic/button/button";
export default {
  name: "",
  data() {
    return {
      content: `
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
      `.replace(/\t+| +/g, '').trim()
    };
  },
  components: {
    "v-button": Button
  }
};
</script>
