document. querySelector("#dark-mode")
    .addEventListener("click", function() {
        document. querySelector ("body").classlist.add("dark");
        document. querySelector ("body").classlist.remove("light");
    }
);

document. querySelector("#light-mode")
    .addEventListener("click", function() {
        document. querySelector ("body").classlist.add("light");
        document. querySelector ("body").classlist.remove("dark");
    }
);