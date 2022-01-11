// Get all the images
image_array = [
  '01.雞蛋豆漿-01.png',
  '02.蛋麻油-01-01.png',
  '03.雞蛋鴨肉-01.png'
  /*'干貝',
  '雞蛋',
  '蛋汁',
  '豆漿',
  '蝦仁',
  '生魚片',
  '芹菜',
  '螃蟹',
  '蛋白質',
  '牛肉',
  '茶',
  '雞湯',
  '豬肉',
  '蛤蜊',
  '羊肉',
  '鵝肉',
  '香腸',
  '火腿',
  '熱狗',
  '韭菜',
  '酒',
  '醋',
  '空心菜',
  '紫甘藍',
  '蘆薈',
  '番茄',
  '木耳',
  '苦瓜',
  '海帶',
  '糙米',
  '花生',
  '蓮子',
  '桑椹',
  '蘿蔔',
  '胡蘿蔔',
  '紅棗',
  '蜂蜜',
  '蔥',
  '菠菜',
  '香樁'*/
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
/*
    if(selected_text1 =="干貝"){
        Match = [
            '火腿',
            '蘆筍'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="雞蛋"){
        Match = [
            '豆漿',
            '麻油',
            '鴨肉',
            '醋',
            '韭菜',
            '香樁'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="蛋汁"){
        Match = [
            '鹽巴'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="豆漿"){
        Match = [
            '茶'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="蝦仁"){
        Match = [
            '腰果',
            '維他命C',
            '洋蔥'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="生魚片"){
        Match = [
            '高度白酒'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="芹菜"){
        Match = [
            '魷魚',
            '蛤蜊'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="螃蟹"){
        Match = [
            '柿子'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="牛肉"){
        Match = [
            '馬鈴薯',
            '栗子',
            '茶'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    } 
    if(selected_text1 =="蛋白質"){
        Match = [
            '茶'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="茶"){
        Match = [
            '豆漿',
            '蘆薈',
            '牛肉',
            '海帶',
            '蛋白質'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="雞湯"){
        Match = [
            '竹筍'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="豬肉"){
        Match = [
            '生醃蛤蜊'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="蛤蜊"){
        Match = [
            '芹菜'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="羊肉"){
        Match = [
            '南瓜',
            '醋'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="鵝肉"){
        Match = [
            '蘋果'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }   
    if(selected_text1 =="香腸"){
        Match = [
            '養樂多',
            '臘肉'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }      
    if(selected_text1 =="火腿"){
        Match = [
            '硬起司',
            '干貝'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    } 
    if(selected_text1 =="熱狗"){
        Match = [
            '香蕉'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    } 
    if(selected_text1 =="韭菜"){
        Match = [
            '豬肝',
            '雞蛋',
            '桑椹'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }    
    if(selected_text1 =="酒"){
        Match = [
            '胡蘿蔔'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }        
    if(selected_text1 =="醋"){
        Match = [
            '芋頭',
            '羊肉'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }    
    if(selected_text1 =="空心菜"){
        Match = [
            '乳製品'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }
    if(selected_text1 =="紫甘藍"){
        Match = [
            '甜椒',
            '糙米'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    } 
    if(selected_text1 =="蘆薈"){
        Match = [
            '綠茶'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    } 
    if(selected_text1 =="番茄"){
        Match = [
            '小黃瓜'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }     
    if(selected_text1 =="木耳"){
        Match = [
            '螺肉'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }     
    if(selected_text1 =="苦瓜"){
        Match = [
            '豆鼓'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    } 
    if(selected_text1 =="海帶"){
        Match = [
            '茶'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    } 
    if(selected_text1 =="糙米"){
        Match = [
            '綠豆',
            '紫甘藍'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }     
    if(selected_text1 =="花生"){
        Match = [
            '牡蠣',
            '蓮子'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }     
    if(selected_text1 =="蓮子"){
        Match = [
            '花生'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }     
    if(selected_text1 =="桑椹"){
        Match = [
            '韭菜'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    } 
    if(selected_text1 =="蘿蔔"){
        Match = [
            '胡蘿蔔'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }     
    if(selected_text1 =="胡蘿蔔"){
        Match = [
            '蘿蔔',
            '酒'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }      
    if(selected_text1 =="紅棗"){
        Match = [
            '蔥'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }       
    if(selected_text1 =="蜂蜜"){
        Match = [
            '蔥'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    } 
    if(selected_text1 =="蔥"){
        Match = [
            '蜂蜜',
            '紅棗'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }    
    if(selected_text1 =="菠菜"){
        Match = [
            '豆腐'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    } 
    if(selected_text1 =="香樁"){
        Match = [
            '雞蛋'
        ]
        random_index = Math.floor(Math.random() *　Match.length);
        
        selected_text = Match[random_index]
          document.getElementById('box2').textContent = `${selected_text}`
    }    
*/
//  document.getElementById('box1').textContent = `${selected_text1}`
}