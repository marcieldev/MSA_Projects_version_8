/* COMUNIDADE — apenas comportamento da página de comunidade */
import {community,config} from '../core/data.js';import {escapeHtml} from '../core/utils.js';import {initHeader} from '../components/header.js';
initHeader();const link=document.querySelector('#discordLink');(async()=>{try{const [c,cfg]=await Promise.all([community(),config()]);link.href=c?.convite||cfg?.discord?.convite||'#'}catch{link.href='#'}})();
