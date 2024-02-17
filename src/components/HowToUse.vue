<script setup lang="ts">
import screenshot2 from '@/assets/images/screenshot2.png'
import screenshot3a from '@/assets/images/screenshot3a.png'
import screenshot3b from '@/assets/images/screenshot3b.png'
import screenshot4a from '@/assets/images/screenshot4a.png'
import screenshot4b from '@/assets/images/screenshot4b.png'
import screenshot4c from '@/assets/images/screenshot4c.png'
import screenshot5a from '@/assets/images/screenshot5a.png'
import screenshot5b from '@/assets/images/screenshot5b.png'
import screenshot6 from '@/assets/images/screenshot6.png'
import screenshot7 from '@/assets/images/screenshot7.png'
const colabUrl =
  'https://colab.research.google.com/github/tatsuya0903/whisper-result-viewer/blob/main/文字起こしツール.ipynb'
</script>

<template>
  <div>
    <h2>使い方</h2>
    <br />

    <h3>1. 文字起こしツールをGoogle Colaboratoryで開く</h3>
    <a :href="colabUrl" target="_blank">
      <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" />
    </a>
    <br />
    <br />

    <h3>2. 左端のファイルアイコンをクリックする</h3>
    <v-img :src="screenshot2" />
    <br />

    <h3>3. 音声ファイル(mp3,movなど)をドラッグ＆ドロップする</h3>
    <v-img :src="screenshot3a" />
    <br />
    <div>アップロード中の表示</div>
    <div>※結構時間かかる(100MBのファイルで5分〜10分くらい)</div>
    <v-img :src="screenshot3b" />
    <br />

    <h3>4. １つ目の再生ボタンをクリックする</h3>
    <v-img :src="screenshot4a" />
    <br />
    ※警告が表示される場合あり。<br />プログラムの内容に問題がない場合は「このまま実行」をクリックする
    <v-img :src="screenshot4b" />
    <br />
    <div>最後に「Successfully」と表示されたいればOK</div>
    <v-img :src="screenshot4c" />
    <br />

    <h3>5. ２つ目の再生ボタンをクリックする</h3>
    <v-img :src="screenshot5a" />
    <br />
    <div>
      実行が終わるまで、ブラウザを表示したままで待機する<br />※結構時間かかる(60分の音声ファイルで20分くらい)
    </div>
    <div>実行中の画面例</div>
    <v-img :src="screenshot5b" />
    <br />

    <!--    <div>実行完了時のアラート設定のポップアップが表示されたら、OKをクリックしておくと便利</div>-->

    <h3>6. 実行が終わったら、ファイル一覧を更新する</h3>
    <v-img :src="screenshot6" />
    <br />

    <h3>7. 生成された「音声ファイル名_文字起こし結果.json」ファイルをダウンロードする</h3>
    <v-img :src="screenshot7" />
    <br />

    <h3>8. 音声ファイルと結果ファイルをドラッグ＆ドロップする</h3>
  </div>
</template>

<style lang="scss" scoped></style>
