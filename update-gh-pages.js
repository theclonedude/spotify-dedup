var ghpages = require('gh-pages');
ghpages.publish('out', { dotfiles: true }, function (err) {
  if (err) {
    console.error('There was an error deploying gh-pages', err);
  } else {
    console.log('Deployment successful!');
  }
});
