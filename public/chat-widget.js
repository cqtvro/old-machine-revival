(function () {
  const API_URL = "https://wx.284868.xyz/api/chat";
  const ADMIN_WECHAT = "wxcq888";

  // 防止重复初始化
  if (document.getElementById("qms-chat-widget")) return;

  // 1. 创建悬浮球与聊天窗口 DOM
  const widgetContainer = document.createElement("div");
  widgetContainer.id = "qms-chat-widget";
  widgetContainer.innerHTML = `
    <style>
      #qms-chat-btn {
        position: fixed;
        bottom: 90px;
        right: 28px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: linear-gradient(135deg, #0a192f 0%, #172a45 50%, #203a43 100%);
        border: 2px solid #00d2ff;
        box-shadow: 0 4px 18px rgba(0, 210, 255, 0.45);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999990;
        transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease;
      }
      #qms-chat-btn:hover {
        transform: scale(1.08) translateY(-2px);
        box-shadow: 0 6px 24px rgba(0, 210, 255, 0.65);
      }
      #qms-chat-btn svg {
        width: 28px;
        height: 28px;
        fill: #00d2ff;
      }
      #qms-chat-badge {
        position: absolute;
        top: -4px;
        right: -4px;
        background: linear-gradient(90deg, #ff416c, #ff4b2b);
        color: #ffffff;
        font-size: 10px;
        font-weight: 700;
        padding: 2px 5px;
        border-radius: 10px;
        box-shadow: 0 2px 6px rgba(255, 65, 108, 0.5);
        letter-spacing: 0.5px;
        pointer-events: none;
      }

      /* 方案 A：左侧常驻呼吸浮动气泡 */
      #qms-chat-bubble {
        position: fixed;
        bottom: 97px;
        right: 94px;
        background: linear-gradient(135deg, rgba(10, 25, 47, 0.95), rgba(27, 42, 69, 0.95));
        border: 1.5px solid #00d2ff;
        border-radius: 20px;
        padding: 7px 14px 7px 12px;
        display: flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 4px 20px rgba(0, 210, 255, 0.35), 0 2px 8px rgba(0, 0, 0, 0.6);
        cursor: pointer;
        z-index: 999989;
        backdrop-filter: blur(8px);
        animation: qmsBubbleFloat 3s ease-in-out infinite;
        transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
        white-space: nowrap;
        user-select: none;
      }
      #qms-chat-bubble:hover {
        transform: scale(1.05) translateY(-2px);
        box-shadow: 0 6px 25px rgba(0, 210, 255, 0.6);
      }
      @keyframes qmsBubbleFloat {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      .qms-bubble-icon {
        font-size: 14px;
        animation: qmsSparkle 1.8s infinite alternate;
        display: inline-block;
      }
      @keyframes qmsSparkle {
        from { transform: scale(0.9) rotate(-5deg); opacity: 0.8; }
        to { transform: scale(1.15) rotate(5deg); opacity: 1; }
      }
      .qms-bubble-text {
        color: #ffffff;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.4px;
        background: linear-gradient(90deg, #ffffff, #7dd3fc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .qms-bubble-arrow {
        position: absolute;
        right: -6px;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        width: 10px;
        height: 10px;
        background: #1b2a45;
        border-right: 1.5px solid #00d2ff;
        border-top: 1.5px solid #00d2ff;
      }

      #qms-chat-box {
        position: fixed;
        bottom: 155px;
        right: 28px;
        width: 370px;
        height: 520px;
        max-height: 80vh;
        background: #0d1217;
        border: 1px solid #1f2d3d;
        border-radius: 16px;
        box-shadow: 0 12px 40px rgba(0,0,0,0.65), 0 0 20px rgba(0, 210, 255, 0.15);
        display: none;
        flex-direction: column;
        overflow: hidden;
        z-index: 999991;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
        animation: qmsFadeIn 0.25s ease-out;
      }
      @keyframes qmsFadeIn {
        from { opacity: 0; transform: translateY(12px) scale(0.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      #qms-chat-header {
        background: linear-gradient(135deg, #131c27, #1b2636);
        padding: 14px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #233348;
      }
      #qms-chat-header .title-area {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      #qms-chat-header .title-avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: rgba(0, 210, 255, 0.15);
        border: 1px solid #00d2ff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
      }
      #qms-chat-header .title-text {
        display: flex;
        flex-direction: column;
      }
      #qms-chat-header .title-text h4 {
        margin: 0;
        color: #e2e8f0;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.2;
      }
      #qms-chat-header .title-text span {
        font-size: 11px;
        color: #10b981;
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 2px;
      }
      #qms-chat-header .title-text span::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #10b981;
        display: inline-block;
      }
      #qms-chat-header .close-btn {
        color: #94a3b8;
        font-size: 22px;
        cursor: pointer;
        line-height: 1;
        padding: 2px 6px;
        border-radius: 4px;
        transition: color 0.2s, background 0.2s;
      }
      #qms-chat-header .close-btn:hover {
        color: #ffffff;
        background: rgba(255,255,255,0.1);
      }
      #qms-chat-body {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
        font-size: 13.5px;
        background: #090d12;
      }
      .qms-msg {
        max-width: 86%;
        padding: 10px 14px;
        border-radius: 12px;
        line-height: 1.55;
        word-break: break-word;
        white-space: pre-wrap;
      }
      .qms-msg-bot {
        align-self: flex-start;
        background: #16202c;
        color: #cbd5e1;
        border-bottom-left-radius: 2px;
        border: 1px solid #233348;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      }
      .qms-msg-user {
        align-self: flex-end;
        background: linear-gradient(135deg, #0284c7, #0369a1);
        color: #ffffff;
        border-bottom-right-radius: 2px;
        box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);
      }
      .qms-wechat-highlight {
        display: inline-block;
        background: rgba(0, 210, 255, 0.15);
        border: 1px solid #00d2ff;
        color: #00d2ff;
        padding: 1px 6px;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
        user-select: all;
      }
      .qms-quick-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 6px;
      }
      .qms-tag-btn {
        background: rgba(0, 210, 255, 0.08);
        border: 1px solid rgba(0, 210, 255, 0.25);
        color: #38bdf8;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 11.5px;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .qms-tag-btn:hover {
        background: rgba(0, 210, 255, 0.2);
        border-color: #00d2ff;
        color: #ffffff;
      }
      #qms-chat-footer {
        padding: 10px 12px;
        background: #121820;
        display: flex;
        gap: 8px;
        border-top: 1px solid #1f2d3d;
      }
      #qms-chat-input {
        flex: 1;
        background: #090d12;
        border: 1px solid #233348;
        border-radius: 8px;
        padding: 9px 12px;
        color: #e2e8f0;
        outline: none;
        font-size: 13.5px;
        transition: border-color 0.2s;
      }
      #qms-chat-input:focus {
        border-color: #00d2ff;
      }
      #qms-chat-send {
        background: linear-gradient(135deg, #00d2ff, #0284c7);
        color: #05131f;
        font-weight: 700;
        border: none;
        border-radius: 8px;
        padding: 0 16px;
        cursor: pointer;
        font-size: 13.5px;
        transition: opacity 0.2s, transform 0.1s;
      }
      #qms-chat-send:active {
        transform: scale(0.96);
      }
      #qms-chat-send:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      @media (max-width: 768px) {
        #qms-chat-btn {
          bottom: 92px;
          right: 20px;
          width: 50px;
          height: 50px;
        }
        #qms-chat-bubble {
          bottom: 98px;
          right: 78px;
          padding: 6px 12px 6px 10px;
        }
        .qms-bubble-text {
          font-size: 12px;
        }
        #qms-chat-box {
          width: calc(100vw - 32px);
          right: 16px;
          bottom: 85px;
          height: 72vh;
        }
      }
      @media (max-width: 380px) {
        #qms-chat-bubble {
          display: none;
        }
      }
    </style>

    <!-- 方案 A：左侧呼吸气泡 -->
    <div id="qms-chat-bubble" title="点击咨询七木数播 AI 顾问">
      <span class="qms-bubble-icon">✨</span>
      <span class="qms-bubble-text">没有人比我更懂数播</span>
      <div class="qms-bubble-arrow"></div>
    </div>

    <!-- 悬浮图标 -->
    <div id="qms-chat-btn" title="七木数播 AI 官方顾问">
      <span id="qms-chat-badge">AI</span>
      <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
    </div>

    <!-- 聊天主窗口 -->
    <div id="qms-chat-box">
      <div id="qms-chat-header">
        <div class="title-area">
          <div class="title-avatar">🤖</div>
          <div class="title-text">
            <h4>七木数播 AI 官方顾问</h4>
            <span>在线解答 · 极速响应</span>
          </div>
        </div>
        <div class="close-btn" id="qms-chat-close">&times;</div>
      </div>
      <div id="qms-chat-body">
        <div class="qms-msg qms-msg-bot">
您好！我是七木数播官方 AI 顾问。
无论您是咨询 <strong>QMS 纯内存发烧系统</strong>、<strong>七木达菲系统</strong>、<strong>10月8日前限时 99 元早鸟特惠</strong>，还是遇到硬件播放与网络共享疑问，都可以直接向我提问！😊
        </div>
        <div class="qms-quick-tags" id="qms-quick-tags">
          <button class="qms-tag-btn" data-query="QMS系统和达菲有什么区别？">QMS 与 达菲区别</button>
          <button class="qms-tag-btn" data-query="99元早鸟优惠活动怎么参加？">99元早鸟优惠</button>
          <button class="qms-tag-btn" data-query="老电脑如何安装七木数播系统？">老电脑安装支持</button>
          <button class="qms-tag-btn" data-query="人工客服微信是多少？">人工客服微信</button>
        </div>
      </div>
      <div id="qms-chat-footer">
        <input type="text" id="qms-chat-input" placeholder="输入您想咨询的技术或优惠问题..." />
        <button id="qms-chat-send">发送</button>
      </div>
    </div>
  `;
  document.body.appendChild(widgetContainer);

  const chatBtn = document.getElementById("qms-chat-btn");
  const chatBubble = document.getElementById("qms-chat-bubble");
  const chatBox = document.getElementById("qms-chat-box");
  const closeBtn = document.getElementById("qms-chat-close");
  const chatBody = document.getElementById("qms-chat-body");
  const inputEl = document.getElementById("qms-chat-input");
  const sendBtn = document.getElementById("qms-chat-send");
  const quickTags = document.getElementById("qms-quick-tags");

  function toggleChat() {
    const isVisible = chatBox.style.display === "flex";
    if (isVisible) {
      chatBox.style.display = "none";
      if (chatBubble) chatBubble.style.display = "flex";
    } else {
      chatBox.style.display = "flex";
      if (chatBubble) chatBubble.style.display = "none";
      inputEl.focus();
    }
  }

  chatBtn.onclick = toggleChat;
  if (chatBubble) {
    chatBubble.onclick = toggleChat;
  }

  closeBtn.onclick = () => {
    chatBox.style.display = "none";
    if (chatBubble) chatBubble.style.display = "flex";
  };

  // 快捷问题点击
  if (quickTags) {
    quickTags.addEventListener("click", (e) => {
      const btn = e.target.closest(".qms-tag-btn");
      if (btn) {
        const query = btn.getAttribute("data-query");
        inputEl.value = query;
        handleSend();
      }
    });
  }

  async function handleSend() {
    const text = inputEl.value.trim();
    if (!text) return;

    // 添加用户气泡
    appendMsg(text, "user");
    inputEl.value = "";
    sendBtn.disabled = true;

    // 组织加载态
    const loadingId = appendMsg("正在组织专业解答...", "bot", true);

    try {
      const resp = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, user_id: "web_guest" })
      });
      const data = await resp.json();
      removeLoading(loadingId);
      
      const reply = data.reply || `抱歉，技术顾问走神了。请直接添加站长微信咨询：${ADMIN_WECHAT}`;
      appendMsg(reply, "bot");
    } catch (e) {
      removeLoading(loadingId);
      appendMsg(`网络连接异常，如需加急咨询请直接添加微信：${ADMIN_WECHAT}`, "bot");
    } finally {
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  function appendMsg(text, sender, isLoading = false) {
    const msg = document.createElement("div");
    msg.className = `qms-msg qms-msg-${sender}`;
    if (isLoading) {
      msg.id = "qms-loading-msg";
      msg.textContent = text;
    } else {
      // 自动高亮识别微信号 wxcq888 并添加点击复制事件
      const safeText = escapeHtml(text);
      const formatted = safeText.replace(/wxcq888/g, `<span class="qms-wechat-highlight" title="点击复制微信号" onclick="navigator.clipboard.writeText('wxcq888');alert('微信号 wxcq888 已复制！');">wxcq888 (点击复制)</span>`);
      msg.innerHTML = formatted;
    }
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
    return msg.id;
  }

  function removeLoading(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  sendBtn.onclick = handleSend;
  inputEl.onkeydown = (e) => {
    if (e.key === "Enter") handleSend();
  };
})();
