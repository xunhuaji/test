// poem
var words=[
    '愿姑娘岁岁常欢愉，年年皆胜意',
    '愿姑娘眉目舒展，顺问冬安，亦顺问春安',
    '愿姑娘所行皆坦途，所遇皆温柔',
    '愿姑娘心有繁花，不负韶华，不负己',
    '愿姑娘平安喜乐，万事胜意，未来可期',
    '愿姑娘衣襟带花，岁月风平，深情不负',
    '愿姑娘春去秋来皆顺遂，朝朝暮暮都欢喜',
    '愿姑娘所求皆如愿，所行化坦途，所念皆安康',
    '愿姑娘如星璀璨，如月温柔，如光耀眼',
    '愿姑娘岁岁无忧，年年有盼，日日是好日',
    '愿姑娘保持热爱，奔赴山海，永远热烈',
    '愿姑娘被世界温柔以待，眼中有光，心中有爱',
    '愿姑娘三餐四季，温柔有趣，平安顺遂',
    '愿姑娘前路浩浩荡荡，万事尽可期待',
    '愿姑娘青春不老，快乐不止，幸福不息',
    '愿姑娘所念皆星河，所行皆坦途，所遇皆美好',
    '愿姑娘日子清透，世事温柔，岁岁无忧',
    '愿姑娘笑靥如花，不负韶华，未来闪闪发光',
    '愿姑娘平安喜乐，得偿所愿，一生温暖纯良',
    '愿姑娘春有百花秋有月，夏有凉风冬有雪',
    '愿姑娘心无褶皱，日日是好日，年年皆胜意',
    '愿姑娘勇敢善良，清醒独立，永远向阳',
    '愿姑娘所求皆所得，所盼皆所期，所念皆所念',
    '愿姑娘岁月静好，现世安稳，平安喜乐',
    '愿姑娘如春风拂面，如夏雨滋润，如秋月皎洁',
    '愿姑娘岁岁常欢愉，年年皆胜意，事事皆顺心',
    '愿姑娘眼中有星河，心中有丘壑，脚下有坦途',
    '愿姑娘温柔且坚定，勇敢且自由，永远热爱生活',
    '愿姑娘三餐规律，睡眠充足，平安健康，喜乐常伴',
    '愿姑娘前路漫漫，亦有灿灿，万事顺遂无忧',
    '愿姑娘笑对人生，从容自在，永远明媚动人',
    '愿姑娘所遇皆良善，所行皆坦途，所念皆安康',
    '愿姑娘岁岁平安，年年有喜，日日开心',
    '愿姑娘如诗如画，如梦如幻，永远美好',
    '愿姑娘保持初心，砥砺前行，未来繁花似锦',
    '愿姑娘被时光温柔以待，永远年轻，永远热泪盈眶',
    '愿姑娘平安喜乐，万事胜意，一生顺遂无忧',
    '愿姑娘春有暖阳，夏有清风，秋有硕果，冬有暖阳',
    '愿姑娘心有暖阳，何惧风霜，永远向阳而生',
    '愿姑娘岁岁常欢愉，年年皆胜意，事事皆圆满',
    '愿姑娘眼中有光，心中有爱，脚下有路，未来可期',
    '愿姑娘温柔以待世界，世界亦温柔待你',
    '愿姑娘三餐四季，温暖有趣，平安顺遂，喜乐常伴',
    '愿姑娘前路浩浩荡荡，万事尽可期待，未来闪闪发光',
    '愿姑娘青春永驻，快乐常在，幸福常伴',
    '愿姑娘所念皆如愿，所行化坦途，所遇皆美好',
    '愿姑娘日子温柔，世事温柔，岁岁无忧，年年有盼',
    '愿姑娘笑靥如花，不负韶华，一生平安喜乐',
    '愿姑娘平安喜乐，得偿所愿，温柔且强大',
    '愿姑娘春有百花，秋有月，夏有凉风，冬有雪，四季皆安'
];

function init() {
    const wordBox = document.querySelector('.word-box');
    // 先清空容器，确保只有一个元素
    wordBox.innerHTML = '';
    // 创建一个用于显示的元素
    const wordElement = document.createElement('div');
    wordElement.className = 'word';
    wordBox.appendChild(wordElement);

    // 每句显示的时长（与CSS动画时长保持一致，这里假设3秒）
    const duration = 3000;

    // 按索引依次显示每句话，通过延迟控制顺序
    words.forEach((text, index) => {
        setTimeout(() => {
            // 修改元素内容
            wordElement.textContent = text;
            // 重置动画（可选，确保每次切换都重新播放动画）
            wordElement.style.animation = 'none';
            wordElement.offsetHeight; // 触发重绘
            wordElement.style.animation = `fadeInOut ${duration/1000}s linear`;
        }, index * duration); // 第n句在 n*duration 毫秒后显示
    });
}
window.addEventListener('load',init);

// 保留原有代码（poem数组、init函数等）...

let textone = document.querySelector('.textone').querySelector('h1');
let texttwo = document.querySelector('.texttwo').querySelector('h1');
let textthree = document.querySelector('.textthree').querySelector('h1');

// 初始状态：只显示textone，隐藏texttwo和textthree
texttwo.classList.add('text-hidden');
textthree.classList.add('text-hidden');

// 第一个定时器（28秒时切换）
setTimeout(function(){
    // 第一步：让textone淡出
    textone.classList.add('text-hidden');

    // 等待淡出完成（1秒后，与过渡时间一致）
    setTimeout(() => {
        // 第二步：更新内容
        textone.innerHTML = '一起看星星叭';
        textone.style.color = '#E8F9FD';
        textone.style.fontFamily = '楷体';
        texttwo.style.color = '#E8F9FD';
        texttwo.style.fontFamily = '楷体';
        textthree.style.color = '#E8F9FD';
        textthree.style.fontFamily = '楷体';
        texttwo.innerHTML = '';

        // 第三步：让textone淡入（移除隐藏类）
        textone.classList.remove('text-hidden');
        // 确保texttwo保持隐藏
        texttwo.classList.add('text-hidden');
    }, 1000);
}, 28000);

// 第二个定时器（112.5秒时切换）
setTimeout(function(){
    // 第一步：让当前显示的textone淡出
    textone.classList.add('text-hidden');

    // 等待淡出完成
    setTimeout(() => {
        // 第二步：更新三个文本的内容
        textone.innerHTML = '愿姑娘';
        texttwo.innerHTML = '岁岁平，岁岁安';
        textthree.innerHTML = '岁岁平安';

        // 第三步：让三个文本同时淡入（移除隐藏类）
        textone.classList.remove('text-hidden');
        texttwo.classList.remove('text-hidden');
        textthree.classList.remove('text-hidden');
        document.querySelector('.return').innerHTML = "<a href='index.html' class=\"btn return-btn\">返回</a>";
        document.querySelector('.return-btn').addEventListener('click',function(){
            console.log('clicked');
        })
    }, 1000);
}, 112500);
