import { useEffect, useRef, useState } from 'react';
import './index.css';

function Slides(props) {

  var Box = ()=>{
    return <div style={{
      border: "1px solid black",
      height: "80vh",
      width: "80vw",
      padding: "2vw",
      fontSize: "3.5vw",
      overflow: "hidden",
      textAlign: "center"
    }} id="box">asd asd asd asd asdasdasdasd asdasdasda as da sda sd asd asd asd a asdkjas dajsd lk sdkajs dkajsd jkasdk jasdkjasd jasdjasdjas dasd asjd asjdka sjdaksd jkasdk jasdkjasd jasdjasdjas dasd asjd sd asjd asjdka sjdaksjd aksjdka sjsd lk sdkajs dkajsd jkasdk jasdkjasd jasdjasdjas dasd asjd asjdka sjdaksjd aksjdka sjsd lk sdkajs dkajsd jkasdk jasdkjasd jasdjasdjas dasd asjd asjdka sjdaksjd aksjdka sjsd lk sdkajs dkajsd jkasdk jasdkjasd jasdjasdjas dasd asjd asjdka sjdaksjd aksjdka sjsd lk sdkajs dkajsd jkasdk jasdkjasd jasdjasdjas dasd asjd asjdka sjdaksjd aksjdka sjsd lk sdkajs dkajsd jkasdk jasdkjasd jasdjasdjas dasd asjd asjdka sjdaksjd aksjdka sjsd lk sdkajs dkajsd jkasdk jasdkjasd jasdjasdjas dasd asjd asjdka sjdaksjd aksjdka sjdalksjdlaksjd lasjdlkj
    </div>
  }

  useEffect(()=>{
    var myDiv = document.getElementById('box');
    console.log(myDiv.scrollHeight, myDiv.clientHeight)
  },[])

  return (
    <div className='slides'>
      <Box/>
    </div>
  )

}

export default Slides;