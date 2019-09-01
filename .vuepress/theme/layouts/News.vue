<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <NewsList class="theme-default-content"/>

    <Credits/>
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import NewsList from '@theme/components/NewsList.vue'
import Credits from '@theme/components/Credits.vue'

export default {
  extends: ParentLayout,
  components: {NewsList, Credits}
}
</script>
