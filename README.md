# social-media-login
Login web app through different social media platforms.

## Facebook login integration:
- **facebook [latest updates](https://developers.facebook.com/blog/post/2018/06/08/enforce-https-facebook-login/) no longer allows FB.login be called from http pages**
#### fix for local dev:
1. [app ssl (https) was configured](https://stackoverflow.com/questions/39210467/get-angular-cli-to-ng-serve-over-https)
2. [ssl certificates generated for localhost](https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec)

### Local dev startup:
1. ng serve --ssl
