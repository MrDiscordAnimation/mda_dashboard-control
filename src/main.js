(function(){
    console.log("%cMDA Dashboard Control","font-size: 20px;","\nMade by MDAScripts.\nThis Software Build is for Public Use.");
    setTimeout(mdascripts, 10)
}())

function mdascripts(){
var mda = document.getElementById("loadSCRIPT");
if (mda.getAttribute("version")==="SL900"){
if (mda.getAttribute("type")==="server"){

}
else {
document.getElementById("bodyVIEW").innerHTML=`
<h1>Software/Server Control is different</h1>
<hr>
<p>This Software/Server Control is different!<br>
Send this to our support team at our Discord Server: <a href="https://discord.gg/HxZzesDCbN" target="_blank" class="black">https://discord.gg/HxZzesDCbN</a> or our Email: <a href="mailto:mda@amogus.email" target="_blank" class="black">mda@amogus.email</a> or reinstall this Software!<br>
Keep getting this error while getting the latest installation or installing this from a Third Party?<br>
We recommend that you contact support above or contact the person that you got this installation from!<br>
</p>
<hr>
<p>Running Version: ${mda.getAttribute("version")}. Type: <b>${mda.getAttribute("type")}</b> controlled</p>
`;
}
}
else {
document.getElementById("bodyVIEW").innerHTML=`
<h1>Software Version is different/outdated</h1>
<hr>
<p>This Software is different/outdated.<br>
Send this to our support team at our Discord Server: <a href="https://discord.gg/HxZzesDCbN" target="_blank" class="black">https://discord.gg/HxZzesDCbN</a> or our Email: <a href="mailto:mda@amogus.email" target="_blank" class="black">mda@amogus.email</a> or reinstall this Software!<br>
Keep getting this error while getting the latest installation or installing this from a Third Party?<br>
We recommend that you contact support above or contact the person that you got this installation from!<br>
</p>
<hr>
<p>Running Version: ${mda.getAttribute("version")}. Type: <b>${mda.getAttribute("type")}</b> controlled</p>
`;
}
}