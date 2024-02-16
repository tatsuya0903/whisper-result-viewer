<script setup lang="ts">

const colabUrl = 'https://colab.research.google.com/github/tatsuya0903/whisper-result-viewer/blob/main/文字起こしツール.ipynb'
</script>

<template>
  <v-container>
    <h2>使い方</h2>
    <h3>1. 文字起こしツールをGoogle Colaboratoryを開く</h3>
    <p>
      <a :href="colabUrl" target="_blank">
        <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab">
      </a>
    </p>
    <h3>2. 左端のファイルアイコンをクリックする</h3>
    <h3>3. 音声ファイル(mp3,movなど)をドラッグ＆ドロップする</h3>
    <div>アップロード中の表示 ※結構時間かかる(100MBのファイルで5分〜10分くらい)</div>
    <h3>4. １つ目の再生ボタンをクリックする</h3>
    <div>最後に「Successfully」と表示されたいればOK</div>
    <h3>5. ２つ目の再生ボタンをクリックする</h3>
    <div>実行が終わるまで、ブラウザを表示したままで待機する</div>
   <div>実行中の画面例 ※結構時間かかる(60分の音声ファイルで20分くらい)</div>
    <div>実行完了時のアラート設定のポップアップが表示されたら、OKをクリックしておくと便利</div>

    <h3>6. 実行が終わったら、ファイル一覧を更新する</h3>
    <h3>7. 生成された「音声ファイル名_文字起こし結果.json」ファイルをダウンロードする</h3>
    <h3>8. ブラウザ(Microsoft Edge, Chromeなど)で文字起こし結果表示ツールを開く</h3>
    <h3>9. 音声ファイルと結果ファイルをドラッグ＆ドロップする</h3>
    <h3>10. 音声を確認したい行をクリックする</h3>

  </v-container>
</template>
