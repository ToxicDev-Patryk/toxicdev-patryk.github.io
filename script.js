function getRandomLeft() {
    const ranges = [
        { min: 15, max: 30 },
        { min: 60, max: 80 }
    ];
    const range = ranges[Math.floor(Math.random() * ranges.length)];
    return Math.random() * (range.max - range.min) + range.min;
}

function updateLeftPositions() {
    document.body.style.setProperty('--left-before', `${getRandomLeft()}%`);
    document.body.style.setProperty('--left-after', `${getRandomLeft()}%`);
}

dragElement(document.getElementById("certificateWindow"));
dragElement(document.getElementById("profileWindow"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.querySelector(".window-header")) {
        elmnt.querySelector(".window-header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


document.getElementById("profileCloseBtn").onclick = function() {
    document.getElementById("profileWindow").style.display = "none";
}

document.getElementById("closeBtn2").onclick = function() {
    document.getElementById("certificateWindow").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    updateLeftPositions();
    setInterval(updateLeftPositions, 900);
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
