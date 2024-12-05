import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqData = [
    {
      question: "入場投票資訊",
      answer: `投票截止時間為12/7 14:00。請記得在時間內投下你心目中最喜歡＆最有創意的組別！

本次專題分為五大類：
• 軟體開發
• 虛擬實境
• 產品設計
• 教育導向
• 人資桌遊

您可以在各類組各蓋1個章。收集完5種章後，可以到互動區使用BenQ大屏或手機進行拼圖遊戲，完成後即可兌換限量紀念品。

別忘了將抽獎聯放入抽獎箱內！抽獎將在12/7 15:30開始，需要本人在現場才能參與抽獎喔！`
    },
    {
      question: "如何參與桃花留言樹活動？",
      answer: "我們歡迎您在桃花留言樹上留下想對我們說的話！這是一個特別的互動區域，您可以分享您的感想和祝福。"
    },
    {
      question: "如何取得專刊？",
      answer: "實體專刊數量有限，但我們提供電子版本！您可以掃描現場的QR code來查看電子版專刊。"
    },
    {
      question: "場地指引",
      answer: `• 場地地圖位置：入門右手邊牆上以及入口走到底
• 廁所位置：現場有明確指標指引
• 如果您想參觀特定組別的展覽，可以參考場地地圖找到相應位置或詢問在場協助的同學`
    }
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">常見問題</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{item.question}</h3>
            <div className="faq-answer">
              {item.answer.split('\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="faq-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
