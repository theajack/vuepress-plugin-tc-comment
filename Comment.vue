<template>
  <div></div>
</template>

<script>
import { renderComment } from './util';

export default {
  mounted () {
    setTimeout(()=>{
      // ! 等待父元素渲染完成
      renderComment()
    }, 1000);
  }
}
</script>
