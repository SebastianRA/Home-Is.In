$(document).ready(function() {
	$(".project").click(function() {
		var proj_id = $(this).attr("proj_id");
		var disp = $("#proj_display");

		disp.load("projects/" + proj_id + ".html", function() {
			$(this).slideDown();
		});
	});

	var proj_width = $(".project").first().width();
	$(document).resize(function() {
		var docwidth = $(document).width();
		var maxwidth = Math.min(docwidth - docwidth % proj_width, proj_width * 3.2);
		$("#projects").width(maxwidth)
	})
});
