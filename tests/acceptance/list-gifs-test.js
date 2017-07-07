import { test } from 'qunit';
import moduleForAcceptance from 'personal-emojis-gifs/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list gifs');

test('visiting / should show /gifs as home page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/gifs');
  });
});

test('should show random gifs on home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.gifs-list').length, 5, 'should show 5 gifs')
  });
});