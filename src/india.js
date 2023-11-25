const 本地存储 = localStorage;
const 视窗 = window;
const 文档 = document;
const 如何做爱元素 = document.documentElement;
const 头元素 = 文档.head;
const 新建元素 = (名) => 文档.createElement(名);
const 新建图 = (_) => new Image();
const 添加事件监控 = (元素, 事件, 回调) => (元素[`on${事件}`] = 回调); // 元素.addEventListener(事件,回调);
const 获取元素方位 = (元素) => 元素.getBoundingClientRect();
const messages = {
  English: {
    message: {
      data_level_5: "Lived Here",
      data_level_4: "Stayed Here",
      data_level_3: "Visited Here",
      data_level_2: "Stopped Here",
      data_level_1: "Passed Here",
      data_level_0_alt: "Want to be Here",
      data_level_0: "Never Been Here",
      pt: "pt | pts",
    },
    country_name: {
      AndhraPradesh: "Andhra Pradesh",
      ArunachalPradesh: "Arunachal Pradesh",
      Assam: "Assam",
      Bihar: "Bihar",
      Chhattisgarh: "Chhattisgarh",
      Goa: "Goa",
      Gujarat: "Gujarat",
      Haryana: "Haryana",
      HimachalPradesh: "Himachal Pradesh",
      Jharkhand: "Jharkhand",
      Karnataka: "Karnataka",
      Kerala: "Kerala",
      MadhyaPradesh: "Madhya Pradesh",
      Maharashtra: "Maharashtra",
      Manipur: "Manipur",
      Meghalaya: "Meghalaya",
      Mizoram: "Mizoram",
      Nagaland: "Nagaland",
      Odisha: "Odisha",
      Punjab: "Punjab",
      Rajasthan: "Rajasthan",
      Sikkim: "Sikkim",
      TamilNadu: "Tamil Nadu",
      Telangana: "Telangana",
      Tripura: "Tripura",
      Uttarakhand: "Uttarakhand",
      UttarPradesh: "Uttar Pradesh",
      WestBengal: "West Bengal",
      AndamanandNicobarIslands: "Andaman and Nicobar Islands",
      Chandigarh: "Chandigarh",
      DadraandNagarHaveli: "Dadra and Nagar Haveli and Daman and Diu",
      DamanAndDiu: "Daman and Diu",
      Delhi: "Delhi",
      JammuAndKashmir: "Jammu and Kashmir",
      Ladakh: "Ladakh",
      Lakshadweep: "Lakshadweep",
      Puducherry: "Puducherry",
    },
  },
};
const i18n = VueI18n.createI18n({
  locale: "English",
  fallbackLocale: "English",
  messages,
});
const app1 = Vue.createApp().use(i18n).mount("#Layer_4");
const app2 = Vue.createApp().use(i18n).mount("#设置等级");
const app3 = Vue.createApp().use(i18n).mount("#Texts");

const 颜色 = [
  "#F9CDC7",
  "#C5F9CB",
  "#CDE8F4",
  "#FDE8C4",
  "#D0DCD7",
  "#E1CEF5",
  "#D6D6D6",
];
const 颜色_randomizer = Math.floor(Math.random() * 7);
如何做爱元素.style.backgroundColor = 颜色[颜色_randomizer];
添加事件监控(如何做爱元素, "click", (e) => {
  if (e.target == 文档.body) {
    const 颜色a = Math.floor(Math.random() * 50) + 176;
    const 颜色b = Math.floor(Math.random() * 50) + 176;
    const 颜色c = Math.floor(Math.random() * 50) + 176;
    如何做爱元素.style.backgroundColor =
      "#" + 颜色a.toString(16) + 颜色b.toString(16) + 颜色c.toString(16);
  }
});

const 设置等级标题 = 设置等级.children[0];

const 全关闭 = (_) => {
  设置等级样式.display = "";
  设置语言样式.display = "";
};
const 数据 = {};
const 获取所有省元素们 = (_) => [...地区.children];
const 获取所有省等级们 = (_) =>
  获取所有省元素们().map((el) => +el.getAttribute("level") || 0);
