# 注意
- 本デザインは株式会社senrenの社員及び企業活動に利用されるものです


<br>

# 利用の仕方
marpの導入については以下の記事を参照
https://qiita.com/tomo_makes/items/aafae4021986553ae1d8

1. VSCodeを開き、左下の歯車マークから設定 または、cmd + ,で設定画面を開く
2. settings.jsonへ切り替え、以下のコードを足す
```
  "markdown.marp.themes": [
"https://raw.githubusercontent.com/taigasenren/marp-senren-theme/main/marp-themes/senren.css"
],
  ```
3. marpのフォーマットに沿ってmarkdownファイルを作成する
```
---
marp: true
theme: senren
paginate: true
---
```
4. 各セクションごとに必要なクラス名を設定して利用する（デザインについてはsenren.pdfを参照）

自動生成を実施する場合は、prompt.txtを参考に利用する（今後も改変予定あり）


