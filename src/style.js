const string = `
.bingBody{
    border:8px solid black;
    border-radius: 50%/40%;
    
}
.ear{
    width:60px;
    height:80px;
    background-color: black;
    border-radius: 50%/50%;
    position: absolute;
}
.ear-left{
    left: -10px;
    top: -15px;
}
.ear-right{
    right: -10px;
    top: -15px;
}
.face{
    width:200px;
    height:160px;
    margin-top:30px;
    border-radius:80% 80% 60% 60%/90% 90% 60% 60%;
    margin-left:auto;
    margin-right:auto;
    border:6px solid #006BB0;
    box-shadow: 0 0 0 5px yellow, 0 0 0 10px black, 0 0 0 15px green, 0 0 0 20px red;
    position: relative;
}
.eye{
    width:62px;
    height:70px;
    background-color: black;
    border-radius: 50%/50%;
    position: absolute;
}
.eye-left{
    left: 15px;
    top: 26px;
    transform: skewX(-8deg);
}
.eye-right{
    right: 15px;
    top: 26px;
    transform: skewX(8deg);
}
.eyeball{
    width: 25px;
    height: 25px;
    background-color: black;
    position: absolute;
    border-radius: 50%;
    border:4px solid white;
}
.eyeball-left{
    left:24%;
    top:34%;
}
.eyeball-left::after{
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left:5px;
    top:5px;
}
.eyeball-right{
    right:24%;
    top:34%;
}
.eyeball-right::after{
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left:5px;
    top:5px;
}
.nose{
    width: 20px;
    height: 12px;
    background-color: black;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    top:45%;
    border-radius: 10% 10% 50% 50%/40%;
}
.mouth{
    width:34px;
    height:10px;
    background-color: red;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    top:58%;
    border-radius: 5% 5% 80% 80%/80%;
    border:3px solid black
}
.hand{
    width: 60px;
    height:60px;
    background-color: black;
    position: absolute;
    top:60%;
    border-radius: 50%;
}
.hand-left{
    left:-62px;
}
.hand-left::after{
    content: '';
    display: block;
    border:31px solid black;
    position: absolute;
    left:0;
    bottom:62%;
    border-color: transparent black black transparent;

}
.hand-right{
    width: 50px;
    height: 100px;
    right: -36px;
    background-color: black;
    position: absolute;
    top:39%;
    border-radius: 40px 40px 0 80px;
    transform: rotate(40deg);
}
.hand-right::after{
    content: "";
    display: block;
    width: 14px;
    height:20px;
    background-color: red;
    position: absolute;
    top:20px;
    left:22px;
    border-radius: 50% 50% 0 0;
    transform: rotate(10deg);
}
.hand-right::before{
    content: "";
    display: block;
    width: 14px;
    height:20px;
    background-color: red;
    position: absolute;
    top:23px;
    right:20px;
    transform: rotate(90deg);
    border-radius:0 0  50% 50%;
}
.foot{
    width:60px;height:80px;      
    background-color: black;
    position: absolute;
}
.foot-left{
    left:60px;
    bottom:-58px;
    border-radius: 20% 40% 20% 40%;
}
.foot-right{
    right:60px;
    bottom:-58px;
    border-radius: 40% 20% 40% 20%;
}`
export default string