const 本地存储等级们钥匙 = "us-levels";
const 保存等级们 = (_) => {
  let 本地存储value = "";
  for (const 省元素 of 获取所有省元素们()) {
    if (省元素.getAttribute("alt") == "true") {
      本地存储value += "-";
    } else 本地存储value += 省元素.getAttribute("level") || 0;
  }
  本地存储.setItem(本地存储等级们钥匙, 本地存储value);
};
const 省等级们正则 = /^[\d|-]{56}$/;
const 获取等级们并生效 = (_) => {
  const 等级们字串 = 本地存储.getItem(本地存储等级们钥匙);
  if (!省等级们正则.test(等级们字串)) return;
  const 等级们 = 等级们字串.split("");
  获取所有省元素们().forEach((元素, 下标) => {
    元素.setAttribute("level", 等级们[下标] == "-" ? "0" : 等级们[下标]);
    if (等级们[下标] == "-") 元素.setAttribute("alt", true);
  });
};
const 图形 = 文档.querySelector("svg");
const 设置等级样式 = 设置等级.style;
const 最小间距 = 6;
添加事件监控(图形, "click", (e) => {
  e.stopPropagation();

  const { target: 省元素 } = e;
  const 省元素方位 = 获取元素方位(省元素);
  const { id } = 省元素;
  数据.省元素 = 省元素;
  数据.id = id;

  设置等级标题.innerHTML = messages[Lang.textContent].country_name[id];
  设置等级样式.display = "block";
  const 设置等级元素方位 = 获取元素方位(设置等级);

  let 左 = Math.round(
    省元素方位.left + 省元素方位.width / 2 - 设置等级元素方位.width / 2
  );
  左 = Math.min(
    左,
    document.body.offsetWidth - 设置等级元素方位.width - 最小间距
  );
  左 = Math.max(左, 最小间距);

  let 上 = Math.round(
    省元素方位.top + 省元素方位.height / 2 - 设置等级元素方位.height / 2
  );
  上 = Math.min(
    上,
    document.body.offsetHeight - 设置等级元素方位.height - 最小间距
  );
  上 = Math.max(上, 最小间距);

  设置等级样式.left = 左 + "px";
  设置等级样式.top = 上 + "px";
});
添加事件监控(文档, "click", 全关闭);
const 计分 = (_) => {
  const 分 = 获取所有省等级们().reduce((全, 当前) => {
    return +全 + 当前;
  }, 0);
  Total.innerHTML = `India Level ${分}`;
  webtitle.innerHTML = `India Level ${分}`;
};
添加事件监控(设置等级, "click", (e) => {
  e.stopPropagation();
  const 等级 = e.target.getAttribute("data-level");
  if (!等级) return false;
  数据.省元素.setAttribute("level", 等级);
  const alt = e.target.hasAttribute("alt");
  if (alt) 数据.省元素.setAttribute("alt", true);
  else 数据.省元素.setAttribute("alt", false);
  全关闭();
  计分();
  保存等级们();
});
添加事件监控(Reset, "click", (e) => {
  获取所有省元素们().forEach((元素, 下标) => {
    元素.setAttribute("level", "0");
    元素.setAttribute("alt", false);
    if (元素.nodeName == "g") {
      for (const child of 元素.children) {
        child.setAttribute("level", "0");
        child.setAttribute("alt", false);
      }
    }
  });
  全关闭();
  计分();
  保存等级们();
});

const 语言 = 文档.querySelector("#Lang");
const 设置语言样式 = Set_Lang.style;
添加事件监控(语言, "click", (e) => {
  全关闭();
  e.stopPropagation();

  设置语言样式.display = "block";
  const 设置语言方位 = 获取元素方位(Set_Lang);
  const 按钮方位 = 获取元素方位(语言);
  const 当前语言 = Lang.textContent;
  for (const child of Set_Lang.children) {
    if (child.getAttribute("lang") == 当前语言) {
      child.style.background = "#aaa";
    } else {
      child.style.background = "#fff";
    }
  }

  let 左 = Math.round(
    按钮方位.left + 按钮方位.width / 2 - 设置语言方位.width / 2
  );
  左 = Math.min(左, document.body.offsetWidth - 设置语言方位.width - 最小间距);
  左 = Math.max(左, 最小间距);

  let 上 = Math.round(按钮方位.top - 设置语言方位.height - 最小间距);
  上 = Math.min(
    上,
    document.body.offsetHeight - 设置语言方位.height - 最小间距
  );
  上 = Math.max(上, 最小间距);

  设置语言样式.left = 左 + "px";
  设置语言样式.top = 上 + "px";
});
const 更改语言 = (新语言) => {
  i18n.global.locale = 新语言;
};
添加事件监控(Set_Lang, "click", (e) => {
  e.stopPropagation();
  const 语言 = e.target.getAttribute("lang");
  if (!语言) return false;
  Lang.textContent = 语言;
  全关闭();
  更改语言(语言);
});

