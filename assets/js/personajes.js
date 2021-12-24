$(document).ready(function(){

	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);
		
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		$('.personaje-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.personaje-item').hide();
		} setTimeout(hideProduct,400);

		function showProduct(){
			$('.personaje-item[category="'+catProduct+'"]').show();
			$('.personaje-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});


	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.personaje-item').show();
			$('.personaje-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});