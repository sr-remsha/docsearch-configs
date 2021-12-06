new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.tibbo.com/taiko",
    "https://docs.tibbo.com/",
    "https://docs.tibbo.com/phm",
    "https://docs.tibbo.com/soism",
    "https://docs.tibbo.com/opc",
    "https://docs.tibbo.com/tmgm",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.tibbo.com/**"],
  schedule: "at 19:10 on Friday",
  actions: [
    {
      indexName: "tibbo",
      pathsToMatch: ["https://docs.tibbo.com/taiko**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "tibbo",
      pathsToMatch: ["https://docs.tibbo.com/phm**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "tibbo",
      pathsToMatch: ["https://docs.tibbo.com/soism**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "tibbo",
      pathsToMatch: ["https://docs.tibbo.com/opc**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "tibbo",
      pathsToMatch: ["https://docs.tibbo.com/tmgm**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    tibbo: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});