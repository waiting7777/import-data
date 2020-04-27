<template>
  <nav class="relative bg-black pt-4 pb-16 text-sm text-gray-500">
    <div class="container mx-auto flex flex-wrap justify-between h-12 items-center">
      <div class="w-full md:w-1/2 text-center md:text-left h-4 leading-none">
        Copyright <font-awesome :icon="['far', 'copyright']" /> 2020 | Design by <g-link to="/about" target="_blank" class="hover:text-white">Waiting7777</g-link> 
      </div>
      <div class="w-full md:w-1/2">
        <ul class="list-none flex justify-center md:justify-end">
          <li class="hover:text-white">
            <a href="https://www.gridsome.org" target="_blank" rel="noopener noreferrer">Gridsome</a>
          </li>      
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.copyright-contain {
  line-height: 1;
  height: 16px;
}
::v-deep {
  .fa-copyright {
    position: relative;
    top: 1px;
  }
}
</style>