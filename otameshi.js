javascript:
(
	function(j,f,dom)
	{
		j=['mai_inner_level_milk3.js',
		   'otameshi_calc.js',
//		   'limited_id.js',
		   'otameshi_body.js'];
		dom='https://sgimera.github.io/mai_RatingAnalyzer/scripts/';
		f=function(s,u)
		{
			if(j.length==0)
			{
				return;
			}
			u=dom+j.shift()+'?'+Date.now();
			s=document.createElement('script');
			document.body.appendChild(s);
//			s.charset='UTF-8';
			s.addEventListener('load',f);
			s.src=u;
		};
		(document.readyState=='loading')?document.addEventListener('DOMContentLoaded',f):f();
	}
)();
