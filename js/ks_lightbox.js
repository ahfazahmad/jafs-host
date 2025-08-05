// JavaScript Document

/** K light box **/
$(document).ready(function() {

	$('.K_Lightbox').click(function(){
		//alert('in K_Lightbox function ');
		var loadurl=$(this).attr("rel");
		//alert(loadurl);
		$(".S_Lightbox").load(loadurl);	
		$(".S_Lightbox").fadeIn();
	});
	$(".close_k_lightbox").on('click',function(){
		close_k_lightbox();
	});

	$(document).mouseup(function (e){
		var container = $(".S_Lightbox");
		if (!container.is(e.target) && container.has(e.target).length === 0)
		{
			//close_k_lightbox();
		}
	});

/// - ready function close - ///
});

	
function close_k_lightbox()
{ $(".S_Lightbox").hide('slow'); }
