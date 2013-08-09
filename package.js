Package.describe({
  summary: "Based on `errors` package. Uses Zurb Foundation CSS classes in place of Bootstrap"
});

Package.on_use(function (api, where) {
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.add_files([
    'errors.js',
    'errors_list.html',
    'errors_list.js'], 'client');
});