class PeerService {
  peer: RTCPeerConnection;

  constructor() {
    const config: RTCConfiguration = {
      iceServers: [
        {
          urls: [
            "stun:stun.l.google.com:19302",
            "stun:global.stun.twilio.com:3478"
          ]
        }
      ]
    };

    this.peer = new RTCPeerConnection(config);
  }
}

export default new PeerService();
