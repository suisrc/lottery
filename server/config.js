/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 50,
    title: "荣耀蓝牙耳机",
    text: "幸运奖",
    img: "../img/0.png"
  },
  {
    type: 1,
    count: 1,
    text: "总经理特别奖",
    title: "荣耀MagicV手机",
    img: "../img/1.png"
  },
  {
    type: 2,
    count: 2,
    text: "特等奖",
    title: "荣耀Magic3至臻版手机",
    img: "../img/2.png"
  },
  {
    type: 3,
    count: 5,
    text: "一等奖",
    title: "荣耀平板V7 Pro WIFI 11英寸pad",
    img: "../img/3.png"
  },
  {
    type: 4,
    count: 10,
    text: "二等奖",
    title: "机械键盘",
    img: "../img/4.png"
  },
  {
    type: 5,
    count: 15,
    text: "三等奖",
    title: "罗技鼠标",
    img: "../img/5.png"
  },
  {
    type: 6,
    count: 50,
    text: "幸运奖",
    title: "荣耀手环",
    img: "../img/6.png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [10, 1, 2, 5, 5, 5, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "ThunderSoft";

const Lcc = true;

module.exports = {
  Lcc,
  prizes,
  EACH_COUNT,
  COMPANY
};
