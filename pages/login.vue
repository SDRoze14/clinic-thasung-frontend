<template>
  <!-- <div>
    <div class="bg-blue-400 w-full">
      <div class="flex justify-center items-center">
        <div class="flex w-2/4 py-5 px-10 bg-white rounded-md shadow-md">
          <div class="w-1/2">

          </div>
          <div class="w-1/2">
            <div class="text-3xl">ท่าซุงคลินิค</div>
            <div>ลงชื่อเข้าใช้</div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="p-6">
    <div
      class="flex flex-wrap mt-10 mb-6 md:divide-x-2 divide-gray-200 items-center"
    >
      <div class="w-full md:w-1/2 md:pr-8">
        <form @submit="loginClick">
          <div class="flex items-center">
            <div class="text-2xl mr-2 py-2">เข้าสู่ระบบ</div>
          </div>
            <div>
              <div class="py-2">
                <base-input label="email" type="email" placeholder="เช่น example@email.com" v-model="email"></base-input>
              </div>
              <div class="py-2">
                <base-input label="รหัสผ่าน" type="password" placeholder="******" v-model="password"></base-input>
              </div>
            </div>
          <div v-if="error">
            <div class="px-3 bg-red-300 text-red-600">{{error}}</div>
          </div>
          <div class="flex py-3 justify-end">
            <base-button type="submit" color="primary">ลงชื่อเข้าใช้</base-button>
          </div>
        </form>
      </div>
      <div class="w-full md:w-1/2 md:pr-8">
        <div class="flex items-center text-3xl py-24 pl-10">ท่าซุงคลินิค</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async loginClick(e) {
      e.preventDefault()
      let self = this
      let error = ''
      if (!self.email) error = 'กรุณากรอก email'
      if (!self.password) error = 'กรุณารอกรหัสผ่าน'

      self.error = error
      if (error) {
        return
      }

      self.$store.dispatch('loading/setLoading', true)

      const res = await self.$store.dispatch('me/login', {
        email: self.email,
        password: self.password,
      })

       if (res instanceof Error) {
        self.error = 'อีเมล หรือ รหัสผ่าน ไม่ถูกต้อง'
      } else {
        setTimeout(() => {
          window.location.replace(self.$router.options.base + 'dashboard')
        }, 400)
      }

      self.$store.dispatch('loading/setLoading', false)
    }
  }
}
</script>
