$(document).ready(function()
{
	$("#nav_list a").click(function()
	{
		$.get(`json_files/${$(this).attr("title")}.json`).done(function(speaker)
		{
			let speakerInfo = speaker.speakers[0];
			$("main h1").text(speakerInfo.title);
			$("main h2").text(speakerInfo.month);
			$("main h3").text(speakerInfo.speaker);
			$("main img").attr("src", speakerInfo.image);
			$("main img").attr("alt", speakerInfo.title + " image.");
			$("main p").html(speakerInfo.text);
		}
		);
	}
	)
}
); // end ready