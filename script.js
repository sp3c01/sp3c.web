function toggleLinks(id) {
    const linkSection = document.getElementById(id);
    const linksSection = document.getElementById('links-section');
    if (linkSection.style.display === "none" || linkSection.style.display === "") {
        const allLinks = linksSection.querySelectorAll('.links');
        allLinks.forEach(link => {
            link.style.display = "none";
        });
        linkSection.style.display = "block";
    } else {
        linkSection.style.display = "none";
    }
}