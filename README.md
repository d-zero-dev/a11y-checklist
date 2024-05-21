# ディーゼロ アクセシビリティチェックリスト

| package                                                        | description                                                            |
| -------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`@d-zero/db-wcag`](./packages/@d-zero/db-wcag/)               | WCAG 2.0からWCAG 2.2（WAIC日本語訳を含む）までの達成基準のデータベース |
| [`@d-zero/a11y-checklist`](./packages/@d-zero/a11y-checklist/) | ディーゼロ独自のアクセシビリティチェックリスト                         |

## ウェブサイト

- URL未定
- [`@d-zero/a11y-checklist`](./packages/@d-zero/a11y-checklist/)を元にしたチェックリストを公開します
- [Astro](https://astro.build/)と[Svelte](https://svelte.dev/)を利用しています

## メンテナンス環境

- [Volta](https://volta.sh/)によって管理しています。
  - [Node.js](https://nodejs.org/)のバージョンは[`package.json`](./package.json)に記載しています
  - [yarn](https://yarnpkg.com/)のバージョンは[`package.json`](./package.json)に記載しています
  - このバージョンは[Renovate](https://www.mend.io/renovate/)によってアップデートされます
- [Commitizen](https://github.com/commitizen/cz-cli)を利用してコミットメッセージを作ります。メッセージは[_commitlint_](https://commitlint.js.org/)によってチェックされます。

### メンテ用のコマンド

| コマンド      | 内容                                                                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn dev`    | [チェックリストファイル](./packages/@d-zero/a11y-checklist/src/list.yaml)と[ウェブサイト](./packages/website/)を監視し、サイトをローカルで起動します |
| `yarn build`  | 各パッケージ、[ウェブサイト](./packages/website/)のビルドを行います                                                                                  |
| `yarn update` | [`@d-zero/db-wcag`](./packages/@d-zero/db-wcag/)の更新を行います                                                                                     |
| `yarn lint`   | リポジトリ内のファイルのリント・自動フォーマット・スペルチェックを行います                                                                           |
| `yarn co`     | Gitコミットを*Commitizen*経由で実行します                                                                                                            |
