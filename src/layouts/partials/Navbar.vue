<template>
  <b-navbar toggleable="lg" type="dark" :sticky="true">
    <div class="container">
      <b-navbar-brand>
        <g-link to="/" class="text-white">
          <font-awesome-icon :icon="['fas', 'dragon']" class="icon mr-1"></font-awesome-icon>
          Import Data
        </g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-links">
          <li class="ml-3">
            <g-link to="/archive" class="text-white">
              ARCHIVE
            </g-link>
          </li>
          <li class="ml-3">
            <g-link to="/category" class="text-white">
              CATEGORY
            </g-link>
          </li>
          <li class="ml-3">
            <g-link to="/tags" class="text-white">
              TAGS
            </g-link>
          </li>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto about">
          <li class="mr-4">
            <g-link to="/about" class="text-white">
              Waiting7777
            </g-link>
          </li>
          <li>
            <span>
              <g-link href="https://www.github.com/waiting7777" target="_blank" rel="noopener noreferrer" class="text-white mr-3">
                <font-awesome-icon :icon="['fab', 'github']" />
              </g-link>
            </span>
          </li>
          <li>
            <span>
              <g-link href="https://www.twitch.com/waiting7777" target="_blank" rel="noopener noreferrer" class="text-white mr-3">
                <font-awesome-icon :icon="['fab', 'twitch']" />
              </g-link>
            </span>
          </li>
          <li>
            <span>
              <g-link href="https://www.linkedin.com/in/weiting-cheng-34a697127/" target="_blank" rel="noopener noreferrer" class="text-white mr-3">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </g-link>
            </span>
          </li>
          <li>
            <span>
              <g-link href="https://www.linkedin.com/in/weiting-cheng-34a697127/" target="_blank" rel="noopener noreferrer" class="text-white">
                <font-awesome-icon :icon="['fab', 'medium']" />
              </g-link>
            </span>
          </li>
        </b-navbar-nav>
       </b-collapse>
    </div>
  </b-navbar>
</template>

<style lang="scss" scoped>
.navbar {
  background: #000;
  color: #fff;
  padding: 0.25rem 1rem;

  .icon {
    width: 20px;
    height: 20px;
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    .nav-links {
      li {
        margin-top: .5rem;
      }
    }
    .navbar-nav.about {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
}
</style>
