<template>
  <div class="container">
    <h1>Host name</h1>
    <h2>Lets Chat About gobnb... </h2>
    
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">
        <span>{{msg.from}}:</span>{{msg.txt}}
      </li>
    </ul>
    <hr />
    <form @submit.prevent="sendMsg">
      <input type="text" v-model="msg.txt" placeholder="Your msg"/>
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import {socketService, SOCKET_EMIT_SEND_MSG, SOCKET_EVENT_ADD_MSG, SOCKET_EMIT_SET_TOPIC} from '../services/socket.service' ///

export default {
  data() {
    return {
      msg: {from: 'Guest', txt: ''},
      msgs: [],
    }
  },
  created() {
    socketService.setup()
    socketService.emit(SOCKET_EMIT_SET_TOPIC, 'airbnb') 
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
      
      const user = userService.getLoggedinUser()   ///
      const from = (user && user.fullname) || 'Guest'
      this.msg.from = from
      console.log('msg;',this.msg);
      socketService.emit(SOCKET_EMIT_SEND_MSG, this.msg)
      this.msg = {from, txt: ''}
    }
  }
}
</script>
