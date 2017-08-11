/**
 * Created by liyang on 2016/10/27.
 * yong yu jing xing rem bu ju de dui rem de she zhi;
 */

//huo qu shi ji de font-size de han shu.bing qie gei html de font-size she zhi .
function rem_size(designWidth){
    function fontsize(){
        var designWidthinner=designWidth;
        var fontSize=100;
        var relWidth=document.documentElement.clientWidth;
        var relFontSize=fontSize*relWidth/designWidthinner;
        document.getElementsByTagName('html')[0].style.fontSize=relFontSize+"px";
        console.log(document.documentElement.clientWidth)
    }
    fontsize();
    window.onresize=fontsize;
}
rem_size(750);





