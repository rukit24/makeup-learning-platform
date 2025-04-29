// /components/MessengerChat.js
"use client";

import { useEffect } from "react";

export default function MessengerChat() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v18.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="1851922904818709"
        theme_color="#ffd700"
        logged_in_greeting="Xin chào! Phương Quỳnh Makeup hỗ trợ bạn ngay đây."
        logged_out_greeting="Xin chào! Hãy đăng nhập Messenger để chat cùng Phương Quỳnh nhé!"
      ></div>
    </div>
  );
}
