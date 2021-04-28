export default {
  state: [
    { name: 'hny', disabled: false },
    { name: 'heny', disabled: false }
  ],
  reducers: {
    modify(state, index) {
      state[index].disabled = !state[index].disabled
    },
    modifyName(state) {
      state[0].name = 'weblearns'
    }
  },
  effects: {
    async modifySync(index) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      this.modify(index)
    }
  }
}
