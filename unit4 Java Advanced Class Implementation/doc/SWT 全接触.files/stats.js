// Copyright (c) 2002-2004 by IBM Corporation
sa_gif    = "//stats.surfaid.ihost.com/rc/images/uc.GIF";
sa_3p_js  = "//redirect.www.ibm.com/rc/sa3p.sjs";
sa_domain = "; domain=.ibm.com";
sa_ver    = "1.40";
//
sa_click="";function sx(sy){if(!window.RegExp)return(sy);sz=/\?[Kk]rypto=[^&]+$/;if(!sz.test(sy)){sz=/[Kk]rypto=[^&]+&/;if(!sz.test(sy)){sz=/&[Kk]rypto=[^&]+$/;if(!sz.test(sy))return(sy);}}return(sy.replace(sz,""));}
s7=document;sk="undefined";function sl(){s3="ibmwm";sg="ibmwm";s4="w3ibmProfile";s5="";si="sauidp";te="satst";if((typeof(SA_ID)!=sk)&&(SA_ID!=null)){var sm=SA_ID.split(';');s3=sm[0];sg=sm[1];if(sm.length>2){s4=sm[2];}}s6=new Date();sc=Math.random().toString().substring(2,10)+s6.getTime().toString();s1=s7.cookie;sa=s1.indexOf(si);st='.npr.org';sp='www.npr.org';sq='sa_uvc';so=(location.href.indexOf(st)!=-1);ss='';sj='';sf='';if(so)sa_domain=';domain='+st;if(sa>=0){s7.cookie=te+"=1;path=/;expires="+(new Date(2000,0)).toGMTString()+sa_domain;sl_fin();}else{s7.cookie=te+"=test;path=/;expires="+(new Date(2010,0)).toGMTString()+sa_domain;if(s7.cookie.indexOf(te)==-1){sl_fin();}else{s7.cookie=te+"=1;path=/;expires="+(new Date(2000,0)).toGMTString()+sa_domain;document.writeln("<scr"+"ipt type='text/jav"+"ascr"+"ipt' "+"language='Jav"+"aScr"+"ipt1.1' src='"+sa_3p_js+"'>"+"</scr"+"ipt>");}
}}function sl_fin(sa_3p){if(sa!=-1){sh=sa+si.length+1;s8=s1.indexOf(";",sh);if(s8==-1)s8=s1.length;sj=s1.substring(sh,s8);}else{sj=sa_3p?sa_3p:("U"+sc);s7.cookie=si+"="+sj+";path=/;expires="+(new Date(2010,0)).toGMTString()+sa_domain;if(s7.cookie.indexOf(si)==-1)sj="";}if(so){lv_i_uvc=s1.indexOf(sq);if(location.href.indexOf(sp)!=-1){if(sj){if(lv_i_uvc==-1){s7.cookie=sq+"="+sj+";path=/"+sa_domain;}}}else{if((sj)&&(lv_i_uvc!=-1)){sh=lv_i_uvc+sq.length+1;s8=s1.indexOf(";",sh);if(s8==-1)s8=s1.length;sr=s1.substring(sh,s8);if(sr!=sj){s7.cookie=si+"="+sj+";path=/;expires="+(new Date(2000,0)).toGMTString();s7.cookie=si+"="+sr+";path=/;expires="+(new Date(2010,0)).toGMTString()+sa_domain;sj=sr;}}}}if(s4){if((s9=s1.indexOf(s4))!=-1){sh=s9+s4.length+1;s8=s1.indexOf(";",sh);if(s8==-1)s8=s1.length;if(s5!=""){s5=s5+'; ';}s5=s5+s4+"="+s1.substring(sh,s8);}}se=(typeof(screen)==sk||screen==null)?'0x0x0':screen.colorDepth+"x"+screen.width+"x"+screen.height;su="?"+sa_ver+"&"+escape(s3)+"&"+escape(sg)+"&"+(sa_click?escape(sa_click):escape(location))+"&"+(sa_click?escape(location):escape(s7.referrer))+"&"+s5+"&"+sf+"&"+sj+"&"+s6.getTimezoneOffset()+"&"+se+"&"+s7.images.length.toString()+"&"+((typeof(SA_Title)==sk||SA_Title==null)?"":escape(SA_Title))+"&"+((typeof(SA_Message)==sk||SA_Message==null)?"":escape(SA_Message))+"&"+sc;if(typeof(s7.s2)==sk||s7.s2==null){s7.s2=new Image();}s7.s2.src=sa_gif+su;}
function write_iframe(){var th=(typeof(SA_Message)!=sk)?escape(SA_Message):"";var tg=(typeof(SA_Title)!=sk)?escape(SA_Title):"";document.writeln('<iframe src="//www.ibm.com/common/stats/sa_data.html?req='+escape(location)+'&ref='+escape(document.referrer)+'&msg='+th+'&ttl='+tg+'" frameborder="0" width="0" height="0"></iframe>');document.s2=1;}
function sa_onclick(sn){window.SA_Title=(typeof(SA_Title)==sk||SA_Title==null)?"media_file":escape(SA_Title);sa_click=sn;if((navigator.appName.indexOf("Netscape")!=-1)){setTimeout("sl()",0);}else{sl();}return(true);}
if(typeof(s7.s2)==sk||s7.s2==null){var tf=location.hostname.toLowerCase();if(tf.indexOf(".ibm.com")==-1&&!(typeof(s7.body)==sk||!s7.body)){write_iframe();}else{sl();}}