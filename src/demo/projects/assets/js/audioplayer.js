window.addEventListener('DOMContentLoaded',function() {
    console.log('页面加载成功');

    var musicList = [
        {
            id : 64561,
            name : '单车(Live)',
            singer : '陈奕迅',
            picUrl : 'https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
        },

        {
            id : 5240533,
            name : '爱得太迟',
            singer : '古巨基',
            picUrl : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594723274313&di=9cf6d74062532bd7c43a62b6603c1df4&imgtype=0&src=http%3A%2F%2Fimage.juooo.com%2Fgroup1%2FM00%2F00%2F21%2FrAoKmVkQL0SAXYWjAAGk6KAxWOk197.jpg'
        },

        {
            id : 1457756795,
            name : '精忠报国(Live)',
            singer : '屠洪刚',
            picUrl : 'https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
        },
    ]

    var listUl = document.querySelector('.list ul');
    var name = document.querySelector('.name');
    var singername = document.querySelector('.singername');
    let audio = document.querySelector('#audio');

    name.innerHTML = musicList[0].name;
    singername.innerHTML = musicList[0].singer;

    for ( let i = 0; i < musicList.length; i ++ ) {
        var li = document.createElement('li');
        li.innerHTML = musicList[i].name;
        listUl.appendChild(li);
    }

    // 播放暂停
    document.querySelector('#play').onclick = function() { 
        var singer = document.querySelector('.singer');
        var cdtou = document.querySelector('.cdtou');     
        if ( audio.paused ) {
            audio.play();
            document.querySelector('#play').innerHTML = '&#xe613;';
            cdtou.style.transform = 'rotateZ(0deg)';
            singer.style.animation = 'singer 4s infinite linear';
        } else {
            audio.pause();
            document.querySelector('#play').innerHTML = '&#xe60e;';
            cdtou.style.transform = 'rotateZ(-20deg)';
            singer.style.animation = 'none';
        }
    }
})