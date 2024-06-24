# 注意

- 本デザインは株式会社senrenの社員及び企業活動に利用されるものです

<br>

# themeの利用の仕方（手動利用）

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

---

# 以下、ChatGPTなどLLMを利用する場合の生成手順

## 提案書用のマークダウンを作成する手順

1. ChatGPTにtl;dvでのトランススクリプトのファイルを添付し、promptの内容をテキストで渡す  
   prompt.txtの内容はInstruction部分をどういう企業宛に提案したいかなどを記載してください
2. 次に、md/template.mdの中身をそのままコピーし、GPTに対して「このテンプレートにマージしてください」と渡してください  
   ※GPTがコードブロックで提供してくれない場合があるので、その場合は「コードブロックで提供してください」と付け加えてください
3. 出来上がったコードをmdファイルに貼り付け、次の「提案書.pdfの出力手順」を実行してください

## 提案書.pdfの出力手順

1. .engine内でnpm install

```
npm --prefix .engine/ install
```

2. generate.shを修正

```
出力ファイル名
--output pdf/提案書.pdf

入力マークダウンファイル名
md/sample.md
```

※ themeの指定は現時点はローカルファイルのみ参照可能  
参考：https://github.com/marp-team/marp-cli/pull/571
