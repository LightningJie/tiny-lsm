// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Lab 介绍</a></li><li class="chapter-item expanded affix "><a href="lab0-background.html">LSM Tree 概览</a></li><li class="chapter-item expanded affix "><a href="lab0-env.html">Lab 0 环境准备</a></li><li class="chapter-item expanded "><a href="lab1/lab1-skiplist.html"><strong aria-hidden="true">1.</strong> Lab 1 跳表实现</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab1/lab1.1-SkipList-crud.html"><strong aria-hidden="true">1.1.</strong> Lab 1.1 跳表的 CRUD</a></li><li class="chapter-item expanded "><a href="lab1/lab1.2-Iterator-query.html"><strong aria-hidden="true">1.2.</strong> Lab 1.2 迭代器</a></li><li class="chapter-item expanded "><a href="lab1/lab1.3-range-query.html"><strong aria-hidden="true">1.3.</strong> Lab 1.3 范围查询</a></li></ol></li><li class="chapter-item expanded "><a href="lab2/lab2-memtable.html"><strong aria-hidden="true">2.</strong> Lab 2 MemTable</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab2/lab2.1-memtabel-crud.html"><strong aria-hidden="true">2.1.</strong> Lab 2.1 简单 CRUD</a></li><li class="chapter-item expanded "><a href="lab2/lab2.2-iterator.html"><strong aria-hidden="true">2.2.</strong> Lab 2.2 迭代器</a></li><li class="chapter-item expanded "><a href="lab2/lab2.3-range-query.html"><strong aria-hidden="true">2.3.</strong> Lab 2.3 范围查询</a></li></ol></li><li class="chapter-item expanded "><a href="lab3/lab3-SST.html"><strong aria-hidden="true">3.</strong> Lab 3 SST</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab3/Block.html"><strong aria-hidden="true">3.1.</strong> 阶段1-Block</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab3/lab3.1-Block.html"><strong aria-hidden="true">3.1.1.</strong> Lab 3.1 Block 实现</a></li><li class="chapter-item expanded "><a href="lab3/lab3.2-BlockIterator.html"><strong aria-hidden="true">3.1.2.</strong> Lab 3.2 迭代器</a></li><li class="chapter-item expanded "><a href="lab3/lab3.3-range-query.html"><strong aria-hidden="true">3.1.3.</strong> Lab 3.3 范围查询</a></li></ol></li><li class="chapter-item expanded "><a href="lab3/SST.html"><strong aria-hidden="true">3.2.</strong> 阶段2-SST</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab3/lab3.4-BlockMeta.html"><strong aria-hidden="true">3.2.1.</strong> Lab 3.4 BlockMeta</a></li><li class="chapter-item expanded "><a href="lab3/lab3.5-SSTBuilder.html"><strong aria-hidden="true">3.2.2.</strong> Lab 3.5 SSTBuilder</a></li><li class="chapter-item expanded "><a href="lab3/lab3.6-SST&&SstIterator.html"><strong aria-hidden="true">3.2.3.</strong> Lab 3.6 SST &amp;&amp; SstIterator</a></li><li class="chapter-item expanded "><a href="lab3/lab3.7-SST-Query.html"><strong aria-hidden="true">3.2.4.</strong> Lab 3.7 范围查询</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="lab4/lab4-LSM-Engine.html"><strong aria-hidden="true">4.</strong> Lab 4 LSM Engine</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab4/Engine-Base.html"><strong aria-hidden="true">4.1.</strong> 阶段1-Engine 基础功能</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab4/lab4.1-Engine-write.html"><strong aria-hidden="true">4.1.1.</strong> Lab 4.1 Engine 的写入</a></li><li class="chapter-item expanded "><a href="lab4/lab4.2-Engine-read.html"><strong aria-hidden="true">4.1.2.</strong> Lab 4.2 Engine 的读取</a></li></ol></li><li class="chapter-item expanded "><a href="lab4/Iter-Compact.html"><strong aria-hidden="true">4.2.</strong> 阶段2-迭代器 &amp;&amp; Compact</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab4/lab4.3-ConcactIterator.html"><strong aria-hidden="true">4.2.1.</strong> Lab 4.3 ConcactIterator</a></li><li class="chapter-item expanded "><a href="lab4/lab4.4-TwoMergeIterator.html"><strong aria-hidden="true">4.2.2.</strong> Lab 4.4 TwoMergeIterator</a></li><li class="chapter-item expanded "><a href="lab4/lab4.5-Compact.html"><strong aria-hidden="true">4.2.3.</strong> Lab 4.5 Compact (Hard)</a></li><li class="chapter-item expanded "><a href="lab4/lab4.6-Level_Iterator.html"><strong aria-hidden="true">4.2.4.</strong> Lab 4.6 Level_Iterator</a></li><li class="chapter-item expanded "><a href="lab4/lab4.7-Complicated-Query.html"><strong aria-hidden="true">4.2.5.</strong> Lab 4.7 复杂查询</a></li></ol></li><li class="chapter-item expanded "><a href="lab4/Optimization.html"><strong aria-hidden="true">4.3.</strong> 阶段3-LSM Tree 的优化</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab4/lab4.8-Block-Cache.html"><strong aria-hidden="true">4.3.1.</strong> Lab 4.8 缓存池设计</a></li><li class="chapter-item expanded "><a href="lab4/lab4.9-Bloom-Filter.html"><strong aria-hidden="true">4.3.2.</strong> Lab 4.9 布隆过滤器</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="lab5/lab5-Tranc-MVCC.html"><strong aria-hidden="true">5.</strong> Lab 5 事务 &amp;&amp; MVCC &amp;&amp; WAL</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab5/Tranc-Base.html"><strong aria-hidden="true">5.1.</strong> 阶段1-事务基础功能</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab5/lab5.1-Tranc.html"><strong aria-hidden="true">5.1.1.</strong> Lab 5.1 事务基础功能(Hard)</a></li><li class="chapter-item expanded "><a href="lab5/lab5.2-Tranc-ID.html"><strong aria-hidden="true">5.1.2.</strong> Lab 5.2 事务管理器(Hard)</a></li></ol></li><li class="chapter-item expanded "><a href="lab5/WAL-Recover.html"><strong aria-hidden="true">5.2.</strong> 阶段2-WAL和崩溃恢复</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab5/lab5.3-Record.html"><strong aria-hidden="true">5.2.1.</strong> Lab 5.3 Record 编解码</a></li><li class="chapter-item expanded "><a href="lab5/lab5.4-WAL.html"><strong aria-hidden="true">5.2.2.</strong> Lab 5.4 WAL 运行机制</a></li><li class="chapter-item expanded "><a href="lab5/lab5.5-Recover.html"><strong aria-hidden="true">5.2.3.</strong> Lab 5.5 崩溃恢复</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="lab6/lab6-Redis.html"><strong aria-hidden="true">6.</strong> Lab 6 Redis 兼容</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lab6/lab6.1-String.html"><strong aria-hidden="true">6.1.</strong> Lab 6.1 简单字符串</a></li><li class="chapter-item expanded "><a href="lab6/lab6.2-HashMap.html"><strong aria-hidden="true">6.2.</strong> Lab 6.2 哈希表</a></li><li class="chapter-item expanded "><a href="lab6/lab6.3-Set.html"><strong aria-hidden="true">6.3.</strong> Lab 6.3 无序集合</a></li><li class="chapter-item expanded "><a href="lab6/lab6.4-ZSet.html"><strong aria-hidden="true">6.4.</strong> Lab 6.4 有序集合</a></li><li class="chapter-item expanded "><a href="lab6/lab6.5-List.html"><strong aria-hidden="true">6.5.</strong> Lab 6.5 链表</a></li><li class="chapter-item expanded "><a href="lab6/lab6.6-redis-server.html"><strong aria-hidden="true">6.6.</strong> Lab 6.6 redis-server</a></li></ol></li><li class="chapter-item expanded "><a href="conclusion.html"><strong aria-hidden="true">7.</strong> 结语</a></li><li class="chapter-item expanded "><a href="appendix/appendix.html"><strong aria-hidden="true">8.</strong> 附录</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="appendix/RESP.html"><strong aria-hidden="true">8.1.</strong> RESP 常见格式</a></li></ol></li><li class="chapter-item expanded "><a href="undergoing.html"><strong aria-hidden="true">9.</strong> 持续更新中...</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
