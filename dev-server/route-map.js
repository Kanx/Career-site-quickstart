const jf = "/_job-families";
const locations = "/_locations";
const brands = "/_brands";

const workingHere = "/_working-here";
const technology = "/_technology";
const businessStrategy = "/_business-strategy-and-delivery";
const hr = "/_human-resources";
const finance = "/_finance";
const customer = "/_customer";
const coa = "/_control-oversight-and-assurance";
const frontOfficeMarkets = "/_front-office-markets";
const counsel = "/_counsel";

const studentContent = "/_student-content";
const interns = "/_intern-pages";
const graduates = "/_graduate-pages";

const smallPrint = "/_small-print";

const _mappings = {
  /* Job  Families */

  /* JFG: Technology */
  technology: {
    path: `${jf}${technology}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "technology-architecture": {
    path: `${jf}${technology}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "technology-infrastructure-solutions": {
    path: `${jf}${technology}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "technology-resilience-and-continuity": {
    path: `${jf}${technology}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "technology-service-and-relationship-management": {
    path: `${jf}${technology}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "technology-security": {
    path: `${jf}${technology}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "technology-quality": {
    path: `${jf}${technology}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "software-engineering": {
    path: `${jf}${technology}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },

  /* JFG: Business Strategy & Delivery */
  "business-strategy-and-delivery": {
    path: `${jf}${businessStrategy}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "business-management-and-leadership-support": {
    path: `${jf}${businessStrategy}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "change-and-project-management": {
    path: `${jf}${businessStrategy}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "insights-and-analytics": {
    path: `${jf}${businessStrategy}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "property-services": {
    path: `${jf}${businessStrategy}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  strategy: {
    path: `${jf}${businessStrategy}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "supply-chain": {
    path: `${jf}${businessStrategy}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },

  /* JFG: Human Resources */
  "human-resources": {
    path: `${jf}${hr}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "compensation-and-benefits": {
    path: `${jf}${hr}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "employee-relations": {
    path: `${jf}${hr}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "hr-consulting-and-partnering": {
    path: `${jf}${hr}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "organisational-capability": {
    path: `${jf}${hr}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  recruitment: { path: `${jf}${hr}`, tags: ["JF_NAV", "TACS_FACETED_SEARCH"] },
  "training-and-development": {
    path: `${jf}${hr}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },

  /* JFG: Finance */
  finance: { path: `${jf}${finance}`, tags: ["JF_NAV", "TACS_FACETED_SEARCH"] },
  "finance-partnering": {
    path: `${jf}${finance}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "financial-control-and-reporting": {
    path: `${jf}${finance}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "regulatory-control-and-data-management": {
    path: `${jf}${finance}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  tax: { path: `${jf}${finance}`, tags: ["JF_NAV", "TACS_FACETED_SEARCH"] },
  treasury: {
    path: `${jf}${finance}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },

  /* JFG: Customer */
  customer: {
    path: `${jf}${customer}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "consultant-banker-and-relationship-management": {
    path: `${jf}${customer}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "customer-journey": {
    path: `${jf}${customer}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "customer-service-and-operations": {
    path: `${jf}${customer}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "direct-sales": {
    path: `${jf}${customer}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "innovation-and-digital-design-and-delivery": {
    path: `${jf}${customer}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "marketing-and-communications": {
    path: `${jf}${customer}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "product-and-proposition": {
    path: `${jf}${customer}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "specialist-advice": {
    path: `${jf}${customer}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },

  /* JFG: Control, Oversight & Assurance */
  "control-oversight-and-assurance": {
    path: `${jf}${coa}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "first-line-controls": {
    path: `${jf}${coa}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  audit: { path: `${jf}${coa}`, tags: ["JF_NAV", "TACS_FACETED_SEARCH"] },
  "risk-oversight-and-challenge": {
    path: `${jf}${coa}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "risk-policy-and-frameworks": {
    path: `${jf}${coa}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  "risk-technical-specialisms": {
    path: `${jf}${coa}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },

  /* JFG: Front Office Markets */
  "front-office-markets": {
    path: `${jf}${frontOfficeMarkets}`,
    tags: ["JF-NAV"]
  },
  "front-office-markets-financing-and-risk-solutions": {
    path: `${jf}${frontOfficeMarkets}`,
    tags: ["JF-NAV"]
  },
  "front-office-markets-sales": {
    path: `${jf}${frontOfficeMarkets}`,
    tags: ["JF-NAV"]
  },
  "front-office-markets-technical-specialists": {
    path: `${jf}${frontOfficeMarkets}`,
    tags: ["JF-NAV"]
  },
  "front-office-markets-trading": {
    path: `${jf}${frontOfficeMarkets}`,
    tags: ["JF-NAV"]
  },

  /* JFG: Counsel */
  counsel: { path: `${jf}${counsel}`, tags: ["JF_NAV", "TACS_FACETED_SEARCH"] },
  governance: {
    path: `${jf}${counsel}`,
    tags: ["JF_NAV", "TACS_FACETED_SEARCH"]
  },
  legal: { path: `${jf}${counsel}`, tags: ["JF_NAV", "TACS_FACETED_SEARCH"] },

  // Working here
  reward: { path: `${workingHere}`, tags: ["WH_NAV"] },
  "career-development": { path: `${workingHere}`, tags: ["WH_NAV"] },
  "flexible-working": { path: `${workingHere}`, tags: ["WH_NAV"] },
  "application-process": { path: `${workingHere}`, tags: ["WH_NAV"] },
  inclusion: { path: `${workingHere}`, tags: ["WH_NAV"] },
  "help-and-faqs": { path: `${workingHere}`, tags: ["WH_NAV"] },

  // Locations
  locations: { path: `${locations}`, tags: ["LOCATIONS_NAV"] },
  manchester: { path: `${locations}`, tags: ["LOCATIONS_NAV"] },
  poland: { path: `${locations}`, tags: ["LOCATIONS_NAV"] },
  edinburgh: { path: `${locations}`, tags: ["LOCATIONS_NAV"] },
  birmingham: { path: `${locations}`, tags: ["LOCATIONS_NAV"] },
  bristol: { path: `${locations}`, tags: ["LOCATIONS_NAV"] },
  london: { path: `${locations}`, tags: ["LOCATIONS_NAV"] },

  // Brands
  "natwest-ventures": { path: `${brands}`, tags: ["BRANDS_NAV"] },
  "rbs-international": {
    path: `${brands}`,
    tags: ["BRANDS_NAV", "TACS_FACETED_SEARCH"]
  },
  "royal-bank-of-scotland": {
    path: `${brands}`,
    tags: ["BRANDS_NAV", "TACS_FACETED_SEARCH"]
  },

  // Early Careers
  apprenticeships: { path: `${studentContent}`, tags: ["TACS_FACETED_SEARCH"] },
  "applying-as-a-student": {
    path: `${studentContent}`,
    tags: ["CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "female-insight-weeks": {
    path: `${studentContent}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "find-your-path": {
    path: `${studentContent}`,
    tags: ["CHILD-NAV-ACTIVE", "EC-NAV"]
  },
  "graduate-and-interns": {
    path: `${studentContent}`,
    tags: ["CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "school-leavers": {
    path: `${studentContent}`,
    tags: ["CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "student-events": {
    path: `${studentContent}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "search-programmes": {
    path: `${studentContent}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "student-faqs": {
    path: `${studentContent}`,
    tags: ["CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },

  // Early Careers: Graduate content
  "change-and-business-solutions-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "communications-and-marketing-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "customer-solutions-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "data-and-analytics-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "finance-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "human-resources-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "internal-audit-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "markets-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "private-banking-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "rbs-international-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "risk-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "software-engineering-graduate-programmes": {
    path: `${studentContent}${graduates}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },

  // Early Careers: Intern content
  "change-and-business-solutions-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "communications-and-marketing-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "customer-solutions-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "data-and-analytics-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "finance-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  internships: {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "human-resources-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "internal-audit-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "markets-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "private-banking-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "risk-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },
  "software-engineering-internships": {
    path: `${studentContent}${interns}`,
    tags: ["TACS_GTI", "CHILD-NAV-ACTIVE", "FOOTERPROMO_EC-Facebook", "EC-NAV"]
  },

  // Small Print
  accessibility: {
    path: `${smallPrint}`,
    tags: []
  },
  "social-house-rules": {
    path: `${smallPrint}`,
    tags: []
  },
  "candidate-privacy-notice": {
    path: `${smallPrint}`,
    tags: []
  },
  "cookie-notice": {
    path: `${smallPrint}`,
    tags: []
  },
  "help-apply-workflow": {
    path: `${smallPrint}`,
    tags: []
  },
  "confirmation-join-talent-network": {
    path: `${smallPrint}`,
    tags: []
  },
  "candidate-log-in": {
    path: `${smallPrint}`,
    tags: []
  },

  "executive-search-privacy-notice": {
    path: `${smallPrint}`,
    tags: []
  }
};

module.exports = function(key) {
  const mapping = _mappings[key];

  if (mapping) {
    return mapping;
  } else {
    return false;
  }
};
