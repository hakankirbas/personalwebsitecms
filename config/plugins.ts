export default () => ({
  "strapi-csv-import-export": {
    config: {
      authorizedExports: [
        "api::skill-categorie.skill-categorie",
        "api::skill.skill",
        "api::skill-technology.skill-technology",
      ],
      authorizedImports: [
        "api::skill-categorie.skill-categorie",
        "api::skill.skill",
        "api::skill-technology.skill-technology",
      ],
    },
  },
});
