import React from 'react';
import { useParams } from 'react-router-dom';
import './Articlepage.css';
import Lottie from "lottie-react";
import corgi from "./assets/a.json";
import cat from "./assets/b.json";

const ArticlePage = () => {
  const article = {
    id: 1,
    title: '貓狗行為解密：洞察相似與差異'
  };

  const params = useParams();
  const { id } = params;

  return (
    <div className="article-container">
      <div style={{ display: 'inline-flex' }}>
        <span> <Lottie style={{ height:"200px"}} animationData={cat}/></span>
        <p style={{  fontSize: "50px"}}> {article.title}</p>
        <span><Lottie style={{ height: "200px" }} animationData={corgi} loop={true} /></span>
      </div>

      <div className="article-content">
        <h2>導言</h2>
        <p>貓狗是人類最親密的寵物伴侶，我們與牠們共度歡樂時光，分享生活點滴。然而，貓狗之間的行為差異常常引發我們的好奇心，究竟是什麼造就了牠們的獨特性？在本文中，我們將深入探索貓狗行為的奧秘，探討牠們的相似之處和獨特之處，帶您進入一段有趣且充滿啟發的探索之旅。</p>
        <h2>段落一：行為的背後—進化和家庭環境</h2>
        <p>貓和狗的行為特點既有共通之處，也存在顯著差異。這些行為的背後是牠們的進化歷史和家庭環境的影響。貓在野外獨立生活，保留了許多獵食者的本能，如捕捉獵物和保護自己的領地。相比之下，狗作為狼的後代，具有群體合作和社會化的特點，並且經過長時間的馴化與人類建立了緊密的互動關係。</p>
        <h2>段落二：溝通方式—語言和身體語言</h2>
        <p>貓和狗之間的溝通方式有很多相似之處，例如使用聲音、身體姿勢和面部表情來傳達訊息。然而，每種動物也有自己獨特的方式來表達情緒和意圖。貓會用尾巴的姿勢、耳朵的動作以及不同的嗥叫聲表達自己的需求和情緒，而狗則透過舔嘴唇、舉起前腳或低吼等行為來傳達訊息。</p>
        <h2>段落三：遊戲和社交行為</h2>
        <p>貓和狗的遊戲和社交行為也呈現出一些不同。貓通常喜歡獨自玩耍，並以獵捕遊戲鍛鍊自己的狩獵技能。而狗則喜歡與人和其他狗互動，喜歡追逐球或玩具，並透過遊戲來建立社交關係。這些差異反映了牠們在進化過程中所形成的不同需求和行為模式。</p>
        <h2>結論</h2>
        <p>通過探索貓狗行為的相似與差異，我們可以更深入地了解這兩種動物的本質和需求。貓狗的行為是進化和家庭環境的結果，其溝通方式、遊戲和社交行為都有其獨特之處。這種了解不僅可以幫助我們更好地與貓狗相處，還可以為牠們提供更適合的照顧和培養環境。讓我們一同愛護、研究和欣賞這些迷人的生物，共同建立一個更和諧、關愛的人與寵物的共生社區。</p>
        <p>希望這篇文章能為您的部落格帶來啟發和增加讀者對於貓狗行為的興趣。如有需要，您可以根據自己的風格和需求對文中的內容進行修改和擴充。祝您的部落格取得成功！</p>
      </div>
    </div>
  );
};

export default ArticlePage;
