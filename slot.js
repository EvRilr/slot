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
        document.getElementById('textbox').textContent ='食用需多量，不要放心上。烹煮較麻煩，結果不一樣。'
    }
    if(selected_image =="02.蛋麻油-01-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='煎蛋麻油香，治感冒咳嗽。找不到資料，資訊有紕漏。'
    }
    if(selected_image =="03.雞蛋鴨肉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='兩項都營養，怎麼會這樣。營養壹加壹，身體好棒棒。'
    }
    if(selected_image =="04.蛋汁鹽巴-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='調味這樣做，可安心食用。只是加個鹽，食物碰碰碰。'
    }
    if(selected_image =="05.雞蛋韭菜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='韭菜炒雞蛋，溫暖家常菜。問題在哪裡，資料沒交代。'
    }
    if(selected_image =="06.豆漿茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='不溶解狀況，好像很可怕。是不易吸收，問題沒很大。'
    }
    if(selected_image =="07.蝦仁腰果-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='蝦仁與腰果，高血壓找我。不想被纏上，飲食好好做。'
    }
    if(selected_image =="08.生魚片米酒-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='生食很危險，烹飪請注意。坦若吃下去，有蟲蟲危機。'
    }
    if(selected_image =="09.芹菜魷魚-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='重點畫起來，新鮮很重要。如吃隔夜菜，心跳少一拍。'
    }
    if(selected_image =="10.黃魚洋蔥-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='資訊再亂報，我將會猝死。請小心講話，怎麼會結石。'
    }
    if(selected_image =="11.蛤蜊芹菜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='蛤蜊加芹菜，聽起來不賴。但肚子它說，它沒有很愛。'
    }
    if(selected_image =="12.蝦維他命C-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='說產生砒霜，有這麼誇張。如希望發生，請去吃大量。'
    }
    if(selected_image =="13.蝦洋蔥-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='腸胃不適狀，真的會這樣。盡量分開吃，比較沒狀況。'
    }
    if(selected_image =="14.螃蟹柿子-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='嘔吐等現象，資訊好多樣。你說會中毒，怎麼不一樣。'
    }
    if(selected_image =="15.干貝火腿-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='一個在水中，一個在陸地。如果常碰面，癌症衝衝衝。'
    }
    if(selected_image =="16.蛋白質茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='吃飯搭茶飲，多少會影響。但沒到中毒，不用這麼慌。'
    }
    if(selected_image =="17.牛肉馬鈴薯-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='牛肉馬鈴薯，我都這樣煮。補鈣又健體，營養很豐富。'
    }
    if(selected_image =="18.牛肉栗子-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='暗地偷摸摸，不知搞什麼。避免去共食，嘔吐感覺噁。'
    }
    if(selected_image =="19.牛肉茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='肉肉一直塞，解膩想搭茶。給你個建議。間隔比較佳。'
    }
    if(selected_image =="20.雞湯竹筍-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='雞湯好美味，多屬高普林。痛風患者懼，喝完叫不停。'
    }
    if(selected_image =="21.豬肉生醃蛤蜊-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='生食問題多，肚子咕嚕叫。不是肚子餓，去廁所簽到。'
    }
    if(selected_image =="22.羊肉南瓜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='冬天來一碗，身體好溫暖。說消化不良，過量才愁煩。'
    }
    if(selected_image =="23.羊肉醋-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='羊肉加點醋，影響人吸收。肚子不聽話，有如被人揍。'
    }
    if(selected_image =="24.鵝肉蘋果-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='鵝誘發舊疾，過敏體質怕。共食中變化，恐影響偏大。'
    }
    if(selected_image =="25.香腸養樂多-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='香腸養樂多，健康危害假。並不會影響，除非一直呷。'
    }
    if(selected_image =="26.香腸臘肉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='中秋節烤肉，肉品不能少。一旦吃下肚，致癌率變高。'
    }
    if(selected_image =="27.火腿硬起司-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='早餐店常見，是我的最愛。長期吃下來，將會說拜拜。'
    }
    if(selected_image =="28.熱狗香蕉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='一個是黃色，一個是紅色。拿給王力宏，他都說不要'
    }
    if(selected_image =="29.韭菜豬肝-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='孕婦須注意，韭菜引早產。豬肝致發育，危險在中間。'
    }
    if(selected_image =="30.酒胡蘿蔔-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='雙雙結合中，轉成礙事物。腎臟肝臟危，常喝酒錯誤。'
    }
    if(selected_image =="31.醋芋頭-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='醋中有醋酸，敵芋頭澱粉。消化及健康，影響著我們。'
    }
    if(selected_image =="32.蘆筍干貝-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='高普林食物，高痛風機率。痛風患者忌，生活更有趣。'
    }
    if(selected_image =="33.空心菜乳製品-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='空心菜草酸，加上乳製品。草酸及鈣質，結石危難臨。'
    }
    if(selected_image =="34.紫甘藍甜椒-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='類胡蘿蔔素，礦物質等物。物質加一起，完全無用處。'
    }
    if(selected_image =="35.蘆薈綠茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='蘆薈大黃素，綠茶單寧酸。孕婦多症狀，讓你心慌慌。'
    }
    if(selected_image =="36.番茄小黃瓜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='絕佳組合欺，其實還可以。影響一些些，間隔吃還行。'
    }
    if(selected_image =="37.木耳螺肉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='木耳含磷脂，當遇螺肉時。人體消化憂，請小心飲食。'
    }
    if(selected_image =="38.苦瓜豆豉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='豆鼓鈉很高，高血壓者忌。苦瓜加進去，你就被算計。'
    }
    if(selected_image =="39.海帶茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='甲狀腺者忌，碘過量不行。休閒搭茶飲，到底命多硬。'
    }
    if(selected_image =="40.糙米綠豆-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='豐富等資訊，不要全都信。結合在一起，我一言難盡。'
    }
    if(selected_image =="41.花生牡蠣-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='花生營養素，牡蠣助發育。它們碰一起，不能成伴侶。'
    }
    if(selected_image =="42.蓮子花生-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='含鉀高食物，共食狀況多。日常避開它，別說我雞婆。'
    }
    if(selected_image =="43.糙米紫甘藍-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='含有單寧酸，狀況很不安。其實並沒有，根據從哪看。'
    }
    if(selected_image =="44.桑椹韭菜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='韭菜助消化，桑葚撞到它。刺激你腸胃，廁所跑到怕。'
    }
    if(selected_image =="45.蘿蔔胡蘿蔔-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='蘿蔔胡蘿蔔，營養價值降。說法不合理，根本沒這樣。'
    }
    if(selected_image =="46.紅棗蔥-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='紅棗健康益，甘甜易脹氣。加上配料蔥，脹氣雙倍積。'
    }
    if(selected_image =="47.蜂蜜蔥-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='蜂蜜易發脹，蔥也易脹氣。說法一團亂，根本沒問題。'
    }
    if(selected_image =="48.豆腐菠菜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='絕配壹加壹，補鈣又健體。食用須小心，說法嚇死你。'
    }
    if(selected_image =="49.雞蛋香樁-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='亞硝胺生成，致癌找上門。香樁焯水掉，危險降一成。'
    }
    if(selected_image =="50.牛奶草莓-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='草莓含草酸，鈣質於牛奶。分開較理想，兒童說掰掰。'
    }
    if(selected_image =="51.奇異果牛奶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='蛋白質結塊，天阿好可怕。很少看到它，陰影面積大。'
    }
    if(selected_image =="52.蘋果茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='芳香蘋果茶，揭開真面目。茶葉單寧酸，沉澱鐵質物。'
    }
    if(selected_image =="53.橘子蘿蔔-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='如果都想要，提醒間隔吃。甲狀腺患者，飲食需克制。'
    }
    if(selected_image =="54.榴蓮荔枝-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='夏季盛產物，血糖高低跑。血糖不穩者，只會哇哇叫。'
    }
    if(selected_image =="55.奇異果香蕉-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='鉀含量過高，腎臟患者忌。身體負擔大，看完請謹記。'
    }
    if(selected_image =="56.楊桃葡萄柚-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='鉀含量過高，症狀周圍飄。飲食躲貓貓，生活更美好。'
    }
    if(selected_image =="57.優酪乳火腿-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='優酪乳乳酸，亞硝酸火腿。致癌硝酸銨，長期食用危。'
    }
    if(selected_image =="58.牛奶巧克力-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='看似很和平，就像小心機。暗中玩遊戲，亂搞很不行。'
    }
    if(selected_image =="59.咖啡牛奶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='咖啡加牛奶，此組合不敗，其實並不然，共食竟有害。'
    }
    if(selected_image =="60.可樂豆腐-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='可樂吃豆腐，能得出什麼。降低人吸收，結石好忐忑。'
    }
    if(selected_image =="61.乳酪咖啡-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='深夜喝咖啡，甜點填肚子。腸胃跳熱舞，撐不撐得住。'
    }
    if(selected_image =="62.紫米茶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='紫米富鐵質，茶有單寧酸。搭配很正常，後果我腿軟。'
    }
    if(selected_image =="63.蘿蔔蘋果-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='甲狀腺疾病，僅只於酸性。如要避免它，水果不宜併。'
    }
    if(selected_image =="64.鳳梨雞蛋-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='沙拉健康餐，吃了好營養。你說會中毒，真的有這樣？'
    }
    if(selected_image =="65.柿子優酪乳-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='單寧酸蛋白，相碰就結塊，腸若不想痛，請分開食用。'
    }
    if(selected_image =="66.木瓜蝦子-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='我頭暈目眩，都因木瓜蝦。資訊標有毒，有這麼誇張？'
    }
    if(selected_image =="67.桃子西瓜-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='西瓜高糖量，使血糖不降，與桃子共食，忌攝取過量。'
    }
    if(selected_image =="68.優酪乳柚子-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='腸胃好敏感，相加有點怕。只因纖維質，差點叫媽媽。'
    }
    if(selected_image =="69.茶鮮奶-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='茶葉草酸多，易成草酸鈣，雖不會結石，影響鈣吸收。'
    }
    if(selected_image =="70.蜂蜜檸檬-01.png"){
          document.getElementById('box1').src = `images/${selected_image}`
        document.getElementById('textbox').textContent ='蜂蜜營養多，採摘蜂蜜時，易沾肉毒菌，幼兒記誤食。'
    }
}