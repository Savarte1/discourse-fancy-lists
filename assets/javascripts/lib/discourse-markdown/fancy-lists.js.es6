export function setup(helper) {

    helper.registerOptions((opts, siteSettings) => {
      opts.features["fancy-lists"] = !!siteSettings.enable_markdown_fancy_lists;
    });

    helper.allowList([
      'ol[type=*]',
      'ul',
      'li'
    ]);

    if (window.markdownItFancyListPlugin) {
      helper.registerPlugin(window.markdownItFancyListPlugin.markdownItFancyListPlugin);
    }
}
