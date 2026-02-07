// Fetch GitHub repository stats
async function fetchRepoStats() {
    try {
        const response = await fetch('https://api.github.com/repos/saeeedhany/potatOS');
        const data = await response.json();

        document.getElementById('repo-stars').textContent = data.stargazers_count || '0';
        document.getElementById('repo-forks').textContent = data.forks_count || '0';
    } catch (error) {
        console.log('Could not fetch repo stats');
        document.getElementById('repo-stars').textContent = '0';
        document.getElementById('repo-forks').textContent = '0';
    }
}

// Run on page load
if (document.getElementById('repo-stars')) {
    fetchRepoStats();
}
