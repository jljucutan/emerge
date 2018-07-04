var Toggler = function(obj) {
    config = "test";
    $.getJSON(obj.config, function(data) {
        config = data;
    });
    this.getConfig = function() {
        return config;
    }
    return this;
}

