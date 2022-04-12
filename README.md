# Vuepress-plugin-tc-comment

### [Demo](https://theajack.gitee.io/message-board)

> Support [tc-comment](https://github.com/theajack/comment) plugins in Vuepress

## Usage

### Install

With `npm`:

```bash
npm install --save vuepress-plugin-tc-comment
```

With `yarn`:

```bash
yarn add vuepress-plugin-tc-comment -D
```

With `cnpm`:

```bash
cnpm i --save vuepress-plugin-tc-comment
```

### Usage

[Config Detail](https://github.com/theajack/comment#tc-comment)

```javascript
// View https://github.com/theajack/comment for details
module.exports = {
  plugins: [
    'vuepress-plugin-tc-comment'
  ]
}
```

or use Options

```javascript
module.exports = {
  plugins: [
    'vuepress-plugin-tc-comment',
    {
      conteiner: '', // default is main.page
      host: '', // View https://github.com/theajack/comment for details
      getUrl: '',
      insertUrl: '',
      replyUrl: '',
    }
  ]
}
```

## demo

[https://theajack.gitee.io/cnchar](https://theajack.gitee.io/cnchar)
