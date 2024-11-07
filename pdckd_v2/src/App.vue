<script setup>
import { ref, onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

// 設定 variables for 所有 input
const ID = ref('');
const countries = ref('');
const Sex = ref(0);
const PDage = ref(0);
const BW = ref(0);
const peritonitits = ref(0);
const Exit = ref(0);
const PDuration = ref(0);
const aWCCR = ref(0);
const bKTV = ref(0);
const underly5 = ref(0);
const periRa2 = ref(0);
const ENDnew2 = ref(0);
const ENDnew3 = ref(0);
const BA = ref(0);
const BS = ref(0);
const BP = ref(0);
const PP = ref(0);
const PM = ref(0);
const PS = ref(0);
const PVS = ref(0);

const geneRisk = ref('');

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})

function calculateRisk() {
    const risk = 0.45 + 2.23 * Sex.value - 0.06 * PDage.value - 0.09 * BW.value - 0.77 * peritonitits.value - 2.64 * Exit.value - 0.19 * PDuration.value + 0.05 * aWCCR.value + 2.11 * bKTV.value + 2.76 * underly5.value - 3.53 * periRa2.value - 3.38 * ENDnew2.value + 20.31 * ENDnew3.value;
    return Math.round(risk * 100) / 100;
}

function calculateGeneRisk() {    
    const score = BA.value * 4 + BS.value * 2 + BP.value * 1 + PP.value * -1 + PM.value * -2 + PS.value * -4 + PVS.value * -7;
    if (score <= -11) {
        geneRisk.value = '超高風險';
    } else if (score >= -10 && score <= -8) {
        geneRisk.value = '高風險';
    } else if (score >= -7 && score <= -6) {
        geneRisk.value = '中高風險';
    } else if (score >= -5 && score <= -2) {
        geneRisk.value = '中風險';
    } else if (score >= -1 && score <= 1) {
        geneRisk.value = '中低風險';
    } else if (score >= 2 && score <= 3) {
        geneRisk.value = '低風險';
    } else {
        geneRisk.value = '超低風險';
    }
}
</script>

