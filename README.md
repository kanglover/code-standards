## 使用 fecs + husky+ lint-staged 配置项目

## 安装 husky 一定要用 npm/yarn 
## cnpm 和 tnpm 没有像 npm 和 yarn 一样添加 $INIT_CWD 环境变量 [原因](https://github.com/cnpm/cnpm/issues/317)
## 如果使用 cnpm 安装后，可使用 npm rebulid 进行重建

## client/package.json
```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "lint-staged"
    }
  },
  "lint-staged": {
    "*": [
      "prettier --write",
      "eslint",
      "git add"
    ]
  }
```

## server/package.json
```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint",
      "git add"
    ]
  }
```
