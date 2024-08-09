document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const modal = document.getElementById('project-modal');
    const closeButton = document.getElementById('close-button');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');

    const projectDetails = {
        1: { title: 'ToxicProxy', description: '**Advenced Reverse Proxy for Minecraft Servers written in GoLang for Extra Security such as:** \n\n- Advenced Bot Protection \n- Suspicus Packet Blocker \n- VPN Blocker \n- Packet Analysis \n- Packet ID Blocker \n- Packet Size Limiter \n- Packet Length Limiter \n- Packet PS Limiter \n- DDOS Shield \n\n**Extra Features:** \n\n- Great Optimization\n- User Friendly\n- Highly Configurable\n- Easy To Use\n- Hosted by us\n- No Player Data Stored\n- Secured Servers\n- All Version Support\n- No False Positives' },
        2: { title: 'ProxyScraper', description: 'Simple Proxy Scraper written in Python.\n\n **Features:**\n- Duplicates Remover\n- Port Remover\n- Prev Proxies\n- Protocol Remover\n- Clean IP:Port\n- Local remover\n- MultiThreaded\n- Well Optimized\n- Highly Customizable\n- Open Soruce' },
        3: { title: 'SOON', description: 'Dont wanna add old projects that i dont work on anymore or are just outdated' }
    };

    projects.forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.getAttribute('data-project');
            projectTitle.textContent = projectDetails[projectId].title;
            projectDescription.innerHTML = projectDetails[projectId].description
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/-/g, '<span class="dot">•</span>');
            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