获取等级们并生效();
计分();

const 读文件成地址 = (原始数据, 回调) => {
  const 读 = new FileReader();
  读.onload = (e) => 回调(e.target.result);
  读.readAsDataURL(原始数据);
};
const 获取字体数据地址 = (地址, 回调) => {
  fetch(地址)
    .then((r) => r.blob())
    .then((原始数据) => 读文件成地址(原始数据, 回调));
};
const 获取字体样式 = (字体名, 回调) => {
  获取字体数据地址(`${字体名}.woff?v=9`, (地址) =>
    回调(`@font-face {
        font-family: ${字体名};
        src: url(${地址});
    };`)
  );
};
获取字体样式("slice", (样式字串) => {
  图形.querySelector("style").innerHTML = 样式字串;
  const 样式元素 = 新建元素("style");
  样式元素.innerHTML = 样式字串;
  头元素.appendChild(样式元素);
  setTimeout((_) => 如何做爱元素.removeAttribute("data-loading"), 2e3);
});

const 宽 = 1150;
const 高 = 920;
const 比 = 2;

const 画板 = 新建元素("canvas");

画板.width = 宽 * 比;
画板.height = 宽 * 比;

const 上下文 = 画板.getContext("2d");

const 从文档文本新建图形文件 = (文档文本) => {
  const 原始数据 = new Blob([文档文本], { type: "image/svg+xml" });
  return URL.createObjectURL(原始数据);
};
const 是社交媒体 = /weibo|qq/i.test(navigator.userAgent);
// alert(navigator.userAgent)
const 下载文件 = (链接, 文件名, 元素 = 新建元素("a")) => {
  if (!是社交媒体) {
    元素.download = 文件名;
  }
  元素.href = 链接;
  元素.click();
};
const 地址变图像元素 = (地址, 回调) => {
  const 图 = 新建图();
  添加事件监控(图, "load", (_) => 回调(图));
  图.src = 地址;
};

const 保存图像 = (_) => {
  const 文档文本 = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${宽} ${高}" width="${宽}px" height="${高}px">${图形.innerHTML}</svg>`;
  const 数据地址 = 从文档文本新建图形文件(文档文本);
  地址变图像元素(数据地址, (图) => {
    上下文.fillStyle = 如何做爱元素.style.backgroundColor; //'#b4b4ef';
    上下文.fillRect(0, 0, 宽 * 比, 宽 * 比);
    上下文.drawImage(
      图,
      0,
      0,
      宽,
      高,
      0,
      ((宽 - 高) * 比) / 2,
      宽 * 比,
      高 * 比
    );
    画板.toBlob((元素数据) => {
      const 地址 = URL.createObjectURL(元素数据);
      下载文件(地址, `US Level 0.png`);

      输出图像.style.display = "";
      输出图像.querySelector("img").src = 地址;
    }, "image/png");
  });
};

添加事件监控(保存, "click", 保存图像);

const shareImage = (_) => {
  const 文档文本 = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${宽} ${高}" width="${宽}px" height="${高}px">${图形.innerHTML}</svg>`;
  const 数据地址 = 从文档文本新建图形文件(文档文本);
  地址变图像元素(数据地址, (图) => {
    上下文.fillStyle = 如何做爱元素.style.backgroundColor; //'#b4b4ef';
    上下文.fillRect(0, 0, 宽 * 比, 宽 * 比);
    上下文.drawImage(
      图,
      0,
      0,
      宽,
      高,
      0,
      ((宽 - 高) * 比) / 2,
      宽 * 比,
      高 * 比
    );
    画板.toBlob((元素数据) => {
      const 地址 = URL.createObjectURL(元素数据);
      console.log("URL", 地址);
      Navigator.share({
        title: "India Level",
        text: "India Level",
        url: 地址,
      });

      输出图像.style.display = "";
      输出图像.querySelector("img").src = 地址;
    }, "image/png");
  });
};

const shareButton = document.querySelector("#share");

shareButton.addEventListener("click", (_) => {
  console.log("share");
  shareImage();
});

添加事件监控(输出图像.querySelector("a"), "click", (_) => {
  输出图像.style.display = "none";
});
