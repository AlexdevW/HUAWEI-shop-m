<template>
  <div class="hw-app">
    <div class="hw-app-header">
      <HwHeader></HwHeader>
    </div>
    <div class="hw-app-main">
      <router-view></router-view>
    </div>
    <div class="hw-app-footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
import HwHeader from '@/components/HwHeader'
export default {
  components: {
    HwHeader
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1228424 */
  src: url('//at.alicdn.com/t/font_1228424_obp1iix10u.eot');
  src: url('//at.alicdn.com/t/font_1228424_obp1iix10u.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1228424_obp1iix10u.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1228424_obp1iix10u.woff') format('woff'),
  url('//at.alicdn.com/t/font_1228424_obp1iix10u.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1228424_obp1iix10u.svg#iconfont') format('svg');
}
.icon {
  font-family: 'iconfont';
}
html, body, div, span,
h1, h2, h3, h4, h5, h6, p,
a,
em, img,
small, strike, strong,
b, u, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas,
figure, figcaption, footer, header, hgroup,
main, menu, nav, section, summary,
audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
display: none;
}
body {
line-height: 1;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}

blockquote:before, blockquote:after,

q:before, q:after {
content: '';
content: none;
}

table {
border-collapse: collapse;
border-spacing: 0;
}

html,
body {
  height: 100%;

  .hw-app {
    display: flex;
    height: 100%;
    flex-direction: column;

    &-main {
      flex: 1;
      overflow: hidden;
    }

  }
}
</style>
