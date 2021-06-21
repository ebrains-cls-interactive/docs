$(document).ready(function () {
    var src = $(".wy-side-nav-search").children("a").children("img")[0].src
    $(".wy-side-nav-search").children("a").children("img").remove()
    $(".wy-side-nav-search").prepend(' \
        <a href="https://ebrains-cls-interactive.github.io/" style="margin: 0; display: block"> \
            <img style="width: 100%; height: auto; border-radius: 0; margin: 0" src="' + src + '" alt="Logo"> \
        </a>')
})