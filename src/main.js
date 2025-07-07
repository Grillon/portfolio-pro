// Import du fichier JSON
import portfolioData from './data/thierry_vogel_portfolio_structured_v11_no_emojis.json';

// Fonction pour obtenir l'icône appropriée selon le titre du projet
function getIconForProject(titre) {
  if (titre.includes('Augmentation')) return '🛠️';
  if (titre.includes('Pré-check')) return '🧪';
  if (titre.includes('Interopérabilité')) return '🌐';
  if (titre.includes('Refonte')) return '🔁';
  if (titre.includes('Pipelines')) return '⚙️';
  if (titre.includes('Cloud')) return '☁️';
  if (titre.includes('Unification')) return '🧩';
  if (titre.includes('Exploration')) return '🚀';
  return '✅';
}

// Fonction pour créer le HTML principal
function createMainHTML(data) {
  return `
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-x-hidden">
      <!-- Blueprint Grid Background -->
      <div class="absolute inset-0 opacity-20" style="
        background-image: 
          linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
        background-size: 120px 120px, 120px 120px, 24px 24px, 24px 24px;
      "></div>
      
      <!-- Blueprint Frame Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Corner markers -->
        <div class="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-400"></div>
        <div class="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400"></div>
        <div class="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-400"></div>
        <div class="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-400"></div>
        
        <!-- Title block frame -->
        <div class="absolute top-16 left-8 right-8 h-32 border border-blue-400/40 rounded-sm"></div>
        
        <!-- Technical annotations -->
        <div class="absolute top-20 left-12 text-xs text-blue-400/60 font-mono">PORTFOLIO-TV-2025</div>
        <div class="absolute bottom-20 right-12 text-xs text-blue-400/60 font-mono">REV-001</div>
      </div>
      
      <!-- Main border frame -->
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500"></div>
      
      <div class="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        ${createHeader(data)}
        ${createAboutSection(data)}
        ${createQuickSummaries(data)}
        ${createCaseStudiesSection(data)}
        ${createTodaySection(data)}
        ${createFooter(data)}
      </div>
    </div>
  `;
}

// Fonction pour créer le header
function createHeader(data) {
  return `
    <header id="header" class="text-center mb-16 relative">
      <div class="absolute -top-6 -left-6 w-12 h-12 border-2 border-blue-400/60">
        <div class="absolute top-1 left-1 right-1 bottom-1 border border-blue-400/40"></div>
      </div>
      <div class="absolute -top-6 -right-6 w-12 h-12 border-2 border-blue-400/60">
        <div class="absolute top-1 left-1 right-1 bottom-1 border border-blue-400/40"></div>
      </div>
      <div class="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-blue-400/60">
        <div class="absolute top-1 left-1 right-1 bottom-1 border border-blue-400/40"></div>
      </div>
      <div class="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-blue-400/60">
        <div class="absolute top-1 left-1 right-1 bottom-1 border border-blue-400/40"></div>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        ${data.titre}
      </h1>
      <p class="text-xl text-blue-200 max-w-3xl mx-auto">
        ${data.court_apropos}
      </p>
    </header>
  `;
}

// Fonction pour créer les résumés rapides
function createQuickSummaries(data) {
  const resumeItems = data.resumes_rapides.map((resume, index) => `
    <a href="#case-${index}" class="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-800/30 transition-colors group cursor-pointer block">
      <div class="flex-shrink-0 p-2 bg-blue-700/50 rounded-full group-hover:bg-blue-600/50 transition-colors text-2xl">
        ${getIconForProject(resume.titre)}
      </div>
      <div class="flex-grow">
        <h3 class="font-semibold text-blue-100 mb-2 flex items-center gap-2">
          ${resume.titre.replace(/^[🛠️🧪🌐🔁⚙️☁️🧩🚀]\s*/, '')}
          <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </h3>
        <p class="text-blue-200 text-sm leading-relaxed">
          ${resume.resume}
        </p>
      </div>
    </a>
  `).join('');

  return `
    <section id="resumes-rapides" class="mb-16">
      <div class="border-2 border-blue-400/60 rounded-lg p-8 backdrop-blur-sm bg-slate-900/40 relative">
        <div class="absolute -top-4 left-8 bg-slate-900 px-4 border border-blue-400/60">
          <h2 class="text-2xl font-bold text-blue-200">Résumés rapides</h2>
        </div>
        <div class="absolute -top-2 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-400/60"></div>
        <div class="absolute -top-2 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-400/60"></div>
        
        <div class="grid gap-4 mt-4">
          ${resumeItems}
        </div>
      </div>
    </section>
  `;
}

