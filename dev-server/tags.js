const Liquid = require('liquidjs');
const mockRender = {
    render: function() { return ""; }
};

const tags = {
    meta_description:               mockRender,
    meta_keywords:                  mockRender,
    careersites_required_footer:    mockRender,
    careersites_required_title:     mockRender,
    careersites_required_header:    mockRender,
    careersites_required_head_tags: {
        render: function() {
            return `
                <link rel="stylesheet" media="screen" href="/assets/site/v3/manifest-945aa5e07381c4a2f37df436d1f636894dc57cacfee856c9ea7ee09f038c7eff.css" />
                <script src="/assets/site/v3/manifest-883bf9f1681df373d1b949ca43ee4a9fe48d1676de831948365d78b49458e02e.js"></script>
                <script type="text/javascript" charset="utf-8">
                //<![CDATA[
                  csns.maps.fetch_location_url = "https://bo-development-site.ttcportals.com/locations/fetch";
                
                //]]>
                </script>
                `
        }
    },
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