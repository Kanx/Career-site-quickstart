const globals = require('./globals');

const filters = {
    link_to_apply: function(job, text) {
      return `<div class="cs_item_apply_button" id="cs_item_apply_button_4034947"><a href="#start" class="cs_item_apply_button_link social_apply" id="job_link_4034947" rel="nofollow">${text}</a></div>`
    },
    job_query: function (string) {
        return require('./data/jobs')
    },
    assign_to: function(jobs, assignTo) {
        globals[assignTo]= jobs;
    },
    replace_global_regex: function (input, regex, replaceWith) {
        var regexObject = new RegExp(regex);
        if (typeof input === String) return input.replace(regexObject, replaceWith);
    },
    time_ago_in_words: function(i) {
        return '1 week'
    }
};

module.exports = filters;