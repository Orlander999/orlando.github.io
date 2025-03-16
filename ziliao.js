<div class="herb-card">
    <img src="english.jpg" alt="英语语料">
    <h3>英语日常对话语料</h3>
    <div id="dynamic-corpus"></div> <!-- 用于展示语料的容器 -->
    <div class="herb-tags">
        <span>英语</span>
        <span>对话</span>
    </div>
    <a href="#">查看详情</a>
</div>

<script>
    // 读取文本文件
    fetch('english_corpus.txt')
        .then(response => response.text())
        .then(corpus => {
            // 将语料插入网页
            const corpusDiv = document.getElementById('dynamic-corpus');
            corpusDiv.innerHTML = `<pre>${corpus}</pre>`;
        });
</script>