
// get elements
const screen_01 = document.getElementById('screen-01')
const screen_02 = document.getElementById('screen-02')
const cam_btn = document.getElementById('cam_btn')
const audio_btn = document.getElementById('audio_btn')
const screen_btn = document.getElementById('screen_btn')

let screenstatusval = false
let camAudioStatus = true;

let camStream ;
let screenStream ;
// let server = {
//     iceServers : [
//         {
//             urls : [ 'stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
//         }
//     ]
// };




// sahre webCam
const shareCams = () => {

    navigator.mediaDevices.getUserMedia({
        video : true,
        audio : true
    })
    .then(stream => {
        camStream = stream;
        screen_01.srcObject = stream;


        // // create a peerConnection
        // peerConnection = new RTCPeerConnection(server)
        // // send my stream
        // peerConnection.addStream(camStream)
        // // recive othar stream
        // peerConnection.onaddStream = (event) => {
        //     screen_01.srcObject = event.stream;
        // }
        // console.log(peerConnection);

    })


} 

// sahre webCam
const shareScreen = () => {

    navigator.mediaDevices.getDisplayMedia({
        video : true,
        audio : true
    })
    .then(stream => {
        screenStream = stream;
        screen_01.srcObject = stream;
        screen_02.srcObject = camStream;


    })


} 

shareCams();

//cam video toggle
let camVideoStatus = true;

cam_btn.onclick = (e) => {

    camVideoStatus = !camVideoStatus;
    camStream.getVideoTracks()[0].enabled = camVideoStatus;
    cam_btn.classList.toggle('active')

    if(screenstatusval){
        // screen_02.style.display = 'none'
        screen_02.classList.toggle('d-block')
    }

}

//cam audio toggle
// let camAudioStatus = true;
audio_btn.onclick = (e) => {

    camAudioStatus = !camAudioStatus;
    camStream.getAudioTracks()[0].enabled = camAudioStatus;

    audio_btn.classList.toggle('active')

}


// let screenstatusval = false 
// screen share btn
screen_btn.onclick = () => {
    
    if(!screenstatusval){
        shareScreen()
        screen_02.classList.toggle('d-block')
        screen_btn.classList.toggle('active')
        screenstatusval = !screenstatusval
    }else{
        shareCams()
        screen_02.classList.toggle('d-block')
        screen_btn.classList.toggle('active')
        screenstatusval = !screenstatusval
    }


}


