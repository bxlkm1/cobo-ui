const SecretCode = {
  frontPage: {
    header: '备份钱包助记词',
    subTitle: '助记词即为私钥，它是掌管您资产的钥匙',
    descriptions: [
      '由12个字符组成，请抄写并保管在安全的地方。',
      '100%由您掌管，一经丢失，无法找回。',
      '请在收币或卸载之前，务必完成助记词备份。',
    ],
    button: '立即备份',
    secondButton: '我先看看，稍后再说',
  },

  codePage: {
    header: '请抄写 Cobo 助记词',
    descriptions: [
      'Cobo 助记词用于恢复钱包，请按照顺序将下方的 12 个单词抄写到纸上，并保存到安全的地方。',
      '请勿截图！如果有人获取你的 Cobo 助记词将直接获取你的资产！',
    ],
    button: '我已安全保存',
  },

  confirmPage: {
    header: '请确认 Cobo 助记词',
    descriptions: ['为了确保您已将 Cobo 助记词正确得抄写，请选择对应序号的单词。'],
    buttonNormal: '下一步',
    buttonLast: '完成',
  },

  backupPage: {
    header: '请确认 Cobo 密语',
    descriptions: ['为了确保您已将 Cobo 助记词正确抄写，请按照对应的顺序点击助记词。'],
    finish: '完成',
    error: '选择的助记词不正确，请重新选择',
  },

  modal: {
    header: '请环顾四周',
    description: '任何人获得了助记词，意味着获取了您的资产，请确保周围无人，无摄像头。',
    button: '知道了',
  },
};
export default SecretCode;
