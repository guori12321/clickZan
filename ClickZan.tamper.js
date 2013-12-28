// ==UserScript==
// @name       ClickZan
// @namespace  http://ruiguo.me
// @version    0.1
// @description  ClickZan Plugin for Renren.com
// @match      http://www.renren.com/*
// @copyright  2013, ruiguo.me
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var zan = '臣妾真的看不进去书啊！';
var afterZan = '朕已经没有考试了~~';

function IterateNode(node){
    	//if (/ILike/.test(node.id)) alert(node.innerHTML);
	    if (/ILike/.test(node.id))
        {
            //alert(node.innerHTML);
            if (/取消赞/.test(node.innerHTML))
            {
                //alert('a');
            	node.innerHTML = afterZan;
            }
            else
        	{
                if (/赞/.test(node.innerHTML))
                node.innerHTML = zan;
            }
        }

    	//search the children of the current node
        var childrens = node.childNodes;
        if(childrens == null ||
           typeof(childrens) == "undefined" ||
        childrens.length == 0) return;
        for(var i=0;i<childrens.length;i++){
            IterateNode(childrens[i]);
        }
}

$(document).ready(function() {
    IterateNode(document);
    setInterval(function(){IterateNode(document)},1000);
});
