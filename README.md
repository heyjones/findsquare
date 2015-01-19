# findsquare
A jQuery plugin that leverages the Foursquare API to autocomplete location details

## How To Use
You can identify your search field however you'd like.
```html
<input type="text" id="findsquare">
```
The plugin will wrap the input and add the following:
```html
<div class="findsquare-container">
  <input type="text" id="findsquare">
  <ul class="findsquare-results">
    <li class="findsquare-result">
      <a href="#" class="findsquare-venue" data-name="Name" data-address="123 Address" data-city="City" data-state="ST" data-zip="12345" data-country="US">
        <strong>Name</strong>
        123 Address City, ST 12345 US
      </a>
    </li>
  </ul>
</div>
```
You'll have to generate an API key at https://foursquare.com/developers/apps and include it in your function call.
```javascript
$(document).ready(function(){
  $('#findsquare').findsquare({
    oauth_token: 'VWWQ00AMWSSJWQQEABZGW4PDDBP54J5DHTN2L0EC45U5XALP'
  });
});
```
### Available Options
Option | Default | Description
------ | ------- | -----------
oauth_token | 'VWWQ00AMWSSJWQQEABZGW4PDDBP54J5DHTN2L0EC45U5XALP' | Foursquare API token
v | 20150118 | Foursquare API version