<template>
    <section class="bg-customLightBlue  dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">兒童腹膜透析預測模型</h1>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                我們結合專利申請之 3D 科技列印與智慧數位雲端智能，以螺旋式層次多
                維設計，打造兒童腹膜透析沉浸式智慧互動學習系統。混成式實境腹膜透
                析學習系統使用實體 3D 模型進行擬真實境操作、數位 3D 模組進行即時雲
                端教學，雲端情境模擬測驗檢視操作觀念及能力，並結合擴增 3D 擬境達
                成個人化的沉浸式智能互動學習，以五大特色建構創新之精準兒童腹膜透
                析智能教育系統。
              </p>
              <a href="#section01" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  開始測驗 
                  <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://vueproject.s3.us-west-2.amazonaws.com/analysis.jpg" alt="mockup">
          </div>                
      </div>
  </section>
  <section class="bg-customLightGray dark:bg-gray-900" id="section01">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">情境模擬專區</h2>
              <section class="bg-customLightGray dark:bg-gray-900">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                   
                    <p class="mb-8 lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400 sm:text-xl">
                        以 3D 列印實體視覺化腹膜透析操作過程中，治療空間的重點物件，
                        包含病人模型、磅秤、微波爐、支撐桿、透析液雙聯袋、冷氣機、洗手台、
                        桌子、椅子、床、電風扇、牆壁(含門)、牆壁(含窗)、牆壁、燈、綠色圖示、
                        音源(可為喇叭、手機、音響)。物件可彼此結合組裝成一連續空間，其中，
                        實體視覺化的重要特點有我們團隊申請發明專利的關鍵組裝技術，以及可
                        以進行衛教測試的視覺化開關設計。
                    </p>
                    <form action="#">
                      <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-6">
                        <div>
                        <label for="ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">病歷號</label>
                        <input type="text" name="ID" id="ID" v-model="ID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>

                        <br>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">選擇作答日期</label>
                        
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>選擇作答日期</option>
                            <option value="US">2024/01/01</option>
                            <option value="CA">2023/12/01</option>
                            <option value="FR">2022/10/01</option>
                        </select>
                    </div>
                      </div>
                      <div class="flex items-center space-x-4">
                          <!-- Modal toggle -->
                        <button data-modal-target="Simulation" data-modal-toggle="Simulation" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                          Toggle modal
                        </button>
                      </div>
                  </form>
                </div>
              </section>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://vueproject.s3.us-west-2.amazonaws.com/learn.jpg" alt="mockup">
                </div>
          </div>
          
      </div>
  </section>
  <section class="bg-customLightGray dark:bg-gray-900">
      <div class="gap-16 items-start py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">公式計算</h2>
            <p class="mb-4">
                <strong class="font-extrabold text-lg">PD-PET Trends Group Models 和 Canonical Analysis 是在資料分析中常用的技術，用於從多變數資料中提取關鍵趨勢，並分析不同變數之間的關聯性。這些方法特別適合用於處理大量且複雜的資料，並將資料中潛在的模式視覺化，幫助識別關鍵的趨勢和異常。</strong>
            </p>
            <div class="pt-1"></div>
            <p>
                <strong>基本原理</strong> <br>
                <strong>PD-PET Trends Group Models：</strong>這個方法聚焦於趨勢的識別與分組，通過將資料分類成不同的群組來找出相似的趨勢或特徵模式。例如，將多個變數依相似趨勢分組，以更容易觀察不同群組之間的相對變化。
                <br>
                <strong>Canonical Analysis（典型相關分析）：</strong>這是一種多變數統計分析技術，目的是找出兩組變數之間的最大相關性。透過將兩組變數轉換為線性組合，該方法能夠找出最能表達兩組資料間關係的配對，並提供不同變數之間的關聯強度。
            </p>
            <p>
                <strong>好處</strong>
            </p>
            <ul>
                <li>降低資料維度：這些方法能夠將高維度的複雜資料簡化成少數幾個重要的趨勢和關聯，提高解讀效率。</li>
                <li>增強資料解釋力：PD-PET 和 Canonical Analysis 有助於識別不同變數之間的相互關聯，幫助分析師深入了解資料背後的關聯性結構。</li>
                <li>精確趨勢預測：這些技術提供了更好的趨勢預測能力，有助於組織在未來決策時更準確地預測變數之間的互動影響。</li>
            </ul>
            </div>
          <form action="#">
                <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-6">
                    <div>
                        <label for="Sex" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sex</label>
                        <input type="number" name="Sex" id="Sex" v-model="Sex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div class="w-full">
                        <label for="PDage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PDage</label>
                        <input type="number" name="PDage" id="PDage" v-model="PDage" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div>
                        <label for="BW" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BW</label>
                        <input type="number" name="BW" id="BW" v-model="BW" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>                        
                    <div>
                        <label for="peritonitits" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">peritonitits</label>
                        <input type="number" name="peritonitits" id="peritonitits" v-model="peritonitits" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div>
                        <label for="Exit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exit</label>
                        <input type="number" name="Exit" id="Exit" v-model="Exit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div class="w-full">
                        <label for="PDuration" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PDuration</label>
                        <input type="number" name="PDuration" id="PDuration" v-model="PDuration" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div>
                        <label for="aWCCR" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">aWCCR</label>
                        <input type="number" name="aWCCR" id="aWCCR" v-model="aWCCR" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>                        
                    <div>
                        <label for="bKTV" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bKTV</label>
                        <input type="number" name="bKTV" id="bKTV"  v-model="bKTV" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <div>
                        <label for="underly5" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">underly5</label>
                        <input type="number" name="underly5" id="underly5" v-model="underly5" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div>
                        <label for="periRa2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">periRa2</label>
                        <input type="number" name="periRa2" id="periRa2" v-model="periRa2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div class="w-full">
                        <label for="ENDnew2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ENDnew2</label>
                        <input type="number" name="ENDnew2" id="ENDnew2" v-model="ENDnew2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div>
                        <label for="ENDnew3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ENDnew3</label>
                        <input type="number" name="ENDnew3" id="ENDnew3" v-model="ENDnew3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>                        
                    <!-- <div>
                        <label for="bKTV" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bKTV</label>
                        <input type="number" name="bKTV" id="bKTV" v-model="bKTV" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div> -->
                </div>
                <div class="flex items-center space-x-4">
                    <!-- Modal toggle -->
                <button data-modal-target="model" data-modal-toggle="model" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    計算風險
                </button>
                </div>
            </form>
      </div>
  </section>
  <section class="bg-customLightGray dark:bg-gray-900">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          
        <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://vueproject.s3.us-west-2.amazonaws.com/sangharsh-lohakare-Iy7QyzOs1bo-unsplash.jpg" alt="mockup">
                </div>
          </div>
            
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">精準基因分析</h2>
              <form action="#">
                <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-6">
                    <div>
                        <label for="BA" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BA</label>
                        <input type="number" id="BA" v-model="BA" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    
                    </div>
                    <div>
                        <label for="BS" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BS</label>
                        <input type="number" id="BS" v-model="BS" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                    </div>
                    <div>
                        <label for="BP" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BP</label>
                        <input type="number" id="BP" v-model="BP" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                    </div>
                    <div>
                        <label for="PP" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PP</label>
                        <input type="number" id="PP" v-model="PP" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                    </div>
                    <div>
                        <label for="PM" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PM</label>
                        <input type="number" id="PM" v-model="PM" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                    </div>
                    <div>
                        <label for="PS" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PS</label>
                        <input type="number" id="PS" v-model="PS" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                    </div>
                    <div>
                        <label for="PVS" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PVS</label>
                        <input type="number" id="PVS" v-model="PVS" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                    </div>                 
                </div>
                <div class="flex items-center space-x-4">
                    <!-- Modal toggle -->
                <button @click="calculateGeneRisk" data-modal-target="gene" data-modal-toggle="gene" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    計算風險
                </button>
                </div>
            </form>
          </div>
      </div>
  </section>

  <!-- risk pop up area -->
  <!-- model button -->
  <!-- Main modal -->
