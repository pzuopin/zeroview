const Config = require('markdown-it-chain')
const mdContainer = require('markdown-it-container')
let config = new Config()

config.options.html(true).end().plugin('containers').use(setCustomContainer).end()

// setCustomContainer(config)
let configMd = config.toMd()
overWriteFenceRule(configMd)

function setCustomContainer(md) {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s+(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        const source = tokens[idx + 2].type === 'fence' ? tokens[idx + 2].content : 'source';
        return `<demo-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        // <!--element-demo: ${content}:element-demo-->
        <div>${source}</div>
        `;
      }
      return '</demo-block>';
    }
  })

}


function overWriteFenceRule(md) {
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1];
    const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);
    if (token.info === 'html' && isInDemoContainer) {
      return `<template slot="highlight"><pre v-pre><code class="html">${md.utils.escapeHtml(token.content)}</code></pre></template>`;
    }else if(token.info === 'source') {
      console.log('source...')
      return `<template slot="source">${token.content}</template>`;
    }
    return defaultRender(tokens, idx, options, env, self);
  };
}


module.exports = function (resource) {
  return `
    <template><div>${configMd.render(resource)}</div></template>
    <script>
      export default {
        name: 'ButtonExample'
      }
    </script>
  `
}
