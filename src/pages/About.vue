<template>
  <Layout>
    <div class="container mx-auto overflow-x-hidden mt-16">
      <div class="grid grid-cols-8 mb-8">
        <div class="col-span-4">
          <div class="text-2xl font-bold">Hi, I'm Waiting7777</div>
          <br/>
          <p>I'm a <span class="text-blue-500">Frontend Engineer</span>, play hard with <span class="text-teal-500">Data Visualization</span>, <span class="text-yellow-500">Javascript</span>, <span class="text-green-500">Vue</span>, <span class="text-orange-500">D3</span>, <span class="text-pink-500">Phaser</span> for performance and Infographic, Also know about <span class="text-purple-500">Blockchain</span> knowledge with previous job, And Card & Chess Gamer, such as MTG, Hearthstone, Teamfight Tactic.</p>
        </div>
      </div>
      <!-- <div>
        <div class="grid grid-cols-3 gap-3">
          
          <div class="text-center cursor-pointer">
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white" @click="changeTab(1)">
              <font-awesome :icon="['fas', 'briefcase']" class="mr-3" /> Work
            </a>
          </div>
          <div class="text-center cursor-pointer">
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white" @click="changeTab(2)">
              <font-awesome :icon="['fas', 'gamepad']" class="mr-3" /> Game
            </a>
          </div>
        </div>
      </div> -->
      <hr class="my-8" />
      <div>
        <div class="grid grid-cols-3 gap-3 mb-6">
          <div class="6-center cursor-pointer">
            <div class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal text-white bg-pink-600 relative" @click="changeTab(0)">
              <font-awesome :icon="['fas', 'rocket']" class="mr-3" /> Project
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
          <div class="max-w-sm rounded overflow-hidden shadow-lg card">
            <g-link href="https://joyso.io/trade/en/markets/joy_eth" target="_blank">
              <g-image class="w-full shadow-md" src="/images/joyso.png" alt="Joyso" />
            </g-link>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 project-title">Joyso</div>
              <p class="text-gray-700 text-sm">
                JOYSO 是一個混合式去中心化交易所，運用智能合約技術確保交易的安全和效率。
              </p>
            </div>
            <div class="px-6 self-center">
              <Tag text="Blockchain" color="purple" />
              <Tag text="Vue" color="green" />
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg card">
            <g-link href="https://tns.joyso.io/" target="_blank">
              <g-image class="w-full shadow-md" src="/images/tns.png" alt="Joyso" />
            </g-link>
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2">Tron Name Service</div>
              <p class="text-gray-700 text-sm">
                建在 Tron 上面，以智能合約機制用好記的字串來取代繁雜的地址，在 2019-01 曾獲得 <a href="https://tronaccelerator.io/" target="_blank" class="text-blue-500">Tron Accelerator</a> 評審獎。
              </p>
            </div>
            <div class="px-6 self-center">
              <Tag text="Blockchain" color="purple" />
              <Tag text="Vue" color="green" />
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg card">
            <g-link href="https://udn.com/upf/newmedia/2017_data/taipei-railway-workshop/index.html" target="_blank">
              <g-image class="w-full shadow-md" src="https://udn.com/upf/newmedia/2017_data/taipei-railway-workshop/static/fb_index.jpg" alt="chnv" />
            </g-link>
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2">360VR 看82歲的台北機廠</div>
              <p class="text-gray-700 text-sm">
                高齡82歲的台北機廠，斑駁的圍牆內有許多少為人知的故事。用 Vue + Aframe 來把環景畫面呈現在網站上。
              </p>
            </div>
            <div class="px-6 self-center">
              <Tag text="Vue" color="green" />
              <Tag text="AFrame" color="pink" />
              <Tag text="VR" color="pink" />
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg card">
            <g-link href="https://udn.com/upf/newmedia/2017_data/chnv/trip.html" target="_blank">
              <g-image class="w-full shadow-md" src="https://udn.com/upf/newmedia/2017_data/chnv/static/FB_travel.jpg" alt="chnv" />
            </g-link>
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2">中興新村 小清新之旅</div>
              <p class="text-gray-700 text-sm">
                用 Phaser 製作，中興新村內隨處可見綠色隧道，濃厚眷村味的公務員宿舍，每條小巷、自成一景，跟著榮民伯伯逛逛這美麗的地方。
              </p>
            </div>
            <div class="px-6 self-center">
              <Tag text="Phaser" color="pink" />
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg card">
            <g-link href="https://udn.com/upf/newmedia/2017_data/summerweather/index.html" target="_blank">
              <g-image class="w-full shadow-md" src="https://udn.com/upf/newmedia/2017_data/summerweather/public/assets/fbcover.jpg" alt="summerweather" />
            </g-link>
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2">《怪天氣大作戰》</div>
              <p class="text-gray-700 text-sm">
                用 Phaser 製作小遊戲，模擬冰雹落下，3個關卡、4種成就，你能成功救援到哪一關？
              </p>
            </div>
            <div class="px-6 self-center">
              <Tag text="Phaser" color="pink" />
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg card">
            <g-link href="https://waiting7777.github.io/taiwan-vue-components/index.html" target="_blank">
              <g-image class="w-full shadow-md" src="/images/taiwan.png" alt="taiwan" />
            </g-link>
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2">Taiwan Vue Components</div>
              <p class="text-gray-700 text-sm">
                用 D3 + Vue 自製台灣行政區 svg 圖，並且可自定義打包引用。
              </p>
            </div>
            <div class="px-6 self-center">
              <Tag text="Data Visualization" color="teal" />
              <Tag text="Vue" color="green" />
              <Tag text="D3" color="orange" />
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg card">
            <g-link href="https://udn.com/upf/newmedia/2018_data/rural_medical/index.html" target="_blank">
              <g-image class="w-full shadow-md" src="/images/health.png" alt="health" />
            </g-link>
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2">地圖看台灣醫療資源</div>
              <p class="text-gray-700 text-sm">
                用 D3 + Vue 撈出官方數據並且比對地圖，描繪台灣地圖，製作轉場動態，點出醫療資源的城鄉差距。
              </p>
            </div>
            <div class="px-6 self-center">
              <Tag text="Data Visualization" color="teal" />
              <Tag text="Vue" color="green" />
              <Tag text="D3" color="orange" />
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg card">
            <g-link href="https://udn.com/upf/newmedia/2016_data/20160704_middlecross/index.html" target="_blank">
              <g-image class="w-full shadow-md" src="https://p.udn.com.tw/upf/newmedia/2016_data/20160704_middlecross/image/main_fb2.jpg" alt="middlecross" />
            </g-link>
            <div class="px-6 pt-4">
              <div class="font-bold text-xl mb-2 whitespace-no-wrap">中橫走過一甲子 192公里的淚與笑</div>
              <p class="text-gray-700 text-sm">
                用動態視差表現，橫跨台中到花蓮的中橫，這裡曾有過上萬人次築路人，一斧一鑿與大自然搏命，獲得 <a href="https://www.newsaward.org/" target="_blank" class="text-blue-500">華文永續報導獎</a> 融媒體類首獎。
              </p>
            </div>
            <div class="px-6 self-center">
              <Tag text="Jquery" color="blue" />
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
  data() {
    return {
      show: 0
    }
  },
  methods: {
    changeTab(show) {
      this.show = show
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
.ribbon {
  width: 34px;
  height: 34px;
  position: absolute;
  top: 4px;
  right: -13px;
  transform: rotate(45deg);
  z-index: 0;
}
</style>
