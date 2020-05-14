const Liquid = require('liquidjs');
const mockRender = {
    render: function() { return ""; }
};

const tags = {
    meta_description:               mockRender,
    meta_keywords:                  mockRender,
    careersites_required_footer:    mockRender,
    careersites_required_title: {
        render: function() { return "RBS Development Site"; }
    },
    careersites_required_header:    mockRender,
    careersites_required_head_tags: {
        render: function() {
            return `
                <link rel="stylesheet" media="screen" href="/assets/site/v3/manifest-5c74d3440ddd6b56bd97086d330260ffd24c5700d669021350315eaaa1595e6d.css" />
                <script src="/assets/site/v3/manifest-60e5578c4f5cd0f8c27b880b479d226813ce1f52eafd28f2c57f2a7d3d4c16d4.js"></script>
                
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