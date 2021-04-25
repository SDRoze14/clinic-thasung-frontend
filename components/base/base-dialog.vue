<template>
  <base-modal v-model="isShow">
    <div class="text-xl mb-4">{{ title }}</div>
    <div class="font-light text-gray-500 mb-4">
      {{ description }}
    </div>
    <div class="mt-10 flex justify-end space-x-2">
      <base-button color="gray" @click="isShow = false">Cancel</base-button>
      <base-button :color="confirmButtonColor" @click="onClick">{{
        confirmButton
      }}</base-button>
    </div>
  </base-modal>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'confirm',
      validate: function (t) {
        return ['confirm', 'remove'].includes(t)
      },
    },
  },
  data() {
    return {
      isShow: false,
      title: '',
      description: '',
      callback: undefined,
    }
  },
  computed: {
    confirmButton() {
      if (this.type == 'remove') return 'Remove'
      else return 'Confirm'
    },
    confirmButtonColor() {
      if (this.type == 'remove') return 'border-red'
      else return 'primary'
    },
  },
  mounted() {},
  methods: {
    show(title, description, callback) {
      this.title = title
      this.description = description
      this.callback = callback
      this.isShow = true
    },
    onClick() {
      this.isShow = false
      this.callback()
    },
  },
}
</script>
