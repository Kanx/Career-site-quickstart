const globals = require('./globals');

const filters = {
    link_to_apply: function(job, text) {
      return `<div class="cs_item_apply_button" id="cs_item_apply_button_4034947"><a href="#start" class="cs_item_apply_button_link social_apply" id="job_link_4034947" rel="nofollow">${text}</a></div>`
    },
    link_to_talent_network: function(job, id, classes) {
        return `<a href="#start" class="${classes}" id="${id}">Join Talent Network</a>`
    },
    job_query: function (string) {
        return require('./data/jobs')
    },
    assign_to: function(jobs, assignTo) {
        globals[assignTo]= jobs;
    },
    strip_html: function(i) {
        return i
    },
    assignto: function(jobs, assignTo) {
        globals[assignTo]= jobs;
    },
    replace_global_regex: function (input, regex, replaceWith) {
        var regexObject = new RegExp(regex);
        if (typeof input === String) return input.replace(regexObject, replaceWith);
    },
    limit: function(input, limit) {
        if(typeof input == Array) {
            return input.splice(0,3);
        } else {
            return input;
        }
    },
    time_ago_in_words: function(i) {
        return '1 week'
    },
    escape_html: function(i) {
        return i || '';
    },
    posts_with_tag: function(i) {
        return require('./data/posts.js').filter((post) => {
            return post.topics.indexOf(i) !== -1;
        });
    },
    url_encode: function(i) {
        return i || '';
    },
    paginate: function() {
        return `<a class="prev_page" rel="prev" href="/search/rbs/jobs/in?page=1#">previous</a> <a rel="prev" href="/search/rbs/jobs/in?page=1#">1</a> <span class="current">2</span> <span class="next_page disabled">next</span>`
    },
    replace_global_regex: function(i) {
        return i || ''
    }
};

module.exports = filters;