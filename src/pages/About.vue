<template>
  <Layout>
    <div class="container">
      <div class="intro-contain">
        <div class="intro">
          <div class="intro-text">Hi, I'm Waiting7777</div>
          <br/>
          <p>I'm a <span class="text-blue">Frontend Engineer</span>, play hard with <span class="text-teal">Data Visualization</span>, <span class="text-yellow">Javascript</span>, <span class="text-green">Vue</span>, <span class="text-orange">D3</span>, <span class="text-pink">Phaser</span> for performance and Infographic, Also know about <span class="text-purple">Blockchain</span> knowledge with previous job, And Card & Chess Gamer, such as MTG, Hearthstone, Teamfight Tactic.</p>
        </div>
      </div>
      <div>
        <div class="tab-contain">
          <div>
            <div class="tab">
              <font-awesome-icon :icon="['fas', 'briefcase']" class="mr-1" /> Work
            </div>
          </div>
        </div>
        <div class="work shadow-sm">
          <div class="work-card">
            <div class="work-image">
              <g-image src="/images/trevi.jpeg" alt="trevi"></g-image>
            </div>
            <div class="work-content">
              <div class="work-company">Trevi</div>
              <div class="work-title">Senior Frontend Engineer</div>
              <div class="work-time">2019/11 ~ Now</div>
              <div class="work-desc">Develop high quality gaming platform and acounting platform</div>
            </div>
          </div>
        </div>
        <div class="work shadow-sm">
          <div class="work-card">
            <div class="work-image">
              <g-image src="/images/joyso.gif" alt="joyso"></g-image>
            </div>
            <div class="work-content">
              <div class="work-company">Joyso</div>
              <div class="work-title">Senior Frontend Engineer</div>
              <div class="work-time">2018/05 ~ 2019/08</div>
              <div class="work-desc">Develop crypto exchange on Ethereum and Dapps on Tron</div>
            </div>
          </div>
        </div>
        <div class="work shadow-sm">
          <div class="work-card">
            <div class="work-image">
              <g-image src="/images/udn.png" alt="udn"></g-image>
            </div>
            <div class="work-content">
              <div class="work-company">United Daily News</div>
              <div class="work-title">Frontend Engineer</div>
              <div class="work-time">2015/12 ~ 2018/05</div>
              <div class="work-desc">Build various Data Visualization News Project</div>
            </div>
          </div>
        </div>
      </div>
      <div class="seperator"></div>
      <div>
        <div class="tab-contain">
          <div>
            <div class="tab">
              <font-awesome-icon :icon="['fas', 'rocket']" class="mr-1" /> Project
            </div>
          </div>
        </div>
        <div class="project-contain">
          <div class="card">
            <g-link href="https://joyso.io/trade/en/markets/joy_eth" target="_blank" rel="noopener noreferrer">
              <g-image src="/images/joyso.png" alt="Joyso" />
            </g-link>
            <div class="project-content">
              <div class="project-title">Joyso</div>
              <p class="project-text">
                JOYSO 是一個混合式去中心化交易所，運用智能合約技術確保交易的安全和效率。
              </p>
            </div>
            <div class="project-tags">
              <Tag text="Blockchain" color="purple" />
              <Tag text="Angular" color="orange" />
            </div>
          </div>
          <div class="card">
            <g-link href="https://tns.joyso.io/" target="_blank" rel="noopener noreferrer">
              <g-image src="/images/tns.png" alt="tns" />
            </g-link>
            <div class="project-content">
              <div class="project-title">Tron Name Service</div>
              <p class="project-text">
                建在 Tron 上面，以智能合約機制用好記的字串來取代繁雜的地址，在 2019-01 曾獲得 <a href="https://tronaccelerator.io/" target="_blank" class="text-blue-500">Tron Accelerator</a> 評審獎。
              </p>
            </div>
            <div class="project-tags">
              <Tag text="Blockchain" color="purple" />
              <Tag text="Vue" color="green" />
            </div>
          </div>
          <div class="card">
            <g-link href="https://udn.com/upf/newmedia/2017_data/taipei-railway-workshop/index.html" target="_blank" rel="noopener noreferrer">
              <g-image src="https://udn.com/upf/newmedia/2017_data/taipei-railway-workshop/static/fb_index.jpg" alt="taipei-railway" />
            </g-link>
            <div class="project-content">
              <div class="project-title">360VR 看82歲的台北機廠</div>
              <p class="project-text">
                高齡82歲的台北機廠，斑駁的圍牆內有許多少為人知的故事。用 Vue + Aframe 來把環景畫面呈現在網站上。
              </p>
            </div>
            <div class="project-tags">
              <Tag text="Vue" color="green" />
              <Tag text="AFrame" color="pink" />
              <Tag text="VR" color="pink" />
            </div>
          </div>
          <div class="card">
            <g-link href="https://udn.com/upf/newmedia/2017_data/chnv/trip.html" target="_blank" rel="noopener noreferrer">
              <g-image src="https://udn.com/upf/newmedia/2017_data/chnv/static/FB_travel.jpg" alt="chnv" />
            </g-link>
            <div class="project-content">
              <div class="project-title">中興新村 小清新之旅</div>
              <p class="project-text">
                用 Phaser 製作，中興新村內隨處可見綠色隧道，濃厚眷村味的公務員宿舍，每條小巷、自成一景，跟著榮民伯伯逛逛這美麗的地方。
              </p>
            </div>
            <div class="project-tags">
              <Tag text="Phaser" color="pink" />
            </div>
          </div>
          <div class="card">
            <g-link href="https://udn.com/upf/newmedia/2017_data/summerweather/index.html" target="_blank" rel="noopener noreferrer">
              <g-image src="https://udn.com/upf/newmedia/2017_data/summerweather/public/assets/fbcover.jpg" alt="summerweather" />
            </g-link>
            <div class="project-content">
              <div class="project-title">《怪天氣大作戰》</div>
              <p class="project-text">
                用 Phaser 製作小遊戲，模擬冰雹落下，3個關卡、4種成就，你能成功救援到哪一關？
              </p>
            </div>
            <div class="project-tags">
              <Tag text="Phaser" color="pink" />
            </div>
          </div>
          <div class="card">
            <g-link href="https://waiting7777.github.io/taiwan-vue-components/index.html" target="_blank" rel="noopener noreferrer">
              <g-image src="/images/taiwan.png" alt="taiwan" />
            </g-link>
            <div class="project-content">
              <div class="project-title">Taiwan Vue Components</div>
              <p class="project-text">
                用 D3 + Vue 自製台灣行政區 svg 圖，並且可自定義打包引用。
              </p>
            </div>
            <div class="project-tags">
              <Tag text="Data Visualization" color="teal" />
              <Tag text="Vue" color="green" />
              <Tag text="D3" color="orange" />
            </div>
          </div>
          <div class="card">
            <g-link href="https://udn.com/upf/newmedia/2018_data/rural_medical/index.html" target="_blank" rel="noopener noreferrer">
              <g-image src="/images/health.png" alt="health" />
            </g-link>
            <div class="project-content">
              <div class="project-title">地圖看台灣醫療資源</div>
              <p class="project-text">
                用 D3 + Vue 撈出官方數據並且比對地圖，描繪台灣地圖，製作轉場動態，點出醫療資源的城鄉差距。
              </p>
            </div>
            <div class="project-tags">
              <Tag text="Data Visualization" color="teal" />
              <Tag text="Vue" color="green" />
              <Tag text="D3" color="orange" />
            </div>
          </div>
          <div class="card">
            <g-link href="https://udn.com/upf/newmedia/2016_data/20160704_middlecross/index.html" target="_blank" rel="noopener noreferrer">
              <g-image src="https://p.udn.com.tw/upf/newmedia/2016_data/20160704_middlecross/image/main_fb2.jpg" alt="middlecross" />
            </g-link>
            <div class="project-content">
              <div class="project-title">中橫走過一甲子 192公里的淚與笑</div>
              <p class="project-text">
                用動態視差表現，橫跨台中到花蓮的中橫，這裡曾有過上萬人次築路人，一斧一鑿與大自然搏命，獲得 <a href="https://www.newsaward.org/" target="_blank" class="text-blue-500">華文永續報導獎</a> 融媒體類首獎。
              </p>
            </div>
            <div class="project-tags">
              <Tag text="Jquery" color="blue" />
            </div>
          </div>
        </div>
      </div>
      <div class="seperator"></div>   
      <div class="comment">
        <vue-disqus shortname="waiting7777" identifier="about"></vue-disqus>
      </div>  
    </div>
  </Layout>
