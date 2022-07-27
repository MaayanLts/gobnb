<template>
  <div class="container">
    <h1>gobnb</h1>
    <h4 v-if="hostName === user.fullname">Hello {{ hostName }}, you have a new message </h4>
    <h4 v-else>write to {{ hostName }}</h4>
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">
        <span>{{ msg.from }}:</span>{{ msg.txt }}
      </li>
    </ul>
    <hr />
    <form @submit.prevent="sendMsg">
      <input type="text" v-model="msg.txt" placeholder="Your msg" />
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import { socketService, SOCKET_EMIT_SEND_MSG, SOCKET_EVENT_ADD_MSG, SOCKET_EMIT_SET_TOPIC } from '../services/socket.service'

export default {
  data() {
    return {
      msg: { from: 'Guest', txt: '' },
      msgs: [],
      hostName: null,
      user:null,

    }
  },
  created() {
    this.user = userService.getLoggedinUser()
    this.hostName = this.$route.params.name
    console.log(this.user)    
    console.log(this.hostName)
    // socketService.setup()
    socketService.emit(SOCKET_EMIT_SET_TOPIC, this.hostName)
    socketService.on(SOCKET_EVENT_ADD_MSG, this.addMsg)
  },
  destroyed() {
    socketService.off(SOCKET_EVENT_ADD_MSG, this.addMsg)
    // socketService.terminate()
  },
  methods: {
    addMsg(msg) {
      this.msgs.push(msg)
    },
    sendMsg() {
      console.log('Sending', this.msg)
      // TODO: next line not needed after connecting to backend
      // this.addMsg(this.msg)
      // setTimeout(()=>this.addMsg({from: 'Dummy', txt: 'Yey'}), 2000)
      const user = userService.getLoggedinUser()
      const from = (user && user.fullname) || 'Guest'
      this.msg.from = from
      socketService.emit(SOCKET_EMIT_SEND_MSG, this.msg)
      this.msg = { from, txt: '' }
    },
    changeTopic() {
      socketService.emit(SOCKET_EMIT_SET_TOPIC, this.hostName)
    }
  }
}
</script>
