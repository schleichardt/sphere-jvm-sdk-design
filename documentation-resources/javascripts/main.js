(function () {
    var headers = $("h3").not(".toc-ignore");

    var toc = "";

    headers.each(function() {
        var element = $(this);
        var title = element.text();
        var anker = "#" + element.attr("id");

        if(anker.length > 1 && anker != "#undefined" && title.length > 0) {
            toc += "<li><a href='" + anker + "'>" + title + "</a></li>";
        }
    });

    if(toc.length > 0) {
        $(".contentContainer", 0).prepend(
                "<nav role='navigation' class='table-of-contents'><strong>Table of Contents</strong><ul>" +
                toc + "</ul></nav>");
    }

    //moves this blocks up before the package listings
    var pullUpClass = "pull-up";
    $("." + pullUpClass).appendTo(".subTitle", 0).removeClass(pullUpClass);

    $(".hide").hide();

    var importShowButton = $("button.reveal-imports");
    importShowButton.show();
    importShowButton.click(function(eventObject) {
        $(this).siblings(".code-example-imports").toggle();
    });
})();

// Release notes - toggling hidden div and section collapse

$(".show-more, .show-more-section").on('click', function (event) {
   event.preventDefault();
   $(this).next().slideToggle("fast", function () {});
   if($(this).is('.show-more'))
   {
    $(this).toggleClass("show-more-rotate");
   }else
   {
    $(this).toggleClass("show-more-section-rotate");
   }
});
