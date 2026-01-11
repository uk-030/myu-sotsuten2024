<script>
  import { onMount } from "svelte";

  let loaded = false;
  let loadComp = false;
  onMount(() => {
    setTimeout(() => {
      loaded = true;
    }, 2300);
    setTimeout(() => {
      loadComp = true;
    }, 5300);
  });
</script>

<!-- ローディングアニメ―ション -->
<div id="load" class:loaded class:loadComp>
  <div class="load-main">
      <img class="tr tr-1" src="./fl-1.png">
      <img class="tr tr-2" src="./fl-2.png">
      <img class="tr tr-3" src="./fl-3.png">
  </div>
</div>

<style>
  /* ローディング背景 */
  .load-main {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #0081CC;
    z-index: 9999;
    transition: all 0.5s;
  }
  #load.loaded .load-main {
    animation: loaded 3s;
  }
  #load.loadComp .load-main
  {
    opacity: 0;
    visibility: hidden;
    z-index: -999;
  }
  @keyframes loaded {
    10% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  /* ローディング折り紙アニメーション */
  /* 折り紙ってなんや　多分2年前の遺物コメ　2026/1/12戸田より */
  .tr {
    position: fixed;
  }
  .tr-1 {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 10%;
    min-width: 100px;
    height: auto;
    z-index: 1111;
    animation: ani1 4s infinite ease-in-out;
  }
  .tr-2 {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 15%;
    min-width: 150px;
    height: auto;
    z-index: 1110;
    animation: ani2 5s infinite ease-in-out;
  }
  .tr-3 {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 20%;
    min-width: 200px;
    height: auto;
    z-index: 1109;
    animation: ani1 6s infinite ease-in-out;
  }
  @keyframes ani1 {
    9% {
      transform: translateX(-50%) translateY(-50%) rotateZ(0deg);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) rotateZ(360deg);
    }
  }
  @keyframes ani2 {
    9% {
      transform: translateX(-50%) translateY(-50%) rotateZ(0deg);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) rotateZ(-360deg);
    }
  }
  /* アニメーションここまで */
</style>
