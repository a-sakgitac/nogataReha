# タスク③セキュリティ対策 ＋ ④GitHub Pages公開

## 対象パス
C:\Users\askbu\OneDrive\デスクトップ\副業\緑樹会\claude\homepage

---

## 作業1: セキュリティ対策

全HTMLファイルの`<head>`内に以下のmetaタグを追加する。

```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
<meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()">
```

また、全HTMLファイルで `target="_blank"` の外部リンクに `rel="noopener noreferrer"` が付いているか確認し、なければ追加する。

---

## 作業2: GitHub Pages用ファイル作成

homepageフォルダ直下に以下の2ファイルを作成する。

### ① `.nojekyll`
中身は空ファイル。

### ② `404.html`
`index.html` の内容をそのままコピーして作成する。

---

## 完了報告
作業完了後は「完了しました」とだけ報告すること。
