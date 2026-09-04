# 暮らしの喫茶 ひとひ｜営業用サンプルLP

新潟市西区・佐潟公園前にある  
「暮らしの喫茶 ひとひ（HITOHI）」の営業提案用サンプルLPです。

## 目的

Instagramに分散している店舗の魅力・食・佐潟・ワークショップ・店舗情報を
1ページに整理し、初回来店を後押しする。

## 主なCTA

- Instagramで最新の営業日を見る
- Googleマップで場所を見る

## 技術方針

- Next.js
- React
- TypeScript
- CSS
- Static Export
- Mobile First

## 参照資料

- `docs/requirements/`：LP要件定義書
- `docs/design/`：全体・セクション完成イメージ
- `public/images/`：LP使用素材

## 実装上の注意

- 要件定義書を情報の基準とする
- 未確認の店舗情報を追加しない
- 商品価格・電話番号・固定定休日・駐車場台数・席数等を推測しない
- 権利不明の第三者画像を追加しない
- 営業用サンプルであることをページ下部に表示する
- Hero画像は指定済み素材を使用する
- 主CTAはInstagram、副CTAはGoogleマップとする

## 画像ディレクトリ

```text
public/images/
├── hero/
├── about/
├── food/
├── space/
├── sakata/
├── workshop/
└── events/
```

## 公開

本リポジトリは営業提案用サンプルLPのための制作物です。  
正式商用サイトではありません。

公開方法・確認URLは実装後に更新します。

## Git運用

- GitHub private repositoryをコード管理上の正本とする
- 意味のある作業単位でcommitする
- ユーザー確認前にpush / deployしない
- force pushや履歴破壊を行わない
- 秘密情報をGitへ保存しない
