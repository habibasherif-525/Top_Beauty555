(function(){
  var lang=document.documentElement.lang==='en'?'en':'ar',views=['home','about','courses','instructors','book'];
  var $=function(s){
    return document.querySelector(s)
  };
  var $$=function(s){
    return Array.prototype.slice.call(document.querySelectorAll(s))
  };
  function L(o){
    return o[lang]
  }
  function num(n){
    return lang==='ar'?Number(n).toLocaleString('ar-EG'):Number(n).toLocaleString('en')
  }
  function sar(n){
    return lang==='ar'?num(n)+' ر.س':'SAR '+num(n)
  }

  /* ---------- DATA (from the original site) ---------- */
  var intents=[
    {id:'basics',p:2800,t:{ar:'أساسيات المكياج',en:'Makeup Basics'},d:{ar:'بشرة وفاونديشن وعيون وشفاه لإطلالات يومية',en:'Skin, foundation, eyes & lips for everyday looks'}},
    {id:'bridal',p:4500,t:{ar:'مكياج العرائس والسهرات',en:'Bridal & Evening Makeup'},d:{ar:'إطلالات تدوم طويلاً مع كونتور ورموش',en:'Long-wear looks with contour & lashes'}},
    {id:'pro',p:8900,t:{ar:'دبلوم الميك أب أرتست',en:'Artist Diploma'},d:{ar:'برنامج كامل مع بورتفوليو ومهارات إدارة العمل',en:'Full program with portfolio & business skills'}}
  ];
  var durs=[
    {l:{ar:'فصل المجموعة الصغيرة',en:'Small-group class'},p:0},
    {l:{ar:'مجموعة مصغّرة (٣ طالبات)',en:'Mini group (3 students)'},p:900},
    {l:{ar:'جلسات خاصة',en:'Private sessions'},p:2200}
  ];
  var extras=[
    {id:'kit',p:1200,t:{ar:'حقيبة أدوات احترافية',en:'Professional tool kit'}},
    {id:'shoot',p:900,t:{ar:'جلسة تصوير للبورتفوليو',en:'Portfolio photoshoot'}},
    {id:'coach',p:600,t:{ar:'جلسة تدريب خاصة ١:١',en:'1-on-1 coaching session'}},
    {id:'editorial',p:700,t:{ar:'تدريب على مكياج الفوتوشوت',en:'Editorial shoot training'}}
  ];
  var prods=[
    {id:'p1',n:{ar:'سيروم التحضير قبل المكياج',en:'Pre-Makeup Prep Serum'},s:{ar:'بشرة ناعمة وقاعدة مثالية للفاونديشن',en:'Smooth skin, a perfect foundation base'},v:'30 ml',p:340,tag:{ar:'الأكثر مبيعاً',en:'Bestseller'},i:{ar:'خلاصة الأوركيد، ببتيدات نباتية، هيالورونيك ثلاثي',en:'Orchid extract, phyto-peptides, triple hyaluronic'},pos:'20% 55%'},
    {id:'p2',n:{ar:'كريم الترطيب الأساسي',en:'Hydrating Base Cream'},s:{ar:'ترطيب يدوم طوال اليوم تحت المكياج',en:'All-day hydration under makeup'},v:'50 ml',p:295,tag:{ar:'تركيبة نقية',en:'Clean Formula'},i:{ar:'ورد طائفي، سيراميد نباتي، سكوالين',en:'Taif rose, vegan ceramides, squalane'},pos:'45% 55%'},
    {id:'p3',n:{ar:'إكسير الإشراقة',en:'Radiance Elixir'},s:{ar:'لمسة إشراقة تكمل الإطلالة النهائية',en:'A glow that finishes the look'},v:'100 ml',p:260,tag:{ar:'إصدار حصري',en:'Signature Edition'},i:{ar:'زيت الكاميليا، التين الشوكي، مسك أبيض',en:'Camellia seed, prickly pear, white musk'},pos:'70% 55%'},
    {id:'p4',n:{ar:'قناع التنقية بعد الجلسة',en:'Post-Session Clarifying Mask'},s:{ar:'ينظّف المسام ويزيل آثار المكياج بلطف',en:'Gently clears pores after a long day of makeup'},v:'75 ml',p:225,tag:{ar:'تنظيف لطيف',en:'Gentle Detox'},i:{ar:'طين الكاولين، لافندر طبيعي، خلاصة الصبار',en:'White kaolin clay, lavender, desert aloe'},pos:'90% 55%'}
  ];
  var faqs=[
    {q:{ar:'هل أحتاج إلى خبرة سابقة؟',en:'Do I need prior experience?'},a:{ar:'لا. دورة الأساسيات تبدأ من الصفر، وكل دورة يظهر مستواها بوضوح قبل التسجيل.',en:'No. Makeup Basics starts from zero, and every course shows its level clearly before you enrol.'}},
    {q:{ar:'هل أحصل على شهادة؟',en:'Will I get a certificate?'},a:{ar:'نعم، تحصلين على شهادة معتمدة عند إتمام الدورة تضيفينها إلى ملفّك المهني.',en:'Yes. You receive a certificate on completion to add to your professional portfolio.'}},
    {q:{ar:'هل الأدوات والمنتجات مشمولة؟',en:'Are tools and products included?'},a:{ar:'لكل طالبة حقيبة أدوات نظيفة خاصة بها، ونتدرّب بماركات احترافية تناسب بشرة الخليج.',en:'Every student gets her own clean tool kit, and we train with professional brands suited to Gulf skin.'}},
    {q:{ar:'كم عدد الطالبات في الفصل؟',en:'How many students are in a class?'},a:{ar:'٨ طالبات كحد أقصى، ليحصل كل فصل على اهتمام كامل من المدرّبة.',en:'Eight at most, so every student gets her instructor’s full attention.'}},
    {q:{ar:'هل يمكنني زيارة الأكاديمية قبل التسجيل؟',en:'Can I visit the academy before enrolling?'},a:{ar:'بالتأكيد. الزيارة مجانية وبلا أي التزام، احجزيها من صفحة التواصل.',en:'Absolutely. Visits are free with no commitment—book one from the contact page.'}}
  ];
  var stories=[
    {n:{ar:'نورة آل سعود',en:'Noura Al-Saud'},c:{ar:'الرياض · حطين',en:'Riyadh · Hittin'},r:{ar:'أساسيات المكياج',en:'Makeup Basics'},q:{ar:'بدأت من الصفر، وبعد أسبوعين صرت أضع مكياجي بثقة. الشرح بسيط والتدريب عملي من اليوم الأول.',en:'I started from zero, and within two weeks I was doing my own makeup with confidence. Simple teaching, hands-on from day one.'}},
    {n:{ar:'سارة القحطاني',en:'Sarah Al-Qahtani'},c:{ar:'جدة · الشاطئ',en:'Jeddah · Al Shati'},r:{ar:'مكياج العرائس والسهرات',en:'Bridal & Evening Makeup'},q:{ar:'تعلّمت إطلالات تثبت ساعات طويلة، وصرت أستلم حجوزات عرائس بعد الدورة بأسابيع قليلة.',en:'I learned looks that last for hours, and I was taking bridal bookings just weeks after the course.'}},
    {n:{ar:'لمى العتيبي',en:'Lama Al-Otaibi'},c:{ar:'الخبر · الكورنيش',en:'Al Khobar · Corniche'},r:{ar:'العناية بالبشرة ودرجاتها',en:'Skincare & Skin Tones'},q:{ar:'أخيراً فهمت كيف أختار الدرجة المناسبة لكل بشرة. المدرّبة صبورة وتشرح كل تفصيلة.',en:'I finally understand how to match shades to every skin tone. My instructor was patient and explained every detail.'}},
    {n:{ar:'الجوهرة الدوسري',en:'Al-Jawhara Al-Dosari'},c:{ar:'الرياض · حطين',en:'Riyadh · Hittin'},r:{ar:'دبلوم الميك أب أرتست',en:'Artist Diploma'},q:{ar:'جلسة التصوير أعطتني بورتفوليو احترافي من أول يوم. الدبلوم غيّر مسارى المهني بالكامل.',en:'The portfolio shoot gave me a professional portfolio from day one. The diploma changed my career path.'}}
  ];

  /* ---------- STATE ---------- */
  var st={g1:0,g2:0,g3:['kit']},cart=[
    {id:'p1',q:1}
  ],FREE=450;

  /* ---------- RENDER ---------- */
  function btn(cls,html,fn){
    var b=document.createElement('button');
    b.type='button';
    b.className=cls;
    b.innerHTML=html;
    b.onclick=fn;
    return b
  }
  function builder(){
    var g1=$('#g1'),g2=$('#g2'),g3=$('#g3');
    g1.innerHTML=g2.innerHTML=g3.innerHTML='';
    intents.forEach(function(x,i){
      g1.appendChild(btn('o1'+(st.g1===i?' on':''),'<b>'+L(x.t)+'</b><small>'+L(x.d)+'</small><i class="mono">'+sar(x.p)+'</i>',function(){
        st.g1=i;
        builder()
      }))
    });
    durs.forEach(function(x,i){
      g2.appendChild(btn('o2'+(st.g2===i?' on':''),'<span>'+L(x.l)+'</span><small class="mono">'+(x.p?'+'+sar(x.p):(lang==='ar'?'قياسي':'Standard'))+'</small>',function(){
        st.g2=i;
        builder()
      }))
    });
    extras.forEach(function(x){
      var on=st.g3.indexOf(x.id)>-1;
      g3.appendChild(btn('o3'+(on?' on':''),'<span class="l"><span class="bx">'+(on?'✓':'')+'</span>'+L(x.t)+'</span><em class="mono">+'+num(x.p)+'</em>',function(){
        var k=st.g3.indexOf(x.id);
        k>-1?st.g3.splice(k,1):st.g3.push(x.id);
        builder()
      }))
    });
    var tot=intents[st.g1].p+durs[st.g2].p+st.g3.reduce(function(a,id){
      return a+extras.filter(function(e){
        return e.id===id
      })[0].p
    },0);
    $('#sT').textContent=L(intents[st.g1].t);
    $('#sM').textContent=L(durs[st.g2].l);
    $('#sE').textContent=num(st.g3.length)+(lang==='ar'?' إضافات مختارة':' selected');
    $('#sP').textContent=sar(tot);
    $('#sQ').textContent=lang==='ar'?'أو قسّمها على ٤ دفعات بقيمة '+sar(Math.round(tot/4)):'Or 4 interest-free payments of '+sar(Math.round(tot/4));

  }
  function shop(){
    $('#prods').innerHTML=prods.map(function(x){
      return '<article class="prod"><div class="pimg"><img src="orchid-products.jpg" style="object-position:'+x.pos+'" alt=""><span class="bd">'+L(x.tag)+'</span><span class="ml mono">'+x.v+'</span></div><div class="pb"><h3>'+L(x.n)+'</h3><h4>'+L(x.s)+'</h4><p>'+L(x.i)+'</p><div class="pf"><button class="btn" data-add="'+x.id+'">'+(lang==='ar'?'أضف':'Add')+' +</button><div><b class="mono">'+sar(x.p)+'</b><small>'+(lang==='ar'?'٤ × '+sar(Math.round(x.p/4)):'4 × '+sar(Math.round(x.p/4)))+'</small></div></div></div></article>'
    }).join('');
    $$('[data-add]').forEach(function(b){
      b.onclick=function(){
        var id=b.dataset.add,f=cart.filter(function(c){
          return c.id===id
        })[0];
        f?f.q++:cart.push({id:id,q:1});
        drawer()
      }

    });

  }
  function content(){
    $('#faq').innerHTML=faqs.map(function(f,i){
      return '<details'+(i?'':' open')+'><summary>'+L(f.q)+'</summary><p>'+L(f.a)+'</p></details>'
    }).join('');
    $('#track').innerHTML=stories.map(function(s){
      return '<article class="q"><small>'+L(s.r)+'</small><blockquote>“'+L(s.q)+'”</blockquote><footer><b>'+L(s.n)+'</b><span>'+L(s.c)+'</span></footer></article>'
    }).join('');

  }
  function drawer(){
    var sub=cart.reduce(function(a,c){
      return a+prods.filter(function(p){
        return p.id===c.id
      })[0].p*c.q
    },0),n=cart.reduce(function(a,c){
      return a+c.q
    },0);
    $('#cartN').textContent=$('#cartN2').textContent=n;
    $('#sub').textContent=sar(sub);
    $('#ship').textContent=sub>=FREE?(lang==='ar'?'حصلتِ على شحن مبرد مجاني داخل المملكة!':'Complimentary chilled KSA shipping unlocked!'):(lang==='ar'?'أضيفي '+sar(FREE-sub)+' للشحن المجاني':'Add '+sar(FREE-sub)+' for free shipping');
    $('#items').innerHTML=n?cart.map(function(c){
      var p=prods.filter(function(x){
        return x.id===c.id
      })[0];
      return '<div class="it"><div>'+L(p.n)+'<small>'+p.v+' × '+num(c.q)+'</small></div><b class="mono">'+sar(p.p*c.q)+'</b></div>'
    }).join(''):'<p>'+(lang==='ar'?'حقيبتك فارغة حالياً':'Your beauty bag is empty')+'</p>';

  }

  /* ---------- LANGUAGE / ROUTING ---------- */
  function setLang(){
    builder();
    shop();
    content();
    drawer()
  }
  function route(){
    var p=location.hash.slice(1).split('#'),v=p[0]||'home';
    if(views.indexOf(v)<0)v='home';
    $$('.view').forEach(function(e){
      e.classList.toggle('on',e.id==='v-'+v)
    });
    $$('.links a[data-v]').forEach(function(a){
      a.classList.toggle('on',a.dataset.v===v)
    });
    var t=p[1]&&document.getElementById(p[1]);
    if(t)setTimeout(function(){
      t.scrollIntoView()
    },30);
    else window.scrollTo(0,0);

  }
  window.addEventListener('hashchange',route);
  function open(on){
    $('#drawer').classList.toggle('on',on);
    $('#shade').classList.toggle('on',on)
  }
  $('#cartBtn').onclick=$('#cartBtn2').onclick=function(){
    open(true)
  };
  $('#close').onclick=$('#shade').onclick=function(){
    open(false)
  };
  $('#checkout').onclick=function(){
    $('#chk').textContent=lang==='ar'?'تم تجهيز طلبك بنجاح — الدفع متاح عبر مدى، Apple Pay، تمارا وتابي':'Order ready — Pay seamlessly with Mada, Apple Pay, Tamara & Tabby'
  };
  $('#prev').onclick=function(){
    $('#track').scrollBy({left:lang==='ar'?420:-420,behavior:'smooth'})
  };
  $('#next').onclick=function(){
    $('#track').scrollBy({left:lang==='ar'?-420:420,behavior:'smooth'})
  };
  $('#f').onsubmit=function(e){
    e.preventDefault();
    $('#ok').style.display='block'
  };
  setLang();
  route();
  var mn=$('#menu'),bg=$('#burger'),dd=$('#dd'),db=$('#ddb'),ol=$('#otherlang');
  bg.onclick=function(){
    var o=mn.classList.toggle('open');
    bg.setAttribute('aria-expanded',o)
  };
  db.onclick=function(e){
    e.stopPropagation();
    var o=dd.classList.toggle('open');
    db.setAttribute('aria-expanded',o)
  };
  document.addEventListener('click',function(e){
    if(!dd.contains(e.target))dd.classList.remove('open')
  });
  mn.addEventListener('click',function(e){
    if(e.target.closest('a')){
      mn.classList.remove('open');
      dd.classList.remove('open')
    }

  });
  function sl(){
    ol.href=ol.dataset.to+location.hash
  }
  window.addEventListener('hashchange',sl);
  sl();

})();
