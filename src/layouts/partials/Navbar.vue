<template>
  <div class="sticky inset-0 h-12 bg-black z-50">
    <nav class="flex items-center justify-between flex-wrap container mx-auto px-2 sm:px-0 py-2">
      <div class="block flex-grow flex items-center w-auto">
        <g-link to="/">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <font-awesome :icon="['fas', 'dragon']" class="mr-3"></font-awesome>
            <span class="font-semibold text-xl tracking-tight">Import Data</span>
          </div>
        </g-link>
        <div class="text-sm flex-grow uppercase">
          <ul class="list-none flex justify-left text-gray-300 uppercase">
            <li class="hover:text-white mr-4">
              <g-link to="/category/getting-started" class="animated-link">Getting Start</g-link>
            </li>
            <li class="hover:text-white">
              <g-link to="/about" class="animated-link">About</g-link>
            </li>
          </ul>
        </div>
        <div class="inline-block text-gray-400">
          <ul class="list-none flex justify-center md:justify-end">
            <li class="hover:text-white hidden sm:block mr-6 text-md">
              <span>
                <g-link to="/about">
                  Waiting7777
                </g-link>
              </span>
            </li>
            <li class="hover:text-white hidden sm:block mr-6 text-md">
              <span>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <font-awesome :icon="['fab', 'facebook']" />
                </a>
              </span>
            </li>
            <li class="hover:text-white hidden sm:block mr-6 text-md">
              <span>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <font-awesome :icon="['fab', 'twitter']" />
                </a>
              </span>
            </li>
            <li class="hover:text-white hidden sm:block text-md">
              <span>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                  <font-awesome :icon="['fab', 'github']" />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
