var ex_list=[], ma_list=[], re_list=[], nextaddr="";

function address_musiclist(j)
{
	var e = $(j).find('a');
	var e_length=e.length;
	for(var i=0; i<e_length; i++)
	{
		var url=e[i].getAttribute('href');
		if(url.indexOf("music.html") == 0)
		{
			nextaddr=url;
			return;
		}
	}
}

function get_music_mdata(achive_list) 
{
	$.get(nextaddr, function(t,n,f){
		if(n=="success")
		{
			var j=t;
			var e=$(j).find('a');
			var e_length=e.length;
			
			//アドレス探し
			for(var i=0; i<e_length; i++)
			{
				var url=e[i].getAttribute('href');
				if(url.indexOf("music.html") == 0)
				{
					nextaddr=url;
					break;
				}
			}
			
			//データ収集
			var m=$(j).find("#accordion");
			var mlength=m.find("h3").length;
			for(var i=0; i<mlength; i++)
			{
				achive_list.push(
					[m.find("h3")[i].innerText.trim(), 
					 m.find("tbody")[i].children[1].children[2].innerText.trim().replace(/[(達成率) %]/g, "")]
					);
//				console.log(achive_list[i]);
			}
			
			
			
		}
		console.log(nextaddr);
	});
		return;
}
address_musiclist($(document));
nextaddr+="&d=4";
get_music_mdata(ex_list);
nextaddr+="&d=5";
get_music_mdata(ma_list);
nextaddr+="&d=6";
get_music_mdata(re_list);

