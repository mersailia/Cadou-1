const fps=.1,
      {random:r1,round:r2}=Math,
      mos=document.getElementById('mos'),
      cadou=document.getElementById('cadou'),
      brad=document.getElementById('brad'),
      hartie=document.getElementById('hartie'),
      text=document.getElementById('text'),
      scris=document.getElementById('scris'),
      dansBox=document.getElementById('dans'),
      globuri={
          pos:[
              [43,10],[30,19],[60,19],[22,30],[45,32],
              [69,30],[25,42],[36,40],[48,43],[60,41],
              [44,21],[5,60],[25,55],[40,57],[55,55],
              [75,62],[3,75],[20,70],[37,75],[54,77],
              [69,78],[82,74],[20,90],[45,92],[64,92]
          ]
      },
      sps=(nr=4)=>{
          if(nr>0){
              let s='';
              for(let i=0;i<nr;i++) s+='&nbsp;';
              return s;
          };
          return '';
      },
      urari=(txt=null)=>{
          let arr='',
              s=r2(r1()*4);
          for(let i=0;i<r2(r1()*25)+5;i++) arr+=`<img style="width:${s*9}px;height:${s*12}px;position:absolute;left:${r2(r1()*100)}%;top:${r2(r1()*100)}%;opacity:${(r1()*.2)+.1};" src="cadouri-${r2(r1()*19)}.webp" />`;
          txt&&colinde?txt.innerHTML=`${colinde[r2(r1()*(colinde.length-1))]}<br></br><br/>* Semnat:<br/>${sps()}Merșa Ilia +<br/>${sps()}Merșa Alexandra - Maria +<br/>${sps()}Merșa Alexandru - Iliuță${arr}`:null;
      };
onload=()=>{
    try{
        for(let i=0;i<globuri.pos.length;i++){
            let produs='',
                tip=r1();
            if(tip>=.32&&tip<.38) produs='bomboane-1';
            else if(tip>=.84&&tip<.91) produs='clopocei-1';
            else produs=`globuri-${r2(r1()*6)}`;
            brad.innerHTML+=`<img src="${produs}.webp" style="--x-1:${globuri.pos[i][0]}%;--y-1:${globuri.pos[i][1]}%" />`;
            urari(scris);
        };
    }catch(err){
        new Err(err,'window.onload').show();
    };
};
mos.onclick=()=>{
    try{
        mos.style.display='none';
        if(aud0.paused) aud0.play(),aud1.pause();
        cadou.style.display='block';
    }catch(err){
        new Err(err,'mos.onclick').show();
    };
};
brad.onclick=()=>{
    try{
        hartie.style.display='none';
        if(!aud0.paused) aud0.pause(),aud1.play();
        text.style.display='block';
    }catch(err){
        new Err(err,'brad.onclick').show();
    };
};
setInterval(()=>urari(scris),1000/fps);