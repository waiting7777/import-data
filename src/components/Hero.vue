<template>
  <section class="masthead">
    <div class="hero-title">Import Data</div>
    <div class="hero-sub-title text-xl text-gray-400 mb-4">Focus on Coding, Card Gaming</div>
  </section>
</template>

<style lang="scss" scoped>
  .masthead {
    margin-top: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 35vh; /* if you don't want it to take up the full screen, reduce this number */
    overflow: hidden;
    background-size: cover;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 49%, rgba(0,0,0,0.65) 100%), url('/images/hero.png') no-repeat center center scroll;
  }

  .hero-title {
    font-style: normal;
    font-weight: bold;
    color: #eee;
    font-size: 10vmin;
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
    margin-bottom: 15px;
  }

  .hero-sub-title {
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  }
</style>
