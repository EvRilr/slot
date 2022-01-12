// Get all the images
image_array = [
  '01.雞蛋豆漿-01.png',
  '02.蛋麻油-01-01.png',
  '03.雞蛋鴨肉-01.png',
  '04.蛋汁鹽巴-01.png',
  '05.雞蛋韭菜-01.png',
  '06.豆漿茶-01.png',
  '07.蝦仁腰果-01.png',
  '08.生魚片米酒-01.png',
  '09.芹菜魷魚-01.png',
  '10.黃魚洋蔥-01.png',
  '11.蛤蜊芹菜-01.png',
  '12.蝦維他命C-01.png',
  '13.蝦洋蔥-01.png',
  '14.螃蟹柿子-01.png',
  '15.干貝火腿-01.png',
  '16.蛋白質茶-01.png',
  '17.牛肉馬鈴薯-01.png',
  '18.牛肉栗子-01.png',
  '19.牛肉茶-01.png',
  '20.雞湯竹筍-01.png',
  '21.豬肉生醃蛤蜊-01.png',
  '22.羊肉南瓜-01.png',
  '23.羊肉醋-01.png',
  '24.鵝肉蘋果-01.png',
  '25.香腸養樂多-01.png',
  '26.香腸臘肉-01.png',
  '27.火腿硬起司-01.png',
  '28.熱狗香蕉-01.png',
  '29.韭菜豬肝-01.png',
  '30.酒胡蘿蔔-01.png',
  '31.醋芋頭-01.png',
  '32.蘆筍干貝-01.png',
  '33.空心菜乳製品-01.png',
  '34.紫甘藍甜椒-01.png',
  '35.蘆薈綠茶-01.png',
  '36.番茄小黃瓜-01.png',
  '37.木耳螺肉-01.png',
  '38.苦瓜豆豉-01.png',
  '39.海帶茶-01.png',
  '40.糙米綠豆-01.png',
  '41.花生牡蠣-01.png',
  '42.蓮子花生-01.png',
  '43.糙米紫甘藍-01.png',
  '44.桑椹韭菜-01.png',
  '45.蘿蔔胡蘿蔔-01.png',
  '46.紅棗蔥-01.png',
  '47.蜂蜜蔥-01.png',
  '48.豆腐菠菜-01.png',
  '49.雞蛋香樁-01.png',
  '50.牛奶草莓-01.png',
  '51.奇異果牛奶-01.png',
  '52.蘋果茶-01.png',
  '53.橘子蘿蔔-01.png',
  '54.榴蓮荔枝-01.png',
  '55.奇異果香蕉-01.png',
  '56.楊桃葡萄柚-01.png',
  '57.優酪乳火腿-01.png',
  '58.牛奶巧克力-01.png',
  '59.咖啡牛奶-01.png',
  '60.可樂豆腐-01.png',
  '61.乳酪咖啡-01.png',
  '62.紫米茶-01.png',
  '63.蘿蔔蘋果-01.png',
  '64.鳳梨雞蛋-01.png',
  '65.柿子優酪乳-01.png',
  '66.木瓜蝦子-01.png',
  '67.桃子西瓜-01.png',
  '68.優酪乳柚子-01.png',
  '69.茶鮮奶-01.png',
  '70.蜂蜜檸檬-01.png'
]

