$(document).ready(function() {

    $("[role=main]").find(".toctree-l2").each(function() {
        $(this).children(":first").addClass("collapsible")
    });
    
    $(".collapsible").each(function() {
        if ($(this).siblings("ul").length > 0) {
            $(this).after("<button onclick='toggleList(this)' class='toggle-button'><i class='fas fa-angle-down arrow'></i></button>")
        }
    });
    
    $(".toggle-button").each(function() {
        toggleList(this);
    });

    $(".toctree-wrapper").each(function() {
        $(this).before("<button id='toggle-all-button' class='toggle-buttons hidden-all' onclick='toggleAll(this)'>Expand All</button>");    });
});

function expandList(button) {
    button.html("<i class='fas fa-angle-up arrow'>");
    button.removeClass("hidden-children");
    button.nextAll().each(function() {
        $(this).removeClass("hidden");
    });
    button.nextAll("ul").each(function() {
        $(this).removeClass("hidden-list");
    });
}

function expandAll() {
    $(".toggle-button").each(function () {
        expandList($(this));
    });
}

function collapseList(button) {
    button.html("<i class='fas fa-angle-down arrow'>");
    button.addClass("hidden-children");
    button.nextAll().each(function() {
        $(this).addClass("hidden");
    });
    button.nextAll("ul").each(function() {
        $(this).addClass("hidden-list");
    });
}

function collapseAll() {
    $(".toggle-button").each(function () {
        collapseList($(this));
    });
}

function toggleList(button) {
    var element = $(button);
    if (element.hasClass("hidden-children")) {
        expandList(element);
    } else {
        collapseList(element);
    }
}

function toggleAll(button) {
    var element = $(button);
    if (element.hasClass("hidden-all")) {
        element.text("Collapse All");
        element.removeClass("hidden-all");
        expandAll();
    } else {
        element.text("Expand All");
        element.addClass("hidden-all");
        collapseAll();
    }
}