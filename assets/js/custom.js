// this theme is designed & developed for Mediasoft Data Systems Ltd. By Mahbubur Rahman on July 2023. Do not copy any Part or any content from this site. All rights reserved to Mediasoft Data Systems Ltd.

$("[data-background").each(function () {
  $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
});