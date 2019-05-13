const Liquid = require('liquidjs');
const mockRender = {
    render: function() { return ""; }
};

const tags = {
    meta_description:               mockRender,
    meta_keywords:                  mockRender,
    careersites_required_title:     mockRender,
    careersites_required_footer:    mockRender,
    careersites_required_header:    mockRender,
    careersites_required_head_tags: mockRender,
    page_required_header:           mockRender,
    page_required_footer:           mockRender,
    widget_region:                  mockRender,
    candidate_job_notification: {
        parse: function(linkText) {
            this.linkText = linkText.args.substring(1, linkText.args.length - 1);
        },
        render: async function() {
            return "<a id=\"candidateJobNotificationLauncher\" class=\"tm_notification_link\" href=\"#candidateJobNotification\">" + this.linkText + "</a>";
        }
    },
    redirect_permanent: {
        parse: function(redirectTo) {
            this.str = redirectTo.args;
        },
        render: async function(scope, hash) {
            return '<script>window.location.replace("' + this.str + '")</script>';
        }
    }
};

module.exports = tags;