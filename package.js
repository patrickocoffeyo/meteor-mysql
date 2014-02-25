Package.describe({
  summary: 'A node.js driver for mysql, extended to Meteor.'
});

Package.on_use(function(api) {
  api.add_files(['lib/mysql.js'], 'server');
  if (typeof api.export !== 'undefined') { api.export('Mysql', 'server'); }
});

Npm.depends({ 'mysql': '2.1.0' });
