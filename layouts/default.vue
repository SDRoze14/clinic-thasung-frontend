<template>
  <div>
    <div class="border-b border-gray-100 bg-blue-50">
      <div class="mx-auto container px-4 py-4">
        <div class="flex items-center justify-center relative">
          <!-- logo -->
          <!-- <div class="">
            <router-link :to="{ path: 'index' }">
              <base-icon icon="logo-h" width="140" height="32" />
            </router-link>
          </div> -->
          <!-- menu -->
          <div class="flex space-x-2 relative">
            <div
              v-for="(menu, i) in menus"
              :key="`menu-${i}`"
              class="px-8 py-2 text-gray-500 hover:bg-blue-100"
              :class="menu.routerName == currentRouteName ? 'bg-blue-200' : ''"
            >
              <div v-if="menu.name == 'งานทะเบียน'">
                <base-dropdown :dropdownWidthFull="true" dropdownClass="w-48">
                  <div
                    slot="toggle"
                    class="flex items-start text-gray-500 hover:text-gray-600"
                  >
                    <div class="">{{ menu.name }}</div>
                    <base-icon
                      class="ml-5"
                      icon="dropdown"
                      width="10"
                      height="20"
                    ></base-icon>
                  </div>
                  <base-dropdown-item>
                    <router-link to="/appointment">ใบนัด</router-link>
                  </base-dropdown-item>
                  <base-dropdown-item>
                    <router-link to="/appointment">ใบรับรองแพทย์</router-link>
                  </base-dropdown-item>
                  <base-dropdown-item>
                    <router-link to="/appointment">ใบรับรองป่วย</router-link>
                  </base-dropdown-item>
                  <base-dropdown-item>
                    <router-link to="/appointment"
                      >รายงานวัตถุออกฤทธิ์</router-link
                    >
                  </base-dropdown-item>
                </base-dropdown>
              </div>
              <div v-else-if="menu.name == 'ตั้งค่า'">
                <base-dropdown :dropdownWidthFull="true" dropdownClass="w-32">
                  <div
                    slot="toggle"
                    class="flex items-start text-gray-500 hover:text-gray-600"
                  >
                    <div class="">{{ menu.name }}</div>
                    <base-icon
                      class="ml-5"
                      icon="dropdown"
                      width="10"
                      height="20"
                    ></base-icon>
                  </div>
                  <base-dropdown-item>
                    <router-link to="/setting/user">จัดการบัญชีผู้ใช้</router-link>
                  </base-dropdown-item>
                  <base-dropdown-item>
                    <router-link to="/setting">ตั้งค่าบัญชีผู้ใช้</router-link>
                  </base-dropdown-item>
                  <!-- <base-dropdown-item>
                    <div>ออกจากระบบ</div>
                  </base-dropdown-item> -->
                </base-dropdown>
              </div>
              <router-link v-else :to="{ path: menu.routerName }">
                {{ menu.name }}
              </router-link>
            </div>
          </div>

          <div class="absolute right-0">
            <base-dropdown :dropdownWidthFull="true">
              <div
                slot="toggle"
                class="flex items-center text-gray-500 hover:text-gray-600"
              >
                <div class="">{{user.title}} {{user.first}} {{user.last}}</div>
                <base-icon
                  class="ml-5"
                  icon="dropdown"
                  width="10"
                  height="20"
                ></base-icon>
              </div>
              <base-dropdown-item>
                <div>ออกจากระบบ</div>
              </base-dropdown-item>
            </base-dropdown>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-50" style="min-height: calc(100vh - 56px - 73px - 57px)">
      <div class="mx-auto container px-4 py-8">
        <nuxt />
      </div>
    </div>

    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    ></loading>

  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  components: { Loading },
  computed: {
    isLoading() {
      return this.$store.getters['loading/getLoading']
    },
    // user() {
    //   return this.$store.getters['me/getUser']
    // },
    currentRouteName() {
      return this.$route.name
    },
    // user() {
    //   return this.$store.getters['me/getUser']
    // },
    menus() {
      return [
        {
          name: 'หน้าแรก',
          routerName: 'dashboard',
        },
        {
          name: 'งานเวชระเบียน',
          routerName: 'record',
        },
        {
          name: 'คลังเวชภัณฑ์',
          routerName: 'supplies',
        },
        {
          name: 'งานทะเบียน',
          routerName: 'register',
        },
        {
          name: 'ตั้งค่า',
          routerName: 'setting',
        },
      ]
    },
  },
  data() {
    return {
      user: {}
    }
  },
  async mounted() {
  this.$store.dispatch('loading/setLoading', true)
    await this.$store.dispatch('me/me')
    this.user = this.$store.getters['me/getUser']
    this.$store.dispatch('loading/setLoading', false)
  }
}
</script>

<style>
.topbar {
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.15);
}
</style>
