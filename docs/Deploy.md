# Deploy a Sapper Web App Automatically to GitHub Pages using GitHub Actions

Sapper is a framework for building web applications, where every page is a Svelte component.

You may want to setup your GitHub repository to use GitHub Actions to automatically build and deploy your site to GitHub
Pages website hosting every time you check in your code. This is great because the build/deploy step happens
automatically for you - no need to manually do it yourself! Here’s how to set that up:

1. Create a new GitHub Repository and copy the Sapper template files to it.
2. Ensure gh-pages is enabled by going to the repository setting tab and enabling it.
3. To enable Sapper to live at a subdirectory (yourname.github.io/repo-name), modify the export task in package.json to
   include --basepath repo-name
   (replacing repo-name with the name of your GitHub repository). It should look like this:

```yaml
"export": "sapper export  --basepath repo-name --legacy",
             ^^^^^ add this ^^^^^
```

4. In src/server.js, right after polka().use(, add a string as the first parameter with the repository name, so it will
   look like this:

```javascript
polka()
        .use(
                'repo-name', // Add this line
                compression({threshold: 0}),
                sirv('static', {dev}),
                sapper.middleware()
        )
        .listen(PORT, err => {
           if (err) console.log('error', err);
        });
```

5. Create a GitHub Access Token by going to github.com/settings/tokens (scopes: repo access)
6. Place that GitHub Access Token into the repository “Secrets” by going to the repository settings tab, then clicking
   the Secrets page. I named mine github_pat (used below)

7. Create a new file, .github/workflows/main.yml, with the contents below. Replace secrets.github_pat with the name you
   gave to your GitHub Token in step 5. Replace FOLDER: __sapper__/export/repo-name with the name of your repository (
   used above in step 3 and 4).

```yaml
name: Build and Deploy
on:
   push:
      branches:
         - master
jobs:
   build-and-deploy:
      runs-on: ubuntu-latest
      steps:
         - name: Checkout
           uses: actions/checkout@v2
           with:
              persist-credentials: false

         - name: Use Node.js '12.x'
           uses: actions/setup-node@v1
           with:
              node-version: '12.x'
         - run: npm install
         - run: npm run export
         - name: Build and Deploy
           uses: JamesIves/github-pages-deploy-action@releases/v3
           with:
              ACCESS_TOKEN: ${{ secrets.github_pat }}
              BRANCH: gh-pages
              FOLDER: __sapper__/export/repo-name
```

After this is all setup, any time you commit to the master branch (or whichever branch you configured), the code will
get built and deployed to GitHub Pages website hosting. Here is an example repository where you can see this in action.
Enjoy!

###### Written by Gavin Rehkemper on February 25, 2020

Ref: [Gavinr](https://gavinr.com/svelte-sapper-github-pages-actions/)
