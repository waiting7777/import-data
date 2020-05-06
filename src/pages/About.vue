<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden mt-16">
      <div class="grid grid-cols-8">
        <div class="col-span-5">
          <div class="text-2xl font-bold">Hi, I'm Waiting7777</div>
          <br/>
          <p>I'm a <span class="text-blue-500">Frontend Engineer</span>, play hard with <span class="text-teal-500">Data Visualization</span>, <span class="text-yellow-500">Javascript</span>, <span class="text-green-500">Vue</span>, <span class="text-orange-500">D3</span>, <span class="text-pink-500">Phaser</span> for performance and Infographic, Also know about <span class="text-purple-500">Blockchain</span> knowledge with previous job, And Card & Chess Gamer, such as MTG, Hearthstone, Teamfight Tactic.</p>
          <br/>
          <br/>
          <p>
            <i class="em em-round_pushpin" aria-role="presentation" aria-label="ROUND PUSHPIN"></i>Taipei, Taiwan<br />
            <i class="em em-email" aria-role="presentation" aria-label="HOT BEVERAGE"></i><a href="mailto:waiting0819@msn.com">Let's chat!</a>
          </p>
        </div>
        <div class="col-span-3">456</div>
      </div>
      <hr class="my-8" />
      <div>
        <div class="w-full">
          <div class="grid grid-cols-3 gap-3 cursor-pointer">
            <div class="text-center">
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-pink-600" @click="changeTab">
                <font-awesome :icon="['fas', 'dragon']" class="mr-3" /> Profile
              </a>
            </div>
            <div class="text-center">
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white" @click="changeTab">
                <font-awesome :icon="['fas', 'dragon']" class="mr-3" /> Profile
              </a>
            </div>
            <div class="text-center">
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white" @click="changeTab">
                <font-awesome :icon="['fas', 'dragon']" class="mr-3" /> Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-8">      
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  },
  methods: {
    changeTab() {
      console.log(123)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 700px;
}

.em {
  font-size: 10px;
  margin-right: 5px;
  margin-top: -3px;
}
</style>
