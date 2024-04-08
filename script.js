var currentOpenCategory = null;


        var channels = {
            spor: [
                { name: 'B*ein SPORTS 1 HD', url: 'https://zirvehd.macbizde3.com/yayinzirve.m3u8'},
                { name: 'B*ein SPORTS 2 HD', url: 'https://zirvehd.macbizde3.com/yayinb2.m3u8'},
                { name: 'B*ein SPORTS 3 HD', url: 'https://zirvehd.macbizde3.com/yayinb3.m3u8'},
                { name: 'B*ein SPORTS 4 HD', url: 'https://zirvehd.macbizde3.com/yayinb4.m3u8'},
                { name: 'B*ein SPORTS 5 HD', url: 'https://zirvehd.macbizde3.com/yayinb5.m3u8'},
                { name: 'B*ein SPORTS MAX 1 HD', url: 'https://zirvehd.macbizde3.com/yayinbm1.m3u8'},
                { name: 'B*ein SPORTS MAX 2 HD', url: 'https://zirvehd.macbizde3.com/yayinbm2.m3u8'},
                { name: 'S* SPORT 1', url: 'https://zirvehd.macbizde3.com/yayinss.m3u8' },
                { name: 'S* SPORT 2', url: 'https://zirvehd.macbizde3.com/yayinss2.m3u8' },
                { name: 'T*ivibu SPOR 1', url: 'https://zirvehd.macbizde3.com/yayint1.m3u8' },
                { name: 'T*ivibu SPOR 2', url: 'https://zirvehd.macbizde3.com/yayint2.m3u8' },
                { name: 'T*ivibu SPOR 3', url: 'https://zirvehd.macbizde3.com/yayint3.m3u8' },
                { name:'E*XXEN SPOR 1', url: 'https://zirvehd.macbizde3.com/yayinex1.m3u8'},
                { name:'E*XXEN SPOR 2', url: 'https://zirvehd.macbizde3.com/yayinex2.m3u8'},
                { name:'E*XXEN SPOR 3', url: 'https://zirvehd.macbizde3.com/yayinex3.m3u8'},
                { name:'E*XXEN SPOR 4', url: 'https://zirvehd.macbizde3.com/yayinex4.m3u8'},
                { name:'E*XXEN SPOR 5', url: 'https://zirvehd.macbizde3.com/yayinex5.m3u8'},
                { name: 'N*BA TV', url: 'https://zirvehd.macbizde3.com/yayinnbatv.m3u8' },
                { name: 'a* SPOR', url: 'https://zirvehd.macbizde3.com/yayinas.m3u8' },
                { name: 'S*mart Spor' , url: 'https://zirvehd.macbizde3.com/yayinsmarts.m3u8' },
                { name: 'S*mart Spor 2' , url: 'https://zirvehd.macbizde3.com/yayinsms2.m3u8' },
                { name: 'S*ky Sports F1' , url: 'https://zirvehd.macbizde3.com/yayinf1.m3u8' },
                { name: 'E*uro sport 1' , url: 'https://zirvehd.macbizde3.com/yayineu1.m3u8' },
                { name: 'E*uro sport 2' , url: 'https://zirvehd.macbizde3.com/yayineu2.m3u8' }
                
                
                //{ name: '', url: ''},
                
            ],
            ulusal: [
                { name: 'TRT 1 HD', url: 'https://tv-trt1-dai.medya.trt.com.tr/master_2.m3u8' },
                { name: 'KANAL D UHD', url: 'https://demiroren-live.daioncdn.net:443/kanald/kanald_1080p.m3u8' },
                { name: 'SHOW TV UHD', url: 'https://ciner-live.daioncdn.net:443/showtv/showtv_1080p.m3u8' },
                { name: 'STAR TV HD', url: 'https://dogus-live.daioncdn.net:443/startv/startv_720p.m3u8' },
                { name: 'BEYAZ TV UHD', url: 'https://beyaztv-live.daioncdn.net:443/beyaztv/beyaztv_1080p.m3u8' },
                { name: 'KANAL 7 UHD', url: 'https://kanal7-live.daioncdn.net:443/kanal7/kanal7_1080p.m3u8' },
                { name: 'TEVE2 UHD', url: 'https://demiroren-live.daioncdn.net:443/teve2/teve2_1080p.m3u8' },
                { name: 'TV8 UHD', url: 'https://tv8-live.daioncdn.net:443/tv8/tv8_1080p.m3u8' },
                { name: 'TV8\'5 UHD', url: 'https://tv8-live.daioncdn.net:443/tv8bucuk/tv8bucuk_1080p.m3u8' },
                { name: 'TLC HD', url: 'https://dogus-live.daioncdn.net/tlc/tlc_720p.m3u8' },
                { name: 'DMAX HD', url: 'https://dogus-live.daioncdn.net/dmax/dmax_720p.m3u8' },
                { name: 'NTV HD', url: 'https://dogus-live.daioncdn.net:443/ntv/ntv_720p.m3u8' },
                { name: 'TRT BELGESEL HD', url: 'https://tv-trtbelgesel.live.trt.com.tr:443/master_720.m3u8' },
                { name: 'TRT ÇOCUK HD', url: 'https://tv-trtcocuk.live.trt.com.tr:443/master_720.m3u8' },
                { name: 'HALK TV FHD', url: 'https://halktv.daioncdn.net/halktv/halktv_1080p.m3u8?sid=63dsvmxqtka0&app=c86957d3-74a7-44da-9ad2-dc358c769609&ce=3' },
                { name: 'ATV HD', url: 'https://zirvehd.macbizde3.com/yayinatv.m3u8'},
                { name: 'A Haber HD', url: 'https://trkvz-live.ercdn.net/ahaberhd/ahaberhd_720p.m3u8?st=tnNfdHF_-XeRCo1PHeNVJg&e=1710637601&SessionID=1.3.1198199821.1710592357&StreamGroup=canli-yayin&Site=ahaber&DeviceGroup=web'},
                { name: 'TRT EBA TV HD', url: 'http://tv-e-okul01.medya.trt.com.tr/master.m3u8'},
                { name: 'ŞABAN TV', url: 'https://tivi44.ozelip.com:3463/stream/play.m3u8'},


                
            ],

            filmler: [
                { name: 'Barbie (2023)', url: 'https://s25.photogrids.site/mb/DzSlLzyyYwVjZwZhDzk1pzS5YwRjBQOjYxEIDHjd0zxpTuiqT9apzyxpl5mnKEys0xi25vr1b1080', poster: 'img/film/barbie.jpg' },
                { name: 'Wonka (2023)', url: 'https://be6721.rcr72.waw04.cdn112.com/hls2/01/05361/gpqnwzscofhq_x/index-v1-a1.m3u8?t=Z_JR-LXmnpTzwWaYbsHgD6HG66Fu699dPH6ECGfJEuI&s=1706016278&e=43200&f=26805503&srv=34&asn=34984&sp=2500', poster: 'img/film/wonka.jpg' },
                { name: 'Blue Beetle', url: 'https://p2.photofunny.org/v/4tfvc3pk3kxo/1080.m3u8', poster: 'img/film/blue-beetle.jpg' },
                { name: 'Ninja Kaplumbağalar Mutant Kargaşası', url: 'https://s26.photogrids.site/ma/ITIyozSaMF5AqKEuoaDhGzyhnzRhIUIlqTkypl5AqKEuoaDhGJS5nTIgYwVjZwZhDzk1pzS5YwRjBQOjYxEIDHjd0zxpTuiqT9apzyxpl5mnKEys0xi26vr1b1080', poster: 'img/film/NinjaMutant.jpg' },
                { name: 'Harry Potter 1 Felsefe Taşı', url: 'https://voyage-sc-922.vmeas.cloud/hls/xqx2ir7bmnokjiqbte3sl6i24zp6rspbe6jpqe3qps444kpthfdzb7yxgsha/index-v1-a1.m3u8' , poster: 'img/film/harrypotter1.jpg'},
                { name: 'Jurassic World:3 (2022)', url: 'https://p1.photomag.biz/mn/ZTuyAQOhZUH3MKMcd0zxpTuiqT9gLJphLzy6s0xi5vr1bhd' , poster: 'img/film/hakimiyet.jpg'}
                //{ name: 'Barbie (2023)', url: 'https://be7713.rcr82.', poster: 'barbie.jpg' }
                // Diğer filmler...
            ],
            
            yedek: [
                { name: 'B*ein SPORTS 1 HD inat', url: 'https://zirvehd.macbizde3.com/yayininat.m3u8' },
                { name: 'B*ein SPORTS 1B', url: 'https://corsproxy.baby/proxy/?apiurl=https://playhdnew5.buzz/yayinstar.m3u8' },
                { name: 'E*XXEN SPOR 1B', url: 'https://due.8d826131c019fea.shop/q/www.selcuksportshd1155.xyz/2/c.acdwatercn.shop/chunklist_hd.m3u8' },
                { name: 'S* SPORTS 1B', url: 'http://dt0811.xyz:8080/zlh0935/zlh.1905/263077' },
                

            ]
        };

        var currentCategory = null;

        function showCategory(category) {
    var channelButtonsContainer = document.getElementById('channelButtons');

    if (currentOpenCategory === category) {
        // Aynı kategoriye tekrar tıklanırsa kapatın.
        channelButtonsContainer.innerHTML = '';
        currentOpenCategory = null;
        return;
    }

    currentOpenCategory = category;
    channelButtonsContainer.innerHTML = '';

    channels[category].forEach(function (channel) {
        var channelDiv = document.createElement('div');
        channelDiv.className = 'channelDiv';

        var channelButton = document.createElement('button');
        channelButton.className = 'channelButton';

        if (category === 'filmler' && channel.poster) {
            var channelImage = document.createElement('img');
            channelImage.src = channel.poster;
            channelImage.className = 'channelImage';
            channelButton.appendChild(channelImage);
        }

        var channelName = document.createElement('span');
        channelName.textContent = channel.name;
        channelName.className = 'channelName';
        channelButton.appendChild(channelName);

        channelButton.onclick = function () {
            playChannel(channel.name, channel.url);
        };

        channelDiv.appendChild(channelButton);
        channelButtonsContainer.appendChild(channelDiv);
    });
}


function playChannel(channelName, channelURL) {
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '<h2>' + channelName + '</h2><video controls autoplay id="videoPlayer"></video>';

    var video = document.getElementById('videoPlayer');
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(channelURL);
        hls.attachMedia(video);
        video.play();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = channelURL;
        video.play();
    } else {
        console.error('Tarayıcınız M3U8 formatını desteklemiyor.');
    }

    // Tüm kanal düğmelerini gizle
    var channelButtonsContainer = document.getElementById('channelButtons');
    channelButtonsContainer.innerHTML = '';

    // Geri butonunu göster
    
    backButton.onclick = function () {
        showCategory(currentOpenCategory); // Seçili kategoriye geri dön
    };
    channelButtonsContainer.appendChild(backButton);

	}

	function openUrlInNewTab(url) {
		window.open(url, '_blank');
	}

    
	

	
	