// Fonction pour créer la section À propos
function createAboutSection(data) {
  const paragraphs = data.long_apropos.split('\n\n').map(paragraph => 
    `<p class="text-blue-100 leading-relaxed">${paragraph}</p>`
  ).join('');

  return `
    <section id="a-propos" class="mb-16">
      <div class="border-2 border-blue-400/60 rounded-lg p-8 backdrop-blur-sm bg-slate-900/40 relative">
        <div class="absolute -top-4 left-8 bg-slate-900 px-4 border border-blue-400/60">
          <h2 class="text-2xl font-bold text-blue-200 flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            À propos de moi
          </h2>
        </div>
        <div class="absolute -top-2 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-400/60"></div>
        <div class="absolute -top-2 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-400/60"></div>
        
        <div class="mt-4 space-y-4">
          ${paragraphs}
        </div>
      </div>
    </section>
  `;
}

// Fonction pour créer les études de cas - TOUTES AFFICHÉES
function createCaseStudiesSection(data) {
  const caseItems = data.etudes_de_cas.map((etude, index) => `
    <div id="case-${index}" class="border-2 border-blue-500/40 rounded-lg bg-slate-800/30 scroll-mt-20">
      <div class="flex items-center gap-3 p-4 bg-slate-800/50 border-b border-blue-500/30">
        <div class="p-2 bg-blue-600/60 rounded border border-blue-400/40 text-xl">
          ${getIconForProject(etude.titre)}
        </div>
        <h3 class="text-lg font-semibold text-blue-100">
          ${etude.titre.replace(/^[🛠️🧪🌐🔁⚙️☁️🧩🚀]\s*/, '')}
        </h3>
      </div>
      
      ${createCaseContent(etude)}
    </div>
  `).join('');

  return `
    <section id="etudes-de-cas" class="mb-16">
      <div class="border-2 border-blue-400/60 rounded-lg p-8 backdrop-blur-sm bg-slate-900/40 relative">
        <div class="absolute -top-4 left-8 bg-slate-900 px-4 border border-blue-400/60">
          <h2 class="text-2xl font-bold text-blue-200 flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Études de cas détaillées
          </h2>
        </div>
        <div class="absolute -top-2 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-400/60"></div>
        <div class="absolute -top-2 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-400/60"></div>
        
        <div class="mt-4 space-y-6">
          ${caseItems}
        </div>
      </div>
    </section>
  `;
}

