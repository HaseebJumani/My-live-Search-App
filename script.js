$('#search').keyup(function(){
	var searchfield = $('#search').val();
	var myExp = new RegExp(searchfield, 'i');
	$.getJSON('data.json', function mydata(data){
	var output = '<ul>';
		$.each(data, function(key, val){
			if((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)){			
			output += '<li>';
			output += '<h1>' + val.name + '</h1>';
			output += '<img src="images/' + val.shortname + '_p.jpg" alt="' + val.name + '"/>';
			output += '<h3>' + val.country + '</h3>';
			output += '<p>' + val.bio + '</p>';
			output += '</li>';
			}
		});
	output += '</ul>';
	$('#update').html(output);
	}); // get JSON	
});
