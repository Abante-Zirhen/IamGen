function scrollToSection(SectionAct)
{ 
    const section = document.getElementById(SectionAct);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
}

function changeText(){

    // const Change = `Wǒ shì <Strong>Abante, Zirhen</Strong>, lái zì <Strong>BSIT-3DG1</Strong> bān, wǒ èrshíèr suì le.
    // Yī míng diànnǎo jìshù àiqíng zhě, wǒ xiǎng chéngwéi
    // yīgè quánzhú chéngfā shèjìzhě, érqiě wǒ xiǎng yǒu hěn duō péngyǒu
    // yīnwèi wǒ zǒng juédé zìjǐ hěn jínbù, dàn wǒ xìngfú
    // yīnwèi wǒ yǐjīng shì gèrénle, zhè ràng wǒ juédé
    // wǒ xūyào gèngduō de gōngzuò. Wǒ xiànzài méiyǒu chéngjì,
    // dàn wǒ zhīdào yītiān wǒ huì zhuānzhe tóng yīxiàng xīngxīng
    // kànzhe chūmóu, chūmóu yītiān néng yǒu gè hǎo de rìzi.`;
    
    
    
    const textContainer = document.getElementById('TextCon');
    // textContainer.style.opacity = '0'
    // textContainer.classList.add('show');
    // textContainer.innerHTML = Change;
      var Text1 = document.getElementById('TextCon');
      var Text2 = document.getElementById('TextCon1');
     
     if(Text1.style.display === 'block' )
     {
        Text1.style.visibility = 'hidden';
        Text2.style.display = 'block';
     }
     else
     {
        Text1.style.display = 'block';
        Text2.style.display = 'none';
     }
    

   


    
    
    setTimeout(() => {
       
    //     const originalText = `
    //     Hi! I am <strong>Abante Zirhen</strong> from <strong>BSIT 3D-G1</strong><br>
    //     你好！我是 <strong>Abante Zirhen</strong> 來自 班的 <strong>BSIT 3D-G1</strong><br>
    //     Nǐ hǎo! Wǒ shì <strong>Abante Zirhen</strong> lái zì <strong>BSIT 3D-G1</strong> bān.
    //    `;
    //   textContainer.innerHTML = originalText;
      
    //   textContainer.classList.add('show');

    Text1.style.visibility = 'visible';
    Text2.style.display = 'none';
    


      
    }, 10000);
  }
