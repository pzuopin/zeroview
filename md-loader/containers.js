const mdContainer = require('markdown-it-container');

module.exports = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        const source = tokens[idx + 2].type === 'fence' ? tokens[idex + 2].content : 'source'
        if (source === 'source') {
          return `<demo-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <div><p>xxxx</p>${content}</div>
        `;
        }else {
          return `<demo-block><template slot='source'>${content}</template></demo-block>`
        }

      }
      return '</demo-block>';
    }
  });

  md.use(mdContainer, 'tip');
  md.use(mdContainer, 'warning');
};
