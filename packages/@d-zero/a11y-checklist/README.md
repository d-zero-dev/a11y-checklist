# `@d-zero/a11y-checklist`

ディーゼロ独自のアクセシビリティチェックリスト

チェックリストのデータは[`src/list.yaml`](./src/list.yaml)に記述されています。
パッケージのビルド時にJSON形式に変換され、`dist/list.json`に出力されます。

## インストール

```sh
yarn add @d-zero/a11y-checklist
```

## 使用方法

```js
import { a11yChecklist } from '@d-zero/a11y-checklist';
```

Viteなどを介してフロントエンドに読み込む必要がある場合、直接JSONデータを取得する際は以下のようにしてください。

```js
/**
 * @type {import('@d-zero/a11y-checklist').A11yChecklist}
 */
const json = (await import('@d-zero/a11y-checklist/json')).default;
```
