<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden mt-16">
      <div class="grid grid-cols-8">
        <div class="col-span-4">
          <div class="text-2xl font-bold">Hi, I'm Waiting7777</div>
          <br/>
          <p>I'm a <span class="text-blue-500">Frontend Engineer</span>, play hard with <span class="text-teal-500">Data Visualization</span>, <span class="text-yellow-500">Javascript</span>, <span class="text-green-500">Vue</span>, <span class="text-orange-500">D3</span>, <span class="text-pink-500">Phaser</span> for performance and Infographic, Also know about <span class="text-purple-500">Blockchain</span> knowledge with previous job, And Card & Chess Gamer, such as MTG, Hearthstone, Teamfight Tactic.</p>
          <br/>
          <br/>
          <p>
            <i class="em em-round_pushpin" aria-role="presentation" aria-label="ROUND PUSHPIN"></i>Taipei, Taiwan<br />
            <i class="em em-email" aria-role="presentation" aria-label="HOT BEVERAGE"></i><a href="mailto:waiting0819@msn.com">Let's Talk!</a>
          </p>
        </div>
        <div class="col-span-4">456</div>
      </div>
      <hr class="my-8" />
      <div>
        <div class="grid grid-cols-3 gap-3">
          <div class="text-center">
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-pink-600" @click="changeTab">
              <font-awesome :icon="['fas', 'rocket']" class="mr-3" /> Project
            </a>
          </div>
          <div class="text-center">
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white" @click="changeTab">
              <font-awesome :icon="['fas', 'briefcase']" class="mr-3" /> Work
            </a>
          </div>
          <div class="text-center">
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white" @click="changeTab">
              <font-awesome :icon="['fas', 'gamepad']" class="mr-3" /> Game
            </a>
          </div>
        </div>
      </div>
      <hr class="my-8">      
      <div>
        <div class="grid grid-cols-3 gap-3">
          <a href="https://joyso.io/trade/en/markets/joy_eth" target="_blank">
            <div class="max-w-sm rounded overflow-hidden shadow-lg card">
              <img class="w-full shadow-md" src="/images/joyso.png" alt="Joyso">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Joyso</div>
                <p class="text-gray-700 text-sm">
                  JOYSO 是一個混合式去中心化交易所，運用智能合約技術確保交易的安全和效率。
                </p>
              </div>
              <div class="px-6 self-center">
                <Tag text="Blockchain" color="purple" />
              </div>
            </div>
          </a>
          <div class="max-w-sm rounded overflow-hidden shadow-lg card">
            <a href="https://tns.joyso.io/" target="_blank">
              <img class="w-full shadow-md" src="/images/tns.png" alt="Joyso">
            </a>
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2">Tron Name Service</div>
              <p class="text-gray-700 text-sm">
                建在 Tron 上面，以智能合約機制用好記的字串來取代繁雜的地址，在 2019-01 曾獲得 <a href="https://tronaccelerator.io/" target="_blank" class="text-blue-500">Tron Accelerator</a> 評審獎。
              </p>
            </div>
            <div class="px-6 self-center">
              <Tag text="Blockchain" color="purple" />
            </div>
          </div>
        </div>
      </div>
      <hr class="my-8">      
    </div>
  </Layout>
</template>

<script>
import Tag from "~/components/Tag.vue"
export default {
  components: {
    Tag
  },
  metaInfo: {
    title: 'About Me'
  },
  methods: {
    changeTab() {
      console.log(123)
    }
  }
}
</script>

<style lang="scss" scoped>
.em {
  font-size: 10px;
  margin-right: 5px;
  margin-top: -3px;
}
.card {
  height: 380px;
  display: grid;
  grid-template-rows: 180.19px auto 50px;
  padding-bottom: 1rem;
  img {
    height: 180.19px;
  }
}
</style>
