import './StatReseau.css';

function StatReseau({ lignes }) {
  // Calculs
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((somme, ligne) => somme + ligne.arrets, 0);
  
  // Trouver la ligne avec le plus d'arrêts
  let ligneMax = null;
  for (let ligne of lignes) {
    if (ligneMax === null || ligne.arrets > ligneMax.arrets) {
      ligneMax = ligne;
    }
  }

  return (
    <div className="stat-reseau">
      <div className="stat-item">
        <span className="stat-valeur">{totalLignes}</span>
        <span className="stat-label">lignes</span>
      </div>
      <div className="stat-item">
        <span className="stat-valeur">{totalArrets}</span>
        <span className="stat-label">arrêts au total</span>
      </div>
      <div className="stat-item">
        <span className="stat-valeur">{ligneMax ? ligneMax.numero : '-'}</span>
        <span className="stat-label">ligne avec le plus d’arrêts ({ligneMax ? ligneMax.arrets : '?'})</span>
      </div>
    </div>
  );
}

export default StatReseau;