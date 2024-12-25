const aud0=new Audio(),
      aud1=new Audio();
aud0.src='aud-0.mp3';
aud1.src='aud-1.mp3';
aud1.controls=aud0.controls=false;
aud1.loop=aud0.loop=true;
aud1.volume=aud0.volume=1;
let colinde=null;