function get_random_text(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
    if(selected_image =="01.雞蛋豆漿-01.png"){
        document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/01.雞蛋豆漿詩-01.png`
    }
    if(selected_image =="02.蛋麻油-01-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/02雞蛋麻油詩-01.png`
    }
    if(selected_image =="03.雞蛋鴨肉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/03.雞蛋鴨肉詩-01.png`
    }
    if(selected_image =="04.蛋汁鹽巴-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/04.蛋汁鹽巴詩-01.png`
    }
    if(selected_image =="05.雞蛋韭菜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/05.雞蛋韭菜詩-01.png`
    }
    if(selected_image =="06.豆漿茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/06.豆漿茶詩-01.png`
    }
    if(selected_image =="07.蝦仁腰果-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/07.蝦仁腰果詩-01.png`
    }
    if(selected_image =="08.生魚片米酒-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/08.生魚片米酒詩-01.png`
    }
    if(selected_image =="09.芹菜魷魚-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/09.魷魚芹菜詩-01.png`
    }
    if(selected_image =="10.黃魚洋蔥-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/10.黃魚洋蔥詩-01.png`
    }
    if(selected_image =="11.蛤蜊芹菜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/11.蛤蜊芹菜詩-01.png`
    }
    if(selected_image =="12.蝦維他命C-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/12.蝦子維他命C詩-01.png`
    }
    if(selected_image =="13.蝦洋蔥-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/13.蝦子洋蔥詩-01.png`
    }
    if(selected_image =="14.螃蟹柿子-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/14.螃蟹柿子詩-01.png`
    }
    if(selected_image =="15.干貝火腿-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/15.干貝火腿詩-01.png`
    }
    if(selected_image =="16.蛋白質茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/16.蛋白質茶詩-01.png`
    }
    if(selected_image =="17.牛肉馬鈴薯-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/17.牛肉馬鈴薯詩-01.png`
    }
    if(selected_image =="18.牛肉栗子-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/18.牛肉栗子詩-01.png`
    }
    if(selected_image =="19.牛肉茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/19.牛肉茶詩-01.png`
    }
    if(selected_image =="20.雞湯竹筍-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/20.雞湯竹筍詩-01.png`
    }
    if(selected_image =="21.豬肉生醃蛤蜊-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/21.豬肉生醃蛤蜊詩-01.png`
    }
    if(selected_image =="22.羊肉南瓜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/22.羊肉南瓜詩-01.png`
    }
    if(selected_image =="23.羊肉醋-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/23.羊肉醋詩-01.png`
    }
    if(selected_image =="24.鵝肉蘋果-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/24.鵝肉蘋果詩-01.png`
    }
    if(selected_image =="25.香腸養樂多-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/25.香腸養樂多詩-01.png`
    }
    if(selected_image =="26.香腸臘肉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/26.香腸臘肉詩-01.png`
    }
    if(selected_image =="27.火腿硬起司-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/27.火腿硬起司詩-01.png`
    }
    if(selected_image =="28.熱狗香蕉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/28.熱狗香蕉詩-01.png`
    }
    if(selected_image =="29.韭菜豬肝-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/29.韭菜豬肝詩-01.png`
    }
    if(selected_image =="30.酒胡蘿蔔-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/30.酒胡蘿蔔詩-01.png`
    }
    if(selected_image =="31.醋芋頭-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/31.醋芋頭詩-01.png`
    }
    if(selected_image =="32.蘆筍干貝-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/32.蘆筍干貝詩-01.png`
    }
    if(selected_image =="33.空心菜乳製品-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/33.空心菜乳製品詩-01.png`
    }
    if(selected_image =="34.紫甘藍甜椒-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/34.紫甘藍甜椒詩-01.png`
    }
    if(selected_image =="35.蘆薈綠茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/35.蘆薈綠茶詩-01.png`
    }
    if(selected_image =="36.番茄小黃瓜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/36.番茄小黃瓜詩-01.png`
    }
    if(selected_image =="37.木耳螺肉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/37.木耳螺肉詩-01.png`
    }
    if(selected_image =="38.苦瓜豆豉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/38.苦瓜豆豉詩-01.png`
    }
    if(selected_image =="39.海帶茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/39.海帶茶詩-01.png`
    }
    if(selected_image =="40.糙米綠豆-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/40.糙米綠豆詩-01.png`
    }
    if(selected_image =="41.花生牡蠣-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/41.花生牡蠣詩-01.png`
    }
    if(selected_image =="42.蓮子花生-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/42.蓮子花生詩-01.png`
    }
    if(selected_image =="43.糙米紫甘藍-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/43.糙米紫甘藍詩-01.png`
    }
    if(selected_image =="44.桑椹韭菜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/44.桑椹韭菜詩-01.png`
    }
    if(selected_image =="45.蘿蔔胡蘿蔔-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/45.蘿蔔胡蘿蔔詩-01.png`
    }
    if(selected_image =="46.紅棗蔥-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/46.紅棗蔥詩-01.png`
    }
    if(selected_image =="47.蜂蜜蔥-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/47.蜂蜜蔥詩-01.png`
    }
    if(selected_image =="48.豆腐菠菜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/48.豆腐菠菜詩-01.png`
    }
    if(selected_image =="49.雞蛋香樁-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/49.雞蛋香椿詩-01.png`
    }
    if(selected_image =="50.牛奶草莓-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/50.牛奶草莓詩-01.png`
    }
    if(selected_image =="51.奇異果牛奶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/51.奇異果牛奶詩-01.png`
    }
    if(selected_image =="52.蘋果茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/52.蘋果茶詩-01.png`
    }
    if(selected_image =="53.橘子蘿蔔-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/53.橘子蘿蔔詩-01.png`
    }
    if(selected_image =="54.榴蓮荔枝-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/54.榴蓮荔枝詩-01.png`
    }
    if(selected_image =="55.奇異果香蕉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/55.奇異果香蕉詩-01.png`
    }
    if(selected_image =="56.楊桃葡萄柚-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/56.楊桃葡萄柚詩-01.png`
    }
    if(selected_image =="57.優酪乳火腿-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/57.優酪乳火腿詩-01.png`
    }
    if(selected_image =="58.牛奶巧克力-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/58.牛奶巧克力詩-01.png`
    }
    if(selected_image =="59.咖啡牛奶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/59.咖啡牛奶詩-01.png`
    }
    if(selected_image =="60.可樂豆腐-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/60.可樂豆腐詩-01.png`
    }
    if(selected_image =="61.乳酪咖啡-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/61.乳酪咖啡詩-01.png`
    }
    if(selected_image =="62.紫米茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/62.紫米茶詩-01.png`
    }
    if(selected_image =="63.蘿蔔蘋果-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/63.蘿蔔蘋果詩-01.png`
    }
    if(selected_image =="64.鳳梨雞蛋-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/64.鳳梨雞蛋詩-01.png`
    }
    if(selected_image =="65.柿子優酪乳-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/65.柿子優酪乳詩-01.png`
    }
    if(selected_image =="66.木瓜蝦子-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/66.木瓜蝦子詩-01.png`
    }
    if(selected_image =="67.桃子西瓜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/67.桃子西瓜詩-01.png`
    }
    if(selected_image =="68.優酪乳柚子-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/68.優酪乳柚子詩-01.png`
    }
    if(selected_image =="69.茶鮮奶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/69.茶鮮奶詩-01.png`
    }
    if(selected_image =="70.蜂蜜檸檬-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').src = `images/70.蜂蜜檸檬詩-01.png`
    }
}