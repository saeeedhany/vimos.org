document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.post-content');
    const tocList = document.getElementById('toc-list');
    
    if (!content || !tocList) return;
    
    // Find all h2 and h3 headers
    const headers = content.querySelectorAll('h2, h3');
    
    if (headers.length === 0) {
        document.getElementById('toc').style.display = 'none';
        return;
    }
    
    headers.forEach((header, index) => {
        // Add ID to header if it doesn't have one
        if (!header.id) {
            header.id = 'section-' + index;
        }
        
        // Create TOC item
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + header.id;
        a.textContent = header.textContent;
        
        // Add indentation for h3
        if (header.tagName === 'H3') {
            li.style.paddingLeft = '15px';
        }
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
    
    // Smooth scroll
    tocList.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
