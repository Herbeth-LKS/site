const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch( {} );
  const page = await browser.newPage();
  await page.goto('https://br.pinterest.com/search/pins/?q=anime%20wallpaper&rs=rs&eq=&etslf=4284&term_meta[]=anime%7Crecentsearch%7C2&term_meta[]=wallpaper%7Crecentsearch%7C2');

  const imgList = await page.evaluate( () => {
      //capture all img

    const NodeList = document.querySelectorAll('section img');

    //transform in array

    const imgArray = [...NodeList]

    //convert the node in js objects

    const imgList = imgArray.map( ({src}) =>({

        src

        

    }))

    return imgList


  });

  //save to a local file
  fs.writeFile('pinterest.json', JSON.stringify(imgList, null, 2), err => {
      if(err) throw new Error ('Deu merda')

      console.log('Tudo certo')
  });


  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch( {} );
  const page = await browser.newPage();
  await page.goto('https://br.pinterest.com/search/pins/?rs=ac&len=2&q=wallpaper%20anime%20pc&eq=wallpaper%20anime&etslf=3200&term_meta[]=wallpaper%7Cautocomplete%7C4&term_meta[]=anime%7Cautocomplete%7C4&term_meta[]=pc%7Cautocomplete%7C4');

  const imgList2 = await page.evaluate( () => {
      //capture all img

    const NodeList2 = document.querySelectorAll('section img');

    //transform in array

    const imgArray2 = [...NodeList2]

    //convert the node in js objects

    const imgList2 = imgArray2.map( ({src}) =>({

        src

        

    }))

    return imgList2


  });

  //save to a local file
  fs.writeFile('pinterest2.json', JSON.stringify(imgList2, null, 2), err => {
      if(err) throw new Error ('Deu merda')

      console.log('Tudo certo')
  });


  await browser.close();
})();