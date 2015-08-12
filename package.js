Package.describe({
  summary: 'A collection Bootswatch themes for Bootstrap-Themer',
  name: 'tap:bootstrap-themer-bootswatch-themes',
  version:'0.1.0',
  git:'https://github.com/TAPevents/bootstrap-themer-bootswatch-themes'
});

Package.on_use(function (api) {

  api.versionsFrom('1.1.0.2');

  api.use([
    'coffeescript'
  ], ['server']);

  api.use([
    'tap:bootstrap-themer'
  ], ['server'], {weak:true});

  // Bootstrap Server-side assets
  api.add_files([
    // bootswatch themes
    'themes/amelia/bootswatch.less',
    'themes/amelia/variables.less',
    'themes/cerulean/bootswatch.less',
    'themes/cerulean/variables.less',
    'themes/cosmo/bootswatch.less',
    'themes/cosmo/variables.less',
    'themes/cyborg/bootswatch.less',
    'themes/cyborg/variables.less',
    'themes/darkly/bootswatch.less',
    'themes/darkly/variables.less',
    'themes/flatly/bootswatch.less',
    'themes/flatly/variables.less',
    'themes/lumen/bootswatch.less',
    'themes/lumen/variables.less',
    'themes/readable/bootswatch.less',
    'themes/readable/variables.less',
    'themes/simplex/bootswatch.less',
    'themes/simplex/variables.less',
    'themes/slate/bootswatch.less',
    'themes/slate/variables.less',
    'themes/spacelab/bootswatch.less',
    'themes/spacelab/variables.less',
    'themes/superhero/bootswatch.less',
    'themes/superhero/variables.less',
    'themes/united/bootswatch.less',
    'themes/united/variables.less',
    'themes/yeti/bootswatch.less',
    'themes/yeti/variables.less'
  ],"server");

  api.add_files([
    'bootswatch-themes.coffee'
  ],"server");


});