// Fonction pour créer le contenu d'une étude de cas
function createCaseContent(etude) {
  let content = '<div class="p-6 space-y-6 bg-slate-900/20">';
  
  // Contexte
  if (etude.contexte || etude.declencheur) {
    content += `
      <div>
        <h4 class="text-blue-200 font-semibold mb-2 flex items-center gap-2">
          <div class="w-3 h-3 bg-blue-400 border border-blue-300"></div>
          Contexte
        </h4>
        <p class="text-blue-100 leading-relaxed pl-4">
          ${etude.contexte || etude.declencheur}
        </p>
      </div>
    `;
  }
  
  // Objectif
  if (etude.objectif) {
    content += `
      <div>
        <h4 class="text-blue-200 font-semibold mb-2 flex items-center gap-2">
          <div class="w-3 h-3 bg-blue-400 border border-blue-300"></div>
          Objectif
        </h4>
        <div class="text-blue-100 leading-relaxed pl-4">
          ${etude.objectif.split('\n').map(line => {
            if (line.startsWith('- ')) {
              return `
                <div class="flex items-start gap-2 mb-1">
                  <svg class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>${line.substring(2)}</span>
                </div>
              `;
            } else if (line.trim()) {
              return `<p class="mb-2">${line}</p>`;
            }
            return '';
          }).join('')}
        </div>
      </div>
    `;
  }
  
  // Actions
  if (etude.action && etude.action.length > 0) {
    content += `
      <div>
        <h4 class="text-blue-200 font-semibold mb-2 flex items-center gap-2">
          <div class="w-3 h-3 bg-blue-400 border border-blue-300"></div>
          Actions menées
        </h4>
        <div class="space-y-2 pl-4">
          ${etude.action.map(action => `
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-blue-100">${action}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // Déploiement
  if (etude.deploiement && etude.deploiement.length > 0) {
    content += `
      <div>
        <h4 class="text-blue-200 font-semibold mb-2 flex items-center gap-2">
          <div class="w-3 h-3 bg-blue-400 border border-blue-300"></div>
          Déploiement
        </h4>
        <div class="space-y-2 pl-4">
          ${etude.deploiement.map(deploy => `
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span class="text-blue-100">${deploy}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // Impacts
  if (etude.impacts && etude.impacts.length > 0) {
    content += `
      <div>
        <h4 class="text-blue-200 font-semibold mb-2 flex items-center gap-2">
          <div class="w-3 h-3 bg-green-400 border border-green-300"></div>
          Impacts
        </h4>
        <div class="space-y-2 pl-4">
          ${etude.impacts.map(impact => `
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-blue-100">${impact}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // Remarque
  if (etude.remarque) {
    content += `
      <div class="bg-slate-800/40 p-4 rounded border-l-4 border-blue-400 border border-blue-500/30">
        <p class="text-blue-100 italic">${etude.remarque}</p>
      </div>
    `;
  }
  
  content += '</div>';
  return content;
}

// Fonction pour créer la section Aujourd'hui
function createTodaySection(data) {
  const content = data.et_aujourdhui.split('\n\n').map(paragraph => {
    if (paragraph.includes('- ')) {
      const lines = paragraph.split('\n').map(line => {
        if (line.startsWith('- ')) {
          return `
            <div class="flex items-start gap-2 ml-4">
              <svg class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-blue-100">${line.substring(2)}</span>
            </div>
          `;
        } else if (line.trim()) {
          return `<p class="text-blue-100 leading-relaxed">${line}</p>`;
        }
        return '';
      }).join('');
      return `<div class="space-y-2">${lines}</div>`;
    } else {
      return `<p class="text-blue-100 leading-relaxed">${paragraph}</p>`;
    }
  }).join('');

  return `
    <section id="aujourdhui" class="mb-16">
      <div class="border-2 border-blue-400/60 rounded-lg p-8 backdrop-blur-sm bg-slate-900/40 relative">
        <div class="absolute -top-4 left-8 bg-slate-900 px-4 border border-blue-400/60">
          <h2 class="text-2xl font-bold text-blue-200 flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Et aujourd'hui ?
          </h2>
        </div>
        <div class="absolute -top-2 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-400/60"></div>
        <div class="absolute -top-2 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-400/60"></div>
        
        <div class="mt-4 space-y-4">
          ${content}
        </div>
      </div>
    </section>
  `;
}

// Fonction pour créer le footer
function createFooter(data) {
  return `
    <footer id="footer" class="text-center py-8 border-t-2 border-blue-400/40 relative">
      <div class="absolute top-0 left-8 right-8 h-px bg-blue-400/60"></div>
      
      <a href="#header" class="mb-4 px-4 py-2 bg-blue-600/60 hover:bg-blue-500/60 border border-blue-400/60 rounded text-blue-100 text-sm transition-colors inline-block">
        ↑ Retour en haut
      </a>
      
      <p class="text-blue-300 text-sm">
        ${data.pied_de_page}
      </p>
    </footer>
  `;
}

// Initialisation de la page
document.addEventListener('DOMContentLoaded', function() {
  const app = document.getElementById('app');
  app.innerHTML = createMainHTML(portfolioData) + createFloatingNavigation();
  
  // Initialiser la navigation flottante
  initFloatingNavigation();
});

// Fonction pour créer la navigation flottante
function createFloatingNavigation() {
  return `
    <nav id="floating-nav" class="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-slate-900/90 backdrop-blur-sm border-2 border-blue-400/60 rounded-lg p-2 shadow-lg">
      <div class="flex flex-col gap-2">
        <a href="#header" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="header">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            En-tête
          </div>
        </a>
        <a href="#a-propos" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="a-propos">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            À propos
          </div>
        </a>
        
        <a href="#resumes-rapides" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="resumes-rapides">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Résumés rapides
          </div>
        </a>
        
        
        <a href="#etudes-de-cas" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="etudes-de-cas">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Études de cas
          </div>
        </a>
        
        <a href="#aujourdhui" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="aujourdhui">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Aujourd'hui
          </div>
        </a>
        
        <a href="#footer" class="nav-item group relative p-2 rounded hover:bg-blue-600/30 transition-colors" data-section="footer">
          <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-800 text-blue-100 px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Pied de page
          </div>
        </a>
      </div>
    </nav>
  `;
}

// Fonction pour initialiser la navigation flottante
function initFloatingNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = ['header', 'resumes-rapides', 'a-propos', 'etudes-de-cas', 'aujourdhui', 'footer'];
  
  // Fonction pour mettre à jour l'état actif de la navigation
  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100; // Offset pour la détection
    
    let currentSection = 'header';
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          currentSection = sectionId;
        }
      }
    });
    
    // Mettre à jour les classes actives
    navItems.forEach(item => {
      const section = item.getAttribute('data-section');
      if (section === currentSection) {
        item.classList.add('bg-blue-600/50', 'border', 'border-blue-400/60');
        item.classList.remove('hover:bg-blue-600/30');
      } else {
        item.classList.remove('bg-blue-600/50', 'border', 'border-blue-400/60');
        item.classList.add('hover:bg-blue-600/30');
      }
    });
  }
  
  // Écouter le scroll pour mettre à jour la navigation
  window.addEventListener('scroll', updateActiveNav);
  
  // Initialiser l'état actif
  updateActiveNav();
  
  // Ajouter un comportement de scroll fluide pour les liens
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Offset pour le header fixe
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}
