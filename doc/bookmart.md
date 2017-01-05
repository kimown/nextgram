## Add [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

```
export PKG=eslint-config-airbnb
cnpm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs tyarn add --dev "$PKG@latest"
```

## Git Commit Guidelines
[Href](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)

[When To use chore](http://stackoverflow.com/questions/26944762/when-to-use-chore-as-type-of-commit-message)