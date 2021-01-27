<template>
  <div></div>
</template>

<script>
import {
  provider,
  loadScript,
} from './util'

let timer = null

export default {
  mounted () {
    renderComment();
  }
}

function renderComment () {
    timer = setTimeout(() => {
      provider.clear()
      if(!provider.render()){
        renderComment()
      }
    }, 300)
}
</script>
