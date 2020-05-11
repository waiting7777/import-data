<template>
  <section class="masthead">
    <div class="hero-title">Import Data</div>
    <div class="hero-sub-title">Never perfect. Perfection goal that changes. Never stops moving. Can chase, cannot catch.</div>
    <div class="hero-sub-title">從來沒有完美。完美是變動的目標，從未停止，能夠追求，但永遠達不到。<span class="italic">~ 阿巴瑟</span></div>
  </section>
</template>

<style lang="scss" scoped>
  .masthead {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 40vh; /* if you don't want it to take up the full screen, reduce this number */
    overflow: hidden;
    background: #000;
  }

  .hero-title {
    font-style: normal;
    font-weight: bold;
    color: #eee;
    font-size: 9vmin;
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
    margin-bottom: 15px;
  }

  .hero-sub-title {
    color: #cbd5e0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  }
</style>