</template>

<script>
import Tag from '@/components/Tag'
export default {
  components: {
    Tag
  },
  metaInfo: {
    title: 'About Me'
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 3rem;
}
.intro-contain {
  display: grid;
  grid-template-columns: repeat(8 , 1fr);

  .intro {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .intro-text {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
.tab-contain {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.75rem;
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  .tab {
    cursor: pointer;
    text-align: center;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #fff;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
    line-height: 1.5;
    border-radius: .25rem;
    background-color: #d53f8c;
  }
}
.project-contain {
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(3, 1fr);

  .project-content {
    padding: 1rem 1.5rem;
  }

  .project-title {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .project-text {
    font-size: 0.75rem;
    color: #4a5568;
  }

  .project-tags {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    align-self: center;
  }
}
.card {
  height: 380px;
  display: grid;
  grid-template-rows: 180.19px auto 50px;
  padding-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 24rem;
  img {
    width: 100%;
    height: 180.19px;
  }
}
.work {
  width: 66%;
  margin-bottom: 1rem;
  &-card {
    display: grid;
    grid-template-columns: 150px auto;
    padding: 1rem;
    grid-gap: 1rem;
  }

  &-image {
    align-self: center;

    img {
      max-width: 90%;
    }
  }

  &-company {
    font-size: 18px;
    font-weight: bold;
  }

  &-title {
    font-size: 16px;
  }

  &-time {
    color: #4a5568;
  }

  &-desc {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  .intro-contain {
    .intro {
      grid-column-start: 1;
      grid-column-end: 8;
    }
  }

  .project-contain {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