<div id="model" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Risk Calculation
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="model">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <!-- 這邊想要放一個計算風險的結果利用calculateRisk()這個function -->
                <p :class="{'text-red-500': calculateRisk() > 0.5, 'text-green-500': calculateRisk() <= 0.5}" class="text-base leading-relaxed dark:text-gray-400">
                    計算風險的結果是：{{ calculateRisk() }}
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    高風險的人群應該注意保持健康生活方式，定期檢查身體狀況，並遵循醫生的建議進行治療。
                </p>
                 <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    低風險的人群應該保持健康生活方式，定期檢查身體狀況，並遵循醫生的建議進行治療。
                </p>


                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <strong>風險預測基於以下公式計算：</strong>
                </p>
                <img src="https://vueproject.s3.us-west-2.amazonaws.com/cal.png" alt="Risk Calculation Formula" class="mx-auto">
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="model" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">OK</button>
            </div>
        </div>
    </div>
</div>
<!-- Simulation -->
<div id="Simulation" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Risk Calculation
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="Simulation">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="Simulation" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">OK</button>
            </div>
        </div>
    </div>
</div>
<!-- gene -->
<div id="gene" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Risk Calculation
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="gene">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <!-- 這邊想要放一個計算風險的結果利用calculateGeneRisk()這個function -->
                <p :class="{'text-red-500': geneRisk === '超高風險' || geneRisk === '高風險', 'text-green-500': geneRisk === '低風險' || geneRisk === '超低風險'}" class="text-base leading-relaxed dark:text-gray-400">
                    計算鈣化風險的結果是：{{ geneRisk }} <br>
                    計算心臟病風險的結果是：{{ geneRisk }} <br>
                    計算中風風險的結果是：{{ geneRisk }} <br>
                </p>
                <p v-if="geneRisk === '超高風險'" class="text-base leading-relaxed text-red-500 dark:text-red-400">
                    超高風險的人群應該注意保持健康生活方式，定期檢查身體狀況，並遵循醫生的建議進行治療。
                </p>
                <p v-else-if="geneRisk === '高風險'" class="text-base leading-relaxed text-red-500 dark:text-red-400">
                    高風險的人群應該保持健康生活方式，定期檢查身體狀況，並遵循醫生的建議進行治療。
                </p>
                <p v-else-if="geneRisk === '中高風險'" class="text-base leading-relaxed text-yellow-500 dark:text-yellow-400">
                    中高風險的人群應該保持健康生活方式，定期檢查身體狀況，並遵循醫生的建議進行治療。
                </p>
                <p v-else-if="geneRisk === '中風險'" class="text-base leading-relaxed text-yellow-500 dark:text-yellow-400">
                    中風險的人群應該保持健康生活方式，定期檢查身體狀況，並遵循醫生的建議進行治療。
                </p>
                <p v-else-if="geneRisk === '中低風險'" class="text-base leading-relaxed text-green-500 dark:text-green-400">
                    中低風險的人群應該保持健康生活方式，定期檢查身體狀況，並遵循醫生的建議進行治療。
                </p>
                <p v-else-if="geneRisk === '低風險'" class="text-base leading-relaxed text-green-500 dark:text-green-400">
                    低風險的人群應該保持健康生活方式，定期檢查身體狀況，並遵循醫生的建議進行治療。
                </p>
                <p v-else-if="geneRisk === '超低風險'" class="text-base leading-relaxed text-green-500 dark:text-green-400">
                    超低風險的人群應該保持健康生活方式，定期檢查身體狀況，並遵循醫生的建議進行治療。
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="gene" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">OK</button>
            </div>
        </div>
    </div>
</div>
